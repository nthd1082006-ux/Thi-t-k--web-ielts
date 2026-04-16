const placementTestForm = document.getElementById("placementTestForm");

const questionMeta = [
  {
    name: "q1",
    question: "Câu 1. Chọn câu đúng ngữ pháp",
    correctAnswer: "She goes to school every day."
  },
  {
    name: "q2",
    question: "Câu 2. Từ nào gần nghĩa nhất với important",
    correctAnswer: "Essential"
  },
  {
    name: "q3",
    question: "Câu 3. Điền từ đúng",
    correctAnswer: "had"
  },
  {
    name: "q4",
    question: "Câu 4. Chọn câu trả lời phù hợp",
    correctAnswer: "For about two years."
  },
  {
    name: "q5",
    question: "Câu 5. Chọn câu viết học thuật hơn",
    correctAnswer: "Many people believe this has negative effects."
  }
];

function getBandEvaluation(score) {
  if (score <= 1) {
    return {
      band: "3.0 - 4.0",
      level: "Mất gốc / Cần củng cố nền tảng",
      advice: "Bạn nên bắt đầu với lớp Foundation để củng cố ngữ pháp, từ vựng và phản xạ cơ bản."
    };
  }

  if (score <= 3) {
    return {
      band: "4.5 - 5.5",
      level: "Cơ bản khá",
      advice: "Bạn đã có nền tảng nhất định. Nên học lớp Pre-IELTS hoặc IELTS Foundation nâng cao."
    };
  }

  return {
    band: "6.0+",
    level: "Tiềm năng tốt",
    advice: "Bạn có nền tảng khá tốt. Có thể vào lớp luyện IELTS mục tiêu 6.0 - 6.5 hoặc cao hơn."
  };
}

if (placementTestForm) {
  placementTestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const answers = [];
    let score = 0;

    for (const item of questionMeta) {
      const selected = document.querySelector(`input[name="${item.name}"]:checked`);

      if (!selected) {
        alert("Vui lòng trả lời đầy đủ tất cả câu hỏi trước khi nộp bài.");
        return;
      }

      const isCorrect = selected.value === "1";
      if (isCorrect) score += 1;

      answers.push({
        question: item.question,
        selectedAnswer: selected.parentElement.textContent.trim(),
        correctAnswer: item.correctAnswer,
        isCorrect
      });
    }

    const evaluation = getBandEvaluation(score);

    sessionStorage.setItem("placementAnswers", JSON.stringify(answers));
    sessionStorage.setItem("placementScore", String(score));
    sessionStorage.setItem("placementBand", evaluation.band);
    sessionStorage.setItem("placementLevel", evaluation.level);
    sessionStorage.setItem("placementAdvice", evaluation.advice);

    window.location.href = "review.html";
  });
}
