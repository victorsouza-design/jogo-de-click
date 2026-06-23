
document.getElementById("botaoclique").onclick = function() {
    alert("clicou");
};

let pontos= 0;
let Valorclique= 1;
let upgrade= 0;

// clique principal 
document.getElementById("botaoclique").onclick = function() {
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

function efeitoClique(x, y) {
    const ponto = document.createElement("span");
    ponto.textcontent = "+" + valorclique;
    ponto.style.positive = "absolute";
    ponto.style.left = x + "px";
    ponto.style.top = y + "px";
    ponto.style.color = "yellow";
    ponto.style.fontWeight = "bold";

    document.body.appendchild(pontos);

    settimeout(() => {
        ponto.remove();
    }, 800);
}

document.getelementbyil("botaoclique"). oneclick = function(e) {
    pontos += valorclique;

    efeitoClique(e.clientx, e.clienty);

    atualizartela();
};

let custoupgrade = 10;

function comprarUpgrade() {
    if (pontos >= custoupgrade) {
        pontos -= cuastoupgrade;
        valorclique += 1;
        upgrade++;

        custoupgrade = Math.floor(custoupgrade * 1.5);

        atualizartela();
    }
}

document.getelementbyil("custoupgrade"). textcontent = custoupgrade;

function atualizarTela() {
    document.getelementbyil("pontos").textContent = pontos;
    document.getelementbyil("valorclique").textcontent = valorclique;
    document.getelementbyil("upgrades").textContent = upgrade;
    document.getelementbyil("custoupgrade").textcontent = custoupgrade;

    const botao = document.querySelector(".upgrade");
    botao.Disabled = pontos < custoupgrade;
}

setInterval(() => {
    localStorage.getItem("pontods", pontos);
    localStorage.getItem("valorclique", valorclique);
    localStorage.getItem("upgrades", upgrade);
}, 1000);

pontos = parseInt(localStorage.getItem("pontos")) || 0;
valorclique = parseInt(localStorage.getItem("valorclique")) || 1;
upgrades = parseInt(localStorage.getItem("upgrades")) || 0;
