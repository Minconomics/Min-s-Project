// 랜덤 숫자 생성
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// DOM 요소 가져오기
const startBtn = document.getElementById('start');
const guessInput = document.getElementById('guess');
const submitBtn = document.getElementById('submit');
const resultDiv = document.getElementById('result');

// 게임 변수 초기화
let answer = 0;
let guessCount = 0;

// 게임 시작 버튼 클릭 시
startBtn.addEventListener('click', function() {
  // 정답 초기화
  answer = generateRandomNumber(1, 100);

  // 게임 변수 초기화
  guessCount = 0;

  // 결과 메시지 초기화
  resultDiv.innerText = '';

  // 입력창과 제출 버튼 활성화
  guessInput.disabled = false;
  submitBtn.disabled = false;
});

// 제출 버튼 클릭 시
submitBtn.addEventListener('click', function() {
  // 입력값 가져오기
  const guess = Number(guessInput.value);

  // 입력값 유효성 검사
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  // 추측 횟수 증가
  guessCount++;

  // 결과 출력
  if (guess === answer) {
    resultDiv.innerText = `Congratulations! You guessed the number in ${guessCount} tries.`;

    // 입력창과 제출 버튼 비활성화
    guessInput.disabled = true;
    submitBtn.disabled = true;
  } else if (guess < answer) {
    resultDiv.innerText = 'Too low. Guess higher.';
  } else {
    resultDiv.innerText = 'Too high. Guess lower.';
  }

  // 입력값 초기화
  guessInput.value = '';
});
