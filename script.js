// Função para registrar eventos no log
function logEvent(message) {
    const eventLog = document.getElementById("logContent");
    const timestamp = new Date().toLocaleTimeString();
    eventLog.innerHTML += `[${timestamp}] ${message}<br>`;
    eventLog.scrollTop = eventLog.scrollHeight;
}

// Evento de clique simples
document.getElementById("btnClick")
.addEventListener("click", function() {
    logEvent("Botão de ofertas clicado - Mostrando promoções");
    alert("Confira nossas ofertas especiais!\n\n• SpeedBike Pro: 10% off\n• MountainBike XT: Frete grátis\n• UrbanBike Comfort: 15% off");
});

// Evento de duplo clique
document.getElementById("btnDoubleClick")
.addEventListener("dblclick", function() {
    logEvent("Duplo clique - Mostrando detalhes das bicicletas");
    alert("Detalhes técnicos:\n\nSpeedBike Pro: 21 marchas, quadro de carbono\nMountainBike XT: Suspensão dianteira, pneus largos\nUrbanBike Comfort: Selim ergonômico, bagageiro traseiro");
});

// Evento de mouseover
document.getElementById("btnMouseOver")
.addEventListener("mouseover", function() {
    logEvent("Mouse sobre botão de promoções");
    this.classList.add("highlight");
});

// Evento de mouseout
document.getElementById("btnMouseOut")
.addEventListener("mouseout", function() {
    logEvent("Mouse saiu do botão");
    this.classList.remove("highlight");
});

// Evento de keydown
document.addEventListener("keydown", () => {
    const btn = document.getElementById("btnKeyDown");
    btn.classList.add("pressionado");
    logEvent(`Tecla pressionada`);
});

// Evento de keyup
document.addEventListener("keyup", () => {
    const btn = document.getElementById("btnKeyUp");
    btn.classList.add("solto");
    logEvent(`Tecla liberada`);

    setTimeout(() => {
        btn.classList.remove("solto");
        document.getElementById("btnKeyDown").classList.remove("pressionado");
    }, 500);
});

// Evento de input
const searchInput = document.getElementById("searchInput");
const searchOutput = document.getElementById("searchOutput");

searchInput.addEventListener("input", function() {
    searchOutput.textContent = this.value ? `Pesquisando por: ${this.value}` : "";
    logEvent(`Pesquisa digitada: ${this.value}`);
});

// Evento de change
document.getElementById("nameInput").addEventListener("change", function() {
    logEvent(`Nome completo digitado: ${this.value}`);
});

// Evento de submit do formulário
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;

    document.getElementById("formStatus").textContent = `Obrigado, ${name}! Seu cadastro foi recebido. Em breve enviaremos ofertas para ${email}.`;
    logEvent(`Formulário enviado: Nome: ${name}, Email: ${email}`);

    // Limpa o formulário
    this.reset();
});

// Evento de load
window.addEventListener("load", function() {
    logEvent("Página totalmente carregada");
    console.log("Página carregada com sucesso!");
});

// Evento de resize
window.addEventListener('resize', function() {
    logEvent(`Janela redimensionada: Largura: ${window.innerWidth}, Altura: ${window.innerHeight}`);
});

// Adiciona eventos aos botões de compra
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const bikeName = this.parentElement.querySelector('h3').textContent;
        const bikePrice = this.parentElement.querySelector('p').textContent;
        logEvent(`Botão de compra clicado: ${bikeName} - ${bikePrice}`);
        alert(`Você selecionou: ${bikeName}\n${bikePrice}\n\nRedirecionando para o checkout...`);
    });
});