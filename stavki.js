const wheel = document.getElementById('wheel');
const btn = document.getElementById('bet-button');

let currentRotation = 0;

btn.addEventListener('click', () => {
    btn.disabled = true;
    btn.innerText = 'ВРАЩЕНИЕ...';

    const spins = 10 * 360; 
    
    // Настраиваем попадание точно в красную полоску.
    // Так как она в самом конце (355-360), ставим 357 градусов.
    const stopAngle = 364; 

    // Вычисляем итоговый поворот
    currentRotation += spins + (360 - (currentRotation % 360)) + stopAngle;

    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        alert('К сожалению,ты проиграл! Попробуй еще раз!!!');
        btn.disabled = false;
        btn.innerText = 'СДЕЛАТЬ СТАВКУ';
    }, 4000);
});