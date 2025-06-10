// Botões
document.getElementById("btnClick").addEventListener("click", () => {
    alert("Você clicou em Ofertas Especiais!");
});

document.getElementById("btnDoubleClick").addEventListener("dblclick", () => {
    alert("Você clicou duas vezes em Detalhes Técnicos!");
});

document.getElementById("btnMouseOver").addEventListener("mouseover", () => {
    alert("Você passou o mouse sobre Promoções!");
});

document.getElementById("btnMouseOut").addEventListener("mouseout", () => {
    alert("Você tirou o mouse de cima de Interação!");
});

// Formulário
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;

    document.getElementById("formStatus").textContent =
        `Obrigado, ${nome}! Conteúdo premium será enviado para ${email}.`;
    document.getElementById("formStatus").style.display = "block"; // Show the status message
});

// Keydown e Keyup (teclado)
document.addEventListener("keydown", (event) => {
    const log = document.getElementById("logContent");
    log.innerHTML = `<p><strong>Tecla pressionada:</strong> ${event.key}</p>`;
});

document.addEventListener("keyup", (event) => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Tecla liberada:</strong> ${event.key}</p>`;
});

// Novos Eventos

// Input (Digitar ou colar em um campo)
document.getElementById("nameInput").addEventListener("input", (event) => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Input nome:</strong> ${event.target.value}</p>`;
});

document.getElementById("emailInput").addEventListener("input", (event) => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Input email:</strong> ${event.target.value}</p>`;
});


// Change (Alterar valor de input ou select)
document.getElementById("nameInput").addEventListener("change", (event) => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Change nome:</strong> ${event.target.value} (campo perdeu o foco)</p>`;
});

document.getElementById("emailInput").addEventListener("change", (event) => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Change email:</strong> ${event.target.value} (campo perdeu o foco)</p>`;
});

// Focus (Campo recebe foco)
document.getElementById("nameInput").addEventListener("focus", () => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Foco:</strong> Campo 'Seu nome' ativado</p>`;
    document.getElementById("nameInput").classList.add("highlight");
});

document.getElementById("emailInput").addEventListener("focus", () => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Foco:</strong> Campo 'Seu melhor e-mail' ativado</p>`;
    document.getElementById("emailInput").classList.add("highlight");
});

// Blur (Campo perde o foco)
document.getElementById("nameInput").addEventListener("blur", () => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Perdeu Foco:</strong> Campo 'Seu nome' desativado</p>`;
    document.getElementById("nameInput").classList.remove("highlight");
});

document.getElementById("emailInput").addEventListener("blur", () => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Perdeu Foco:</strong> Campo 'Seu melhor e-mail' desativado</p>`;
    document.getElementById("emailInput").classList.remove("highlight");
});

// Load (Página ou recurso carregado)
window.addEventListener("load", () => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Evento:</strong> Página completamente carregada!</p>`;
});

// Resize (Redimensionamento da janela)
window.addEventListener("resize", () => {
    const log = document.getElementById("logContent");
    log.innerHTML += `<p><strong>Evento:</strong> Janela redimensionada para ${window.innerWidth}x${window.innerHeight}</p>`;
});

// Adicionando um evento para o botão "Explore nossos modelos"
document.getElementById("heroBtn").addEventListener("click", () => {
    alert("Pronto para explorar nossos modelos premium!");
});