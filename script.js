// Função para adicionar zeros à esquerda quando necessário
function pad(number, digits = 2) {
    return String(number).padStart(digits, '0');
}

// Função para atualizar o relógio e a data
function updateClock() {
    const now = new Date();

    // Atualiza horas, minutos, segundos e milissegundos
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const milliseconds = pad(now.getMilliseconds(), 3);
    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    document.getElementById('clock').textContent = timeString;

    // Atualiza o calendário
    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1); // Meses começam em 0
    const year = now.getFullYear();
    const dateString = `${day}/${month}/${year}`;
    document.getElementById('date').textContent = dateString;

    // Atualiza os avisos de tempo restante para o fim do ano
    const endOfYear = new Date(year, 11, 31);
    const totalMillisecondsLeft = endOfYear - now;
    const daysLeft = Math.floor(totalMillisecondsLeft / (1000 * 60 * 60 * 24));
    const weeksLeft = Math.floor(daysLeft / 7);
    const monthsLeft = Math.ceil((endOfYear - now) / (1000 * 60 * 60 * 24 * 30)); // Aproximação
    const yearInfo = `
        Faltam ${monthsLeft} meses para o fim do ano!<br>
        Faltam ${weeksLeft} semanas para o fim do ano!<br>
        Faltam ${daysLeft} dias para o fim do ano!<br>`;
    document.getElementById('year-info').innerHTML = yearInfo;
}

// Função para alternar entre modo claro e escuro
function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const themeLabel = document.getElementById('theme-label');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');

    themeLabel.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
}

// Inicializa o relógio e as informações ao carregar a página
updateClock();

// Atualiza o relógio a cada 100 milissegundos
setInterval(updateClock, 100);

// Configura o switch de tema
document.getElementById('theme-switch').addEventListener('change', toggleTheme);
