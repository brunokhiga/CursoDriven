function selecionaPrato(seletor) {
    const pratoSelecionadoAnteriormente = document.querySelector(".prato-selecionado");

    //console.log(pratoSelecionadoAnteriormente);

    if ( pratoSelecionadoAnteriormente !== null ){
        pratoSelecionadoAnteriormente.classList.remove('prato-selecionado');
    }

    const botao_prato = document.querySelector(seletor);
    botao_prato.classList.toggle('prato-selecionado');

    //console.log(botao);
}

function selecionaBebida(seletor) {
    const bebidaSelecionadaAnteriormente = document.querySelector(".bebida-selecionada");

    console.log(bebidaSelecionadaAnteriormente);

    if ( bebidaSelecionadaAnteriormente !== null ){
        bebidaSelecionadaAnteriormente.classList.remove('bebida-selecionada');
    }

    const botao_bebida = document.querySelector(seletor);
    botao_bebida.classList.toggle('bebida-selecionada');

    //console.log(botao_bebida);
}

function selecionaSobremesa(seletor) {
    const sobremesaSelecionadaAnteriormente = document.querySelector(".sobremesa-selecionada");

    console.log(sobremesaSelecionadaAnteriormente);

    if ( sobremesaSelecionadaAnteriormente !== null ){
        sobremesaSelecionadaAnteriormente.classList.remove('sobremesa-selecionada');
    }

    const botao_sobremesa = document.querySelector(seletor);
    botao_sobremesa.classList.toggle('sobremesa-selecionada');

    //console.log(botao_bebida);
}

function checkout() {
}