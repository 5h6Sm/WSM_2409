// function say() {
//     console.log('hello world');
// }

// const say = function() {
//     console.log('hello world2');
// }

// const say = () => console.log('hello world3');
// say();
const addNow = (homeCardId) => {
    //html -> js
    const homeCard = document.getElementById(homeCardId);
  
    //시간 -> index번째 식사가 선택되어야하는지 결정
    //조식 끝: 8:00
    //중식 끝: 13:00
    //석식 끝: 17:50
    var now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    // console.log(hour, minute);  //14 30
    minute = hour * 60 + minute;
    if (minute >= 17 * 60 + 50) {  //1070
      index = 0;
    } else if (13 * 60 <= minute) {
      index = 2;
    } else if (8 * 60 <= minute) {
      index = 1;
    } else {
      index = 0;
    }
    // console.log(index);
  
    //homeCard에서 index번째 card에 now 클래스 추가
    let card = homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');
}
addNow('home-card');
//오늘의 날짜 표시
const showToday = () => {
    //오늘 구하고, 년, 월, 일, 요일 구하기
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let date = now.getDate();
    let day = now.getDay();
    const namesOTheDaysOfTheWeek_array = ['일', '월', '화', '수', '목', '금', '토'];
    // console.log(year, month, date, namesOTheDaysOfTheWeek_array[day]);

    //문자열 형식 맞추기
    let title = `${year}.${month}.${date}.${namesOTheDaysOfTheWeek_array[day]}`;
    // console.log(title);

    //html에 표시하자
    let cardDateDivs = document.querySelectorAll(".card-date");
    //let cardDateDivs = document.getElementsByClassName("card-date")와 위의 코드는 같다.
    for(cardDateDiv of cardDateDivs){
        cardDateDiv.innerHTML = title;
    }

}
showToday();

//오늘의 급식 가져오고 표시하기
const showTodayMenu = () => {

}
showTodayMenu();