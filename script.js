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

// Твои актуальные данные
const START_POP = 8388474211; 
const START_DATE = new Date("2026-04-24T20:05:25").getTime();

// Средний прирост населения в мире (~2.53 человека в секунду)
const GROWTH_RATE = 0.002535; 

function updateCounter() {
    const now = Date.now();
    const passed = now - START_DATE;
    
    // Если время на компьютере пользователя отстает от START_DATE, 
    // используем базовое число, чтобы не уйти в минус
    const diff = Math.max(0, passed);
    
    const currentPop = Math.floor(START_POP + (diff * GROWTH_RATE));
    
    // Форматируем число (например: 8 388 474 211)
    const formatted = currentPop.toLocaleString('ru-RU');
    
    const display = document.getElementById('online-count');
    if (display) {
        display.innerText = formatted;
    }
}

// Запускаем обновление каждые 100мс
setInterval(updateCounter, 100);
updateCounter();