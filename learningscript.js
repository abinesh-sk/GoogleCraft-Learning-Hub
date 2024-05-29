function startAssessment() {
    window.location.href = 'Quizpagehtml.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-arrow');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modules = this.parentElement.parentElement.nextElementSibling;
            modules.style.display = modules.style.display === 'block' ? 'none' : 'block';
            this.classList.toggle('rotate');
        });
    });

    const doneButtons = document.querySelectorAll('.done-btn');
    doneButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.textContent = "Completed";
            this.disabled = true; 
            updateProgressBar();
        });
    });

    function updateProgressBar() {
        const doneButtons = document.querySelectorAll('.done-btn');
        const totalCourses = doneButtons.length;
        let completedCourses = 0;

        doneButtons.forEach(button => {
            if (button.textContent === "Completed") {
                completedCourses++;
            }
        });

        const progress = (completedCourses / totalCourses) * 100;
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = progress + '%';

        const progressMessage = document.getElementById('progress-message');
        if (progress === 100) {
            progressMessage.textContent = "Yay! You have completed all courses.";
        } else {
            progressMessage.textContent = "";
        }
    }
});
