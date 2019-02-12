const quizNode = document.getElementById('quiz');

quizNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizNode);
    const answers = {
        enemy: formData.get('enemy'),
        arena: formData.get('arena'),
        sidekick: formData.get('sidekick')
    };
    const json = JSON.stringify(answers);
    window.localStorage.setItem('answers', json);
    window.location = '../result.html';
    
});


