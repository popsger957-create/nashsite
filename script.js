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




    async function updateOnlineStatus() {
        const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://countrymeters.info/ru/World');
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            
            // Берем число из источника
            const population = doc.getElementById('cp1').innerText;
            
            // Вставляем в твой <h3>
            document.getElementById('online-count').innerText = population;
        } catch (e) {
            console.log("Ошибка обновления");
        }
    }

    // Запускаем
    updateOnlineStatus();
    // Обновляем раз в 10 секунд для реализма
    setInterval(updateOnlineStatus, 10000);
