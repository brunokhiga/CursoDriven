//variáveis controle para o checkout
let controle_prato = false;
let controle_bebida = false;
let controle_sobremesa = false;

let prato_escolhido = ''
let bebida_escolhida = ''
let sobremesa_Escolhida = ''

function ativaCheck(seletor){

    let todos_produtos = document.querySelectorAll(".check-icon");
    //todos_produtos.classList.remove('invisivel');

    //isso aqui é uma gambiarra, com certeza tem muitas maneiras melhores de fazer
    const checkProduto = document.querySelector(seletor);
    if (checkProduto.classList.contains("prato-selecionado")){
        if (checkProduto.classList.contains("prato-1") ){
            let produto_check = document.querySelector(".check-prato-1");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-prato-2");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-prato-3");
            apaga2.classList.add('invisivel');
        }
        if (checkProduto.classList.contains("prato-2") ){
            let produto_check = document.querySelector(".check-prato-2");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-prato-1");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-prato-3");
            apaga2.classList.add('invisivel');
        }
        if (checkProduto.classList.contains("prato-3") ){
            let produto_check = document.querySelector(".check-prato-3");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-prato-1");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-prato-2");
            apaga2.classList.add('invisivel');
        }
    }
    if (checkProduto.classList.contains("bebida-selecionada")){
        if (checkProduto.classList.contains("bebida-1") ){
            let produto_check = document.querySelector(".check-bebida-1");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-bebida-2");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-bebida-3");
            apaga2.classList.add('invisivel');
        }
        if (checkProduto.classList.contains("bebida-2") ){
            let produto_check = document.querySelector(".check-bebida-2");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-bebida-1");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-bebida-3");
            apaga2.classList.add('invisivel');
        }
        if (checkProduto.classList.contains("bebida-3") ){
            let produto_check = document.querySelector(".check-bebida-3");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-bebida-1");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-bebida-2");
            apaga2.classList.add('invisivel');
        }
    }
    if (checkProduto.classList.contains("sobremesa-selecionada")){
        if (checkProduto.classList.contains("sobremesa-1") ){
            let produto_check = document.querySelector(".check-sobremesa-1");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-sobremesa-2");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-sobremesa-3");
            apaga2.classList.add('invisivel');
        }
        if (checkProduto.classList.contains("sobremesa-2") ){
            let produto_check = document.querySelector(".check-sobremesa-2");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-sobremesa-1");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-sobremesa-3");
            apaga2.classList.add('invisivel');
        }
        if (checkProduto.classList.contains("sobremesa-3") ){
            let produto_check = document.querySelector(".check-sobremesa-3");
            produto_check.classList.remove('invisivel');
            let apaga1 = document.querySelector(".check-sobremesa-1");
            apaga1.classList.add('invisivel');
            let apaga2 = document.querySelector(".check-sobremesa-2");
            apaga2.classList.add('invisivel');
        }
    }
}

function selecionaPrato(seletor) {
    const pratoSelecionadoAnteriormente = document.querySelector(".prato-selecionado");

    if ( pratoSelecionadoAnteriormente !== null ){
        pratoSelecionadoAnteriormente.classList.remove('prato-selecionado');
    }

    const botao_prato = document.querySelector(seletor);
    botao_prato.classList.toggle('prato-selecionado');

    ativaCheck(seletor); //apagar caso nao consiga corrigir o problema do check

    controle_prato = botao_prato.classList.contains("prato-selecionado");
    //COLOCAR PRATO ESCOLHIDO NA VARIAVEL CRIADA LA EM CIMA
}

function selecionaBebida(seletor) {
    const bebidaSelecionadaAnteriormente = document.querySelector(".bebida-selecionada");

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

        const ativar_whatsapp = document.querySelector(".link-wpp");
        ativar_whatsapp.classList.remove("link-desativado");
    }
}