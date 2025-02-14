function checkAnswers() {
    // Correct answers
    const correctAnswers = {
        q1: "Paris",  // Change this to your actual answer
        q2: "Blue",   // Change this to your favorite color
        q3: "Perfect" // Change this to your song
    };

    // Get user input
    let userAnswers = {
        q1: document.getElementById("q1").value.trim().toLowerCase(),
        q2: document.getElementById("q2").value.trim().toLowerCase(),
        q3: document.getElementById("q3").value.trim().toLowerCase()
    };

    // Check answers
    let score = 0;
    if (userAnswers.q1 === correctAnswers.q1.toLowerCase()) score++;
    if (userAnswers.q2 === correctAnswers.q2.toLowerCase()) score++;
    if (userAnswers.q3 === correctAnswers.q3.toLowerCase()) score++;

    // Display result
    let resultText = "";
    if (score === 3) {
        resultText = "💖 You know me so well! Happy Valentine's Day! 💖";
    } else {
        resultText = "Oops! Try again, my love! 😘";
    }

    document.getElementById("result").innerHTML = resultText;
}
