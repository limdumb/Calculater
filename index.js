const infoBox = document.querySelector(".calculationBox"); // calculatorBox 하위 엘리멘트
let firstNum , operatorInformation , previousKey, previousNum; // 정보를 담는 변수

infoBox.addEventListener('click', function(event){ //클릭했을때 이벤트 발생
  const target = event.target //HTML 요소정보 가져오기
  const clickButton = target.textContent;
  const action = target.classList[0];

  if(target.matches('button')){
    if (action === 'numbers') {
      console.log(clickButton);
    }
  }
})