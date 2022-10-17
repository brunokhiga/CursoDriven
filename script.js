//variáveis controle para o checkout
let controle_prato = false;
let controle_bebida = false;
let controle_sobremesa = false;

let prato_escolhido = ''
let preco_prato_escolhido = ''
let testando = parseFloat(preco_prato_escolhido.replace(",","."));
let bebida_escolhida = ''
let preco_bebida_escolhida = ''
let sobremesa_escolhida = ''
let preco_sobremesa_escolhida = ''

function resumoPedido(){
    //transformar para somar
    const preco_1 = parseFloat(preco_prato_escolhido.replace(",","."));
    const preco_2 = parseFloat(preco_bebida_escolhida.replace(",","."));
    const preco_3 = parseFloat(preco_sobremesa_escolhida.replace(",","."));
    
    //soma total
    const preco_final = preco_1 + preco_2 + preco_3;

    //passando para a formatacao da mensagem
    const mensagem = "Olá, gostaria de fazer o pedido:" + "\n" + "- Prato: " + prato_escolhido + "\n" + "- Bebida: " + bebida_escolhida + "\n" + "- Sobremesa: " + sobremesa_escolhida + "\n" + "Total: R$" + preco_final.toFixed(2);

    //codifica a mensagem e prepara o link
    const texto_codificado = encodeURIComponent(mensagem);

    const link_whatsapp_codificado = "https://wa.me/?text=" + texto_codificado;

    const botao_whatsapp = document.querySelector(".link-wpp");
    botao_whatsapp.href = link_whatsapp_codificado;
}

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

    //Guarda o nome do prato escolhido
    const nome_do_prato = botao_prato.querySelector(".nome-produto");
    prato_escolhido = nome_do_prato.textContent;

    //Guarda o preço do prato escolhido
    const preco_do_prato = botao_prato.querySelector(".preco-produto");
    preco_prato_escolhido = preco_do_prato.textContent;
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
    
    //Guarda o nome do prato escolhido
    const nome_da_bebida = botao_bebida.querySelector(".nome-produto");
    bebida_escolhida = nome_da_bebida.textContent;

    //Guarda o preço do prato escolhido
    const preco_da_bebida = botao_bebida.querySelector(".preco-produto");
    preco_bebida_escolhida = preco_da_bebida.textContent;
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

        //Guarda o nome do prato escolhido
        const nome_da_sobremesa = botao_sobremesa.querySelector(".nome-produto");
        sobremesa_escolhida = nome_da_sobremesa.textContent;
    
        //Guarda o preço do prato escolhido
        const preco_da_sobremesa = botao_sobremesa.querySelector(".preco-produto");
        preco_sobremesa_escolhida = preco_da_sobremesa.textContent;
}

function checkout(){
    //verificando e todos as categorias de produtos foram selecionadas
    if (controle_prato == true && controle_bebida == true && controle_sobremesa == true){
        //trocando o botao de finalizar o pedido
        const botao_finalizacao = document.querySelector(".fazer-pedido");
        botao_finalizacao.innerHTML = "Fechar pedido";
        botao_finalizacao.classList.add("botao-checkout");

        //ativando o botao de finalizar o pedido
        const ativar_whatsapp = document.querySelector(".link-wpp");
        ativar_whatsapp.classList.remove("link-desativado");
    }
}