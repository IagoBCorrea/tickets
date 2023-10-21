function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeIngressos = parseInt(document.getElementById('qtd').value);
    if (tipoIngresso.value == 'pista') {
        comprarPista(quantidadeIngressos);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidadeIngressos);
    } else {
            comprarInferior(quantidadeIngressos);
    }
}

function comprarPista(quantidadeIngressos) {
    let quantidadeDisponivelPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeIngressos > quantidadeDisponivelPista) {
        alert('Quantidade indisponível para a Pista.');
    } else {
        quantidadeDisponivelPista = quantidadeDisponivelPista - quantidadeIngressos;
        document.getElementById('qtd-pista').textContent = quantidadeDisponivelPista;
        alert('Compra realizada com sucesso!');
    }
}


function comprarSuperior(quantidadeIngressos) {
    let quantidadeDisponivelSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeIngressos > quantidadeDisponivelSuperior) {
        alert('Quantidade indisponível para Superior.');
    } else {
        quantidadeDisponivelSuperior = quantidadeDisponivelSuperior - quantidadeIngressos;
        document.getElementById('qtd-superior').textContent = quantidadeDisponivelSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidadeIngressos) {
    let quantidadeDisponivelInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeIngressos > quantidadeDisponivelInferior) {
        alert('Quantidade indisponível para Inferior.');
    } else {
        quantidadeDisponivelInferior = quantidadeDisponivelInferior - quantidadeIngressos;
        document.getElementById('qtd-inferior').textContent = quantidadeDisponivelInferior;
        alert('Compra realizada com sucesso!');
    }
}