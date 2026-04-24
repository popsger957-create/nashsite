let clicks = 0;
const clickBtn = document.getElementById('clickBtn');
const display = document.getElementById('score');

clickBtn.addEventListener('click', () => {
        clicks++;
        display.innerText = clicks;

        if (clicks === 1000) {
        alert("Ошибка! Видно не судьба((((");
        
        
        clicks = 0;
        display.innerText = clicks;
    }
        
});