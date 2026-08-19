const servico = document.getElementById("servico");
const botao = document.getElementById("Calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {

    const valor = servico.value;

    if(valor === "") {
        resultado.innerHTML = "<p>Por favor, escolha um serviço.</p>";
        return;
    }

    resultado.innerHTML = "<p>Seu orçamento ficou em R$ " + valor + ",00</p>";

});