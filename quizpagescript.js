const totalTimeInSeconds = 12 * 60;
    let timeRemaining = totalTimeInSeconds;

    const countdownTimer = setInterval(function() {
      const minutes = Math.floor(timeRemaining / 60);
      let seconds = timeRemaining % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      document.getElementById('timer').innerText = `Time Remaining: ${minutes}:${seconds}`;
      
      timeRemaining--;

      if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        alert("Oops! Time up!");
      }
    }, 1000);

    document.getElementById('submit-btn').addEventListener('click', function() {
      clearInterval(countdownTimer); 

      const form = document.getElementById('quiz-form');
      const answers = {
        q1: form.querySelector('input[name="q1"]:checked').value,
        q2: form.querySelector('input[name="q2"]:checked').value,
        q3: form.querySelector('input[name="q3"]:checked').value,
        q4: form.querySelector('input[name="q4"]:checked').value,
        q5: form.querySelector('input[name="q5"]:checked').value,
        q6: form.querySelector('input[name="q6"]:checked').value,
        q7: form.querySelector('input[name="q7"]:checked').value,
        q8: form.querySelector('input[name="q8"]:checked').value,
        q9: form.querySelector('input[name="q9"]:checked').value,
        q10: form.querySelector('input[name="q10"]:checked').value
      };

      const correctAnswers = {
        q1: 'a',
        q2: 'a',
        q3: 'b',
        q4: 'b',
        q5: 'c',
        q6: 'a',
        q7: 'b',
        q8: 'c',
        q9: 'c',
        q10: 'c'
      };

      let score = 0;
      for (let key in answers) {
        if (answers[key] === correctAnswers[key]) {
          score++;
        }
      }

      document.getElementById('score').innerText = `${score} out of 10`;
      document.getElementById('score-container').style.display = 'block';
    });