let clicks = 0;
const clickBtn = document.getElementById('clickBtn');
const display = document.getElementById('score');
const confettiLayer = document.getElementById('confetti-overlay');

clickBtn.addEventListener('click', () => {
        clicks++;
        display.innerText = clicks;
        const f = document.getElementById('flash');
        f.style.transition = 'none'; 
        f.style.opacity = '1';
        setTimeout(() => { f.style.transition = 'opacity 0.4s'; f.style.opacity = '0'; }, 50);


        

        if (clicks === 100) {

            
        alert("Ошибка! Видно не судьба((((");
        
        
        clicks = 0;
        display.innerText = clicks;
    }
        
});

// Твои актуальные данные
const START_POP = 8388474211; 
const START_DATE = new Date("2026-04-24T20:05:25").getTime();

// Средний прирост населения в мире (~2.53 человека в секунду)
const GROWTH_RATE = 0.003362; 

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




let secretCode = "";
document.addEventListener('keydown', (e) => {
    // Получаем символ клавиши
    const char = e.code.replace('Key', '').toLowerCase();
    secretCode += char;

    if (secretCode.length > 4) secretCode = secretCode.substring(1);

    if (secretCode === "jopa") {
        const body = document.body;
        
        // Если уже крутится — выключаем, если нет — включаем
        if (body.classList.contains('is-spinning')) {
            body.classList.remove('is-spinning');
            console.log("Вращение остановлено");
        } else {
            body.classList.add('is-spinning');
            console.log("Погнали! Медленный поворот активирован...");
        }
        
        secretCode = ""; 
    }
});



document.addEventListener('keydown', function(event) {
    // Проверяем нажатие клавиши Escape
    if (event.key === "Escape") {
        
        // Ссылка на случайную статью русской Википедии
        const randomWiki = 'https://ru.wikipedia.org/wiki/Special:Random';

        // Мгновенный переход
        window.location.href = randomWiki;
    }
});