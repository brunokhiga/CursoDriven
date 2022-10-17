//variáveis controle para o checkout
let controle_prato = false;
let controle_bebida = false;
let controle_sobremesa = false;

function ativaCheck(seletor){

    let todos_produtos = document.querySelectorAll(".check-icon");
    //todos_produtos.classList.remove('invisivel');

    const checkProduto = document.querySelector(seletor);
    if (checkProduto.classList.contains( "prato-selecionado" || "bebida-selecionada" || "sobremesa-seleionada" )){
        if (checkProduto.classList.contains("prato-1") ){
            let produto_check = document.querySelector(".check-prato-1");
            produto_check.classList.remove('invisivel');
        }
        if (checkProduto.classList.contains("prato-2") ){
            let produto_check = document.querySelector(".check-prato-2");
            produto_check.classList.remove('invisivel');
        }
        if (checkProduto.classList.contains("prato-3") ){
            let produto_check = document.querySelector(".check-prato-3");
            produto_check.classList.remove('invisivel');
        }
        if (checkProduto.classList.contains("bebida-1") ){
            let produto_check = document.querySelector(".check-bebida-1");
            produto_check.classList.remove('invisivel');
        }
    }
}

function selecionaPrato(seletor) {
    const pratoSelecionadoAnteriormente = document.querySelector(".prato-selecionado");

    //console.log(pratoSelecionadoAnteriormente);

    if ( pratoSelecionadoAnteriormente !== null ){
        pratoSelecionadoAnteriormente.classList.remove('prato-selecionado');
    }

    const botao_prato = document.querySelector(seletor);
    botao_prato.classList.toggle('prato-selecionado');

    ativaCheck(seletor); //apagar caso nao consiga corrigir o problema do check

    controle_prato = botao_prato.classList.contains("prato-selecionado");
    console.log(controle_prato);
}

function selecionaBebida(seletor) {
    const bebidaSelecionadaAnteriormente = document.querySelector(".bebida-selecionada");

    //console.log(bebidaSelecionadaAnteriormente);

    if ( bebidaSelecionadaAnteriormente !== null ){
        bebidaSelecionadaAnteriormente.classList.remove('bebida-selecionada');
    }

    const botao_bebida = document.querySelector(seletor);
    botao_bebida.classList.toggle('bebida-selecionada');

    ativaCheck(seletor); //apagar caso nao consiga corrigir o problema do check

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

    ativaCheck(seletor); //apagar caso nao consiga corrigir o problema do check

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
        botao_finalizacao.classList.add("botao-checkout");
    }
}