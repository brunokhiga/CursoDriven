//variáveis controle para o checkout
let controle_prato = false;
let controle_bebida = false;
let controle_sobremesa = false;

function selecionaPrato(seletor) {
    const pratoSelecionadoAnteriormente = document.querySelector(".prato-selecionado");

    //console.log(pratoSelecionadoAnteriormente);

    if ( pratoSelecionadoAnteriormente !== null ){
        pratoSelecionadoAnteriormente.classList.remove('prato-selecionado');
    }

    const botao_prato = document.querySelector(seletor);
    botao_prato.classList.toggle('prato-selecionado');

    controle_prato = botao_prato.classList.contains("prato-selecionado");
}

function selecionaBebida(seletor) {
    const bebidaSelecionadaAnteriormente = document.querySelector(".bebida-selecionada");

    //console.log(bebidaSelecionadaAnteriormente);

    if ( bebidaSelecionadaAnteriormente !== null ){
        bebidaSelecionadaAnteriormente.classList.remove('bebida-selecionada');
    }

    const botao_bebida = document.querySelector(seletor);
    botao_bebida.classList.toggle('bebida-selecionada');

    controle_bebida = botao_bebida.classList.contains("bebida-selecionada");
}

function selecionaSobremesa(seletor) {
    const sobremesaSelecionadaAnteriormente = document.querySelector(".sobremesa-selecionada");

    //console.log(sobremesaSelecionadaAnteriormente);

    if ( sobremesaSelecionadaAnteriormente !== null ){
        sobremesaSelecionadaAnteriormente.classList.remove('sobremesa-selecionada');
    }

    const botao_sobremesa = document.querySelector(seletor);
    botao_sobremesa.classList.toggle('sobremesa-selecionada');

    controle_sobremesa = botao_sobremesa.classList.contains("sobremesa-selecionada");
}

function checkout(){
    //    if (controle_prato == true && controle_bebida == true && controle_sobremesa == true){
    //        console.log('deu certo e bora pro checkout');
    //   }else{
    //           console.log('deu certo e não vamos para o checkout');
    //        }
    
    if (controle_prato == true && controle_bebida == true && controle_sobremesa == true){
        const botao_finalizacao = document.querySelector(".fazer-pedido");
        botao_finalizacao.innerHTML = "Fechar pedido";
        botao_finalizacao.classList.toggle("botao-checkout");
        console.log('era pra adicionar');
    }
}