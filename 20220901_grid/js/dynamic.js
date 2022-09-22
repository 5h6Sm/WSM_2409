const setCalendar = (year, month) =>{
    //오늘 `년, 오늘 월, 1 날짜 객체 구하기
    let firstDate = new Date(year, month-1, 1);
    //그 객체 요일 구하기
    let firstDay = firstDate.getDay();
    console.log(`${year}-${month} ${firstDay}요일`) //2022-9 4요일
    //html 제어

    //오늘 년, 오늘 월 + 1, 0 날짜 객체 구하기 // 다음 달의 0 == 이번 달의 마지막 날
    let lastDate = new Date(year, month, 0).getDate();
    console.log(`${lastDate}일`)

    //제목 표시하자
    //HTML id -> js 변수
    const yearSpan = document.getElementById("year");
    const monthSpan = document.getElementById("month");

    //js.innerHTML 설정하자
    yearSpan.innerHTML = year;
    monthSpan.innerHTML = month;

    //1~lastDate까지 반복하자
    const dateGridContainerDiv = document.getElementsByClassName("date-grid-container")[0]
    dateGridContainerDiv.innerHTML = ''; //초기화
    for(let i = 1; i <= lastDate; i++){
    
        //<div class = "grid-item">$</div> -> <div class = "date-grid-container">
        //새로운 element 생성
        let newElem = document.createElement("div");
        //그 element class = "grid-item"
        newElem.classList.add("grid-item");
        //그 element 텍스트 = i
        newElem.innerHTML = i;
        //.date-grid-container에 붙이기
        dateGridContainerDiv.appendChild(newElem)
    }
    //<div class = "grid-item">$</div>

    //1일 : grid-column-start : 요일 +1;
    let firstDateDiv = dateGridContainerDiv.getElementsByTagName("grid-item")[0];
    firstDateDiv.style.gridColumnStart = lastDay + 1;
}

//prevMonth 함수
const prevMonth = () => {
    //이전 월 구하기
    month--;
    if(month<=0){
        year--;
        month=12;
    }
    //setCalendar(년, 구한 월);
    setCalendar(year, month);
}
//nextMonth 함수
const nextMonth = () => {
    //다음 월 구하기
    month++;
    if(month>12){
        year++;
        month=1;
    }
    //setCalendar(년, 구한 월); 
    setCalendar(year, month);
}
//prev 버튼 누르면 prevMonth 함수 실행
prev_btn.onclick = prevMonth;
//next 버튼 누르면 nextMonth 함수 실행
next_btn.onclick = nextMonth;

//오늘 구하기
let today = new Date();
//오늘 년 구하기
let year = today.getFullYear();
//오늘 월 구하기
let month = today.getMonth();
month++;

setCalendar(year, month)