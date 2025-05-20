// Função para registrar eventos na área de log
function logEvent(eventName, targetId = '') {
    const log = document.getElementById('logContent');
    const time = new Date().toLocaleTimeString();
    log.innerHTML += `<p>[${time}] Evento: <strong>${eventName}</strong> ${targetId ? `em <em>#${targetId}</em>` : ''}</p>`;
    log.scrollTop = log.scrollHeight;
}

// Eventos de clique
document.getElementById('heroBtn').addEventListener('click', () => {
    alert("Clicado")
});

document.getElementById('btnDoubleClick').addEventListener('dblclick', () => {
    logEvent('dblclick', 'btnDoubleClick');
});

document.getElementById('btnMouseOver').addEventListener('mouseover', () => {
    logEvent('mouseover', 'btnMouseOver');
});

document.getElementById('btnMouseOut').addEventListener('mouseout', () => {
    logEvent('mouseout', 'btnMouseOut');
});

// Eventos de teclado
document.addEventListener('keydown', (e) => {
    logEvent(`keydown (tecla: ${e.key})`);
});

document.addEventListener('keyup', (e) => {
    logEvent(`keyup (tecla: ${e.key})`);
});

// Eventos de formulário
document.getElementById('nameInput').addEventListener('input', () => {
    logEvent('input', 'nameInput');
});
document.getElementById('emailInput').addEventListener('input', () => {
    logEvent('input', 'emailInput');
});

document.getElementById('nameInput').addEventListener('change', () => {
    logEvent('change', 'nameInput');
});
document.getElementById('emailInput').addEventListener('change', () => {
    logEvent('change', 'emailInput');
});

document.getElementById('nameInput').addEventListener('focus', () => {
    logEvent('focus', 'nameInput');
});
document.getElementById('emailInput').addEventListener('focus', () => {
    logEvent('focus', 'emailInput');
});

document.getElementById('nameInput').addEventListener('blur', () => {
    logEvent('blur', 'nameInput');
});
document.getElementById('emailInput').addEventListener('blur', () => {
    logEvent('blur', 'emailInput');
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    logEvent('submit', 'signupForm');
    document.getElementById('formStatus').textContent = 'Cadastro realizado com sucesso!';
});

// Eventos da janela
window.addEventListener('load', () => {
    logEvent('load (página carregada)');
});

window.addEventListener('resize', () => {
    logEvent(`resize (nova largura: ${window.innerWidth}px)`);
});
