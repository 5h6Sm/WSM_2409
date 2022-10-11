//시도교육청코드 : B10 : 서울특별시교육청
//표준 학교 코드 : 7010569 : 미림여자정보과학고
//식사코드 : 2 :중식

//KEY : 
//ATPT_OFCDC_SC_CODE : 시도교육청코드
//SD_SCHUL_CODE : 표준학교코드
//  MMEAL_SC_CODE :식사코드
//MLSV_YMD : 급식일자
//MLSV_FROM_YMD : 급십ㄱ시작일자
//MLSV_TO_YMD : 급식종료일자

//https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010569&MMEAL_SC_CODE=2&MLSV_FROM_YMD=20220927&Type=json
const KEY = "948a576a81874e00bc91e056962916a8";
const ATPT_OFCDC_SC_CODE = "B10";
const SD_SCHUL_CODE = "7010569";
let MMEAL_SC_CODE = 2; //중식
let MLSV_FROM_YMD = " 20220927";
let url = `https://open.neis.go.kr/hub/mealServiceDietInfo?` + `KEY=${KEY}` + `ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`
            + `SD_SCHUL_CODE=${SD_SCHUL_CODE}` + `MLSV_FROM_YMD=${MLSV_FROM_YMD}` + `MMEAL_SC_CODE=${MMEAL_SC_CODE}`;

console.log(url);