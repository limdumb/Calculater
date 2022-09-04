const infoBox = document.querySelector(".calculationBox"); // calculatorBox 하위 엘리멘트
const result = document.querySelector(".resultnumber")
let firstNum , operatorInformation , previousKey, previousNum; // 정보를 담는 변수

infoBox.addEventListener('click', function(event){ //클릭했을때 이벤트 발생
  const target = event.target //HTML 요소정보 가져오기
  const clickButton = target.textContent;  // HTML Text 정보
  const action = target.classList[0];   // 클래스 정보를 가져오기

  if(target.matches('button')){
    if (action === 'numbers') {
      console.log(clickButton);
      if (result.textContent === '0') {
        result.textContent = clickButton
      } else {
        result.textContent += clickButton
      }
    }
    
  }
})