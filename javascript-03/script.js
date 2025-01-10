function calcular(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var salario = document.getElementById("salario").value;
    var totalVendas = document.getElementById("total-vendas").value;

    var resultado = document.getElementById("resultado");

    var comissao = totalVendas * 1.15;
    var salarioFinal = Number(salario) + Number(comissao);

    var salarioFormatado = salarioFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    resultado.innerHTML = `O salário final de ${nome} é de
    ${salarioFormatado}`;

    document.getElementById("my-form").reset();
}