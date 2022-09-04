const infoBox = document.querySelector(".calculationBox"); // calculatorBox 하위 엘리멘트
const result = document.querySelector(".resultnumber"); // 결과값
const operatorButton = document.querySelector(".operator");
const calculateResult = document.querySelector(".calculateResult");
const clear = document.querySelector(".resultClear")

let firstNum, operatorInformation, previousKey, previousNum, lastNum; // 정보를 담는 변수
// firstNum 처음 오는 숫자
// operatorInformation 연산기호
// previousKey 이전에 입력한것들
// previousNum 이전에 입력한 숫자
// lastNum 두번째 오는 숫자

let switchNumber = true;

function calculate(num1, operator, num2) {
  let result = 0;
  if (operator === undefined) {
    return result.textContent;
  } else {
    result = eval(num1 + operator + num2);
  }
  return String(result);
}

infoBox.addEventListener("click", function (event) {
  //클릭했을때 이벤트 발생
  const target = event.target; //HTML 요소정보 가져오기
  const clickButton = target.textContent; // HTML Text 정보
  const action = target.classList[0]; // 클래스 정보를 가져오기

  console.log(action)

  if (target.matches("button")) {
    if (action === "numbers") {
      if (firstNum !== undefined && switchNumber === true) {
        // 초기화 구문 , 처음 입력한 값이 들어있고 switchNumber가 true 일때
        result.textContent = "";
        switchNumber = false;
      }

      if (result.textContent === "0") {
        result.textContent = clickButton;
      } else {
        result.textContent += clickButton;
      }
      lastNum = result.textContent;
    }

    if (action === "operator") {
      operatorInformation = clickButton;

      if (Number(previousKey) >= 0) {
        // 이전에 입력한게 숫자라면
        firstNum = result.textContent; // firstNum에 값을 저장함
      } else {
        // 그게아니고 문자라면
        operatorInformation = clickButton;
      }
    }

    if (action === "resultClear") { //초기화
      firstNum = undefined;
      operatorInformation = "";
      lastNum = "";
      result.textContent = "0";
    }

    if (action === "calculateResult") {
      switchNumber = true;
      previousNum = firstNum
      result.textContent = calculate(previousNum, operatorInformation, lastNum);
      firstNum = calculate(previousNum, operatorInformation, lastNum);
    }
  }
  previousKey = clickButton;
});
