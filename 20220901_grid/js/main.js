// 현재 년, 월, 일 알아내자
function test(){
    let today = new Date();   

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();
    // 현재 월 마지막날?
    let lastDate = new Date(year, month, 0).getDate(); //현재 월의 마지막날 : 다음 달의 0일
    // const currentYear = today.getFullYear();
    // const currentMonth = today.getMonth();
    
    // const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    // 현재 월 1일은 무슨 요일?
    let firstDate = new Date(year, month, 1).getDay();
    
    console.log(`${year}년 ${month}월 ${date}일 ${lastDate}, ${lastDate}`);
}
//오늘을 구하자
let today = new Date();
//오늘 연 구하기
let year = today.getFullYear();
//오늘 월 구하기
let month = today.getMonth();
month++;
//오늘 일 구하기
let date = today.getDate();
//오늘 요일 구하기
let day = today.getDay();
let days = ['일', '월', '화', '수', '목', '금', '토'];

console.log(`${year}년 ${month}월 ${date}일 ${days[day]}요일`);

//1일 : (오늘 연, 오늘 월, 1) 객체 구하기
year = 2005;
month = 5;
let firstDate = new Date(year, month-1, 1);
//그 객체의 요일을 구하기
let firstDay = firstDate.getDay();
console.log(days[firstDay]);
//1일을 html -> js
let firstDiv = document.getElementsByClassName("first")[0];
console.log(firstDiv);
//grid-column-start : 요일 + 1;
firstDiv.style.gridColumnStart = firstDay + 1;




