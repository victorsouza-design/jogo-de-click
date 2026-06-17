
document.getElementById("botaoClick").onclick = function() {
    alert("clicou");
};

let pontos= 0;
let Valorclique= 1;
let upgrade= 0;

// clique principal 
document.getElementById("botaoClick").onclick = function() {
    pontos =pontos+ Valorclique;
    atualizarTela();
    
    if (pontos >= 500) {
        alert("você Venceu!")
    }
};

// função para comprar upgrade
function comprarUpgrade(custo, aumnento) {
    if (pontos >= custo) {
        pontos -= custo;
        ValorClique += aumnento;
        upgrade++;

        atualizarTela();
    } else {
        alert("pontos insuficientes!");
    }
}

// Atualizar a tela
function atualizarTela() {
    document.getElementById("pontos"). textContent = pontos;
    document.getElementById("Valorclique"). textContent = Valorclique;
    document.getElementById("upgrades"). textContent = upgrade;
}
