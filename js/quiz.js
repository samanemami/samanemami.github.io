let step = 0;
const questions = [
    {
        q: "1️⃣ What university am I affiliated with?",
        options: ["Complutense", "Autónoma de Madrid (UAM)", "Barcelona"],
        correct: 1,
        fact: "Correct! I'm part of the GAA research group at UAM."
    },
    {
        q: "2️⃣ How many startups did I found?",
        options: ["None", "One", "Two"],
        correct: 2,
        fact: "That's right! I founded two startups — as part of my entrepreneurial work alongside academia."
    },
    {
        q: "3️⃣ What kind of algorithms have I developed?",
        options: ["Machine Learning algorithms", "Cryptography algorithms", "Biological models"],
        correct: 0,
        fact: "Correct! I develop advanced Machine Learning algorithms to improve accuracy and robustness."
    }
];

function startQuiz() {
    document.getElementById("quiz-header").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const q = questions[step];
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const feedback = document.getElementById("feedback");

    questionEl.textContent = q.q;
    optionsEl.innerHTML = q.options
        .map(
            (o, i) =>
                `<button onclick="checkAnswer(${i === q.correct})">${o}</button>`
        )
        .join("");
    feedback.textContent = "";
}

function checkAnswer(correct) {
    const feedback = document.getElementById("feedback");
    if (correct) {
        feedback.textContent = questions[step].fact;
        feedback.style.color = "#036c13ff";
        setTimeout(nextQuestion, 1300);
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = "#c0392b";
    }
}

function nextQuestion() {
    step++;
    if (step < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-content").innerHTML = `
        <p>🎉 Great! You know me well now.<br>
        <a href='https://samanemami.github.io/about/'>Explore my CV →</a></p>`;
    }
}
