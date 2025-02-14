function checkAnswers() {
    // Correct answers
    const correctAnswers = {
        q1: "blue",   // Change this to your favorite color
        q2: "college", // Change this to where you first met
        q3: "pizza"  // Change this to your favorite food
    };

    // Get user input
    let userAnswers = {
        q1: document.getElementById("q1").value.trim().toLowerCase(),
        q2: document.getElementById("q2").value.trim().toLowerCase(),
        q3: document.getElementById("q3").value.trim().toLowerCase()
    };

    // Check if answers are correct
    let score = 0;
    if (userAnswers.q1 === correctAnswers.q1) score++;
    if (userAnswers.q2 === correctAnswers.q2) score++;
    if (userAnswers.q3 === correctAnswers.q3) score++;

    // Redirect based on score
    if (score === 3) {
        window.location.href = "win.html"; // Correct answers
    } else {
        window.location.href = "tryagain.html"; // Some wrong answers
    }
}
