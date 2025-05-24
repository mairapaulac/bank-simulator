/*
Atualizar o saldo ao clicar em "Depositar" ou "Sacar". ok

Adicionar itens na lista de transações.

Validar se o saque não ultrapassa o saldo. 

Adicionar estilos dinâmicos (ex: cor do texto se for negativo).

Armazenar dados em localStorage (opcional).
*/


var dinheiro = document.getElementById("amount");
var saldoAtual = document.getElementById("balance");
var rs = document.getElementById("currency");
let listaTransacoes = [];

function adicionarTransacao(valor) {
  const lista = document.getElementById("transactions-list");

  
  listaTransacoes.push(valor);

  
  const ultimasTransacoes = listaTransacoes.slice(-4);

  lista.innerHTML = "";

  ultimasTransacoes.forEach(transacao => {
    const item = document.createElement("li");
    const tipo = transacao > 0 ? "Depósito" : "Saque";
    const cor = transacao > 0 ? "green" : "red";

    item.textContent = `${tipo}: R$ ${Math.abs(transacao).toFixed(2)}`;
    item.style.color = cor;

    lista.appendChild(item);
  });
}



function deposito() {
   var valorDep = parseFloat(dinheiro.value);
   var saldo = parseFloat(saldoAtual.innerHTML);
   var novoSaldo = valorDep + saldo;

   
    if (isNaN(valorDep) || valorDep<= 0) {
        alert("Digite um valor válido para o depósito!")
        return;
    }

   saldoAtual.innerHTML = novoSaldo.toFixed(2);

   adicionarTransacao(valorDep);
}

function saque() {
    var valorSaque = parseFloat(dinheiro.value);
    var saldo = parseFloat(saldoAtual.innerHTML);
    var novoSaldo = saldo - valorSaque;

    if (isNaN(valorSaque) || valorSaque <= 0) {
        alert("Digite um valor válido para o saque!")
        return;
    }

    if (valorSaque > saldo)   {
        alert("Saldo insuficiente para o saque! Peça um empréstimo, pobre");
        return;
    }

    saldoAtual.innerHTML = novoSaldo.toFixed(2);

    adicionarTransacao(-valorSaque);
}