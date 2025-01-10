function somar() {
    const valor1 = document.getElementById("valor1").value
    const valor2 = document.getElementById("valor2").value

    const resultadoFinal = document.getElementById("resultado")

    if (valor1 === "" || valor2 === "") {
        alert("Preencha os campos corretamente!")
        resultadoFinal.innerHTML = ""
        return
    }

    const resultado = Number(valor1) + Number(valor2);

    console.log("O resultado é: ", resultado)

    resultadoFinal.innerHTML = `O resultado é: ${resultado}`

    document.getElementById("valor1").value = ""
    document.getElementById("valor2").value = ""
}