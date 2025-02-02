const questions = [
    {
      question: "台灣的首都是哪裡？",
      choices: ["高雄", "台中", "台北", "台南"],
      correctAnswer: 2
    },
    {
      question: "1 + 1 等於多少？",
      choices: ["1", "2", "3", "4"],
      correctAnswer: 1
    },
    {
      question: "哪個是最小的質數？",
      choices: ["1", "2", "3", "5"],
      correctAnswer: 1
    },
    {
      question: "下列何者是統神在拳上講的話？",
      choices: ["這是一個不公平的比賽啊欸笑死人欸他剛剛打我我有退嗎我一步都沒有退欸欸你們裁判是怎麼判的啊欸不是我一步都沒有退然後判我輸喔被我打到流鼻血的贏喔有沒有邏輯啊不是啊我把他打到噴鼻血 這樣算我輸喔他打我 我一步都沒有退ㄟ啊這樣算我輸喔你們裁判怎麼判的啦好啦 我要回家了啦50萬匯給你啦 乞丐 ", "2", "3", "5"],
      correctAnswer: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesButtons = document.querySelectorAll(".choice");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
  
    resultElement.textContent = "";
    nextButton.style.display = "none";
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    choicesButtons.forEach((button, index) => {
      button.textContent = currentQuestion.choices[index];
      button.style.backgroundColor = "#007bff";
      button.disabled = false;
    });
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultElement = document.getElementById("result");
    const choicesButtons = document.querySelectorAll(".choice");
    const nextButton = document.getElementById("next-button");
  
    choicesButtons.forEach(button => (button.disabled = true));
  
    if (selectedIndex === currentQuestion.correctAnswer) {
      resultElement.textContent = "答對了！";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "答錯了！正確答案是：" + currentQuestion.choices[currentQuestion.correctAnswer];
      resultElement.style.color = "red";
    }
  
    choicesButtons[currentQuestion.correctAnswer].style.backgroundColor = "#28a745";
    nextButton.style.display = "block";
  }
  
  function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      const questionContainer = document.getElementById("question-container");
      questionContainer.innerHTML = "<h2>遊戲結束！感謝參與！</h2>";
      document.getElementById("next-button").style.display = "none";
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadQuestion);
  


  let score = 0; // 記錄玩家得分

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const resultElement = document.getElementById("result");
  const choicesButtons = document.querySelectorAll(".choice");
  const nextButton = document.getElementById("next-button");

  choicesButtons.forEach(button => (button.disabled = true));

  if (selectedIndex === currentQuestion.correctAnswer) {
    resultElement.textContent = "答對了！";
    resultElement.style.color = "green";
    score += 10; // 每題答對 +10 分
  } else {
    resultElement.textContent = "答錯了！正確答案是：" + currentQuestion.choices[currentQuestion.correctAnswer];
    resultElement.style.color = "red";
  }

  choicesButtons[currentQuestion.correctAnswer].style.backgroundColor = "#28a745";
  nextButton.style.display = "block";
}

function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `<h2>遊戲結束！你的分數是 ${score} 分！</h2>`;
    document.getElementById("next-button").style.display = "none";
  }
}