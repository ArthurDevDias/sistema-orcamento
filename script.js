const servico = document.getElementById("servico");
const quantidade = document.getElementById("quantidade");
const botao = document.getElementById("Calcular");
const resultado = document.getElementById("resultado");
const nome = document.getElementById("nome");
const botaoWhatsapp = document.getElementById("whatsapp");

botao.addEventListener("click", function () {

    if (nome.value === "") {
        resultado.innerHTML = "<p>Digite seu nome primeiro.</p>";
        return;
    }

    if (servico.value === "") {
        resultado.innerHTML = "<p>Por favor, escolha um serviço.</p>";
        return;
    }

    const valor = Number(servico.value);
    const qtd = Number(quantidade.value);

    const total = valor * qtd;

    const totalFormatado = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    resultado.innerHTML =
        "<p>" + nome.value + ", seu orçamento ficou em " + totalFormatado + "</p>";
});


botaoWhatsapp.addEventListener("click", function () {

    if (nome.value === "") {
        resultado.innerHTML = "<p>Digite seu nome primeiro.</p>";
        return;
    }

    if (servico.value === "") {
        resultado.innerHTML = "<p>Escolha um serviço primeiro.</p>";
        return;
    }

    const valor = Number(servico.value);
    const qtd = Number(quantidade.value);

    const total = valor * qtd;

    const totalFormatado = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const textoServico =
        servico.options[servico.selectedIndex].text;

    const mensagem =
        "Olá! Meu nome é " + nome.value +
        ". Tenho interesse em " + textoServico +
        ". Quantidade: " + qtd +
        ". Orçamento estimado: " + totalFormatado + ".";

    const mensagemCodificada = encodeURIComponent(mensagem);

    window.location.href =
        "https://wa.me/?text=" + mensagemCodificada;

});