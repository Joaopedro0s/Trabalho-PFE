// Botões interativos
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
