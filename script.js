function calcularMedia() {
    const nomeAluno = document.getElementById("nome-aluno").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    if (nomeAluno === "") {
        alert("Por favor, preencha o nome do aluno");
        return;
    }

    if (Boolean(nota1) === false) {
        alert("por favor, preencha a primeira nota.");
        return;
    }
    
    if (Boolean(nota2) === false || Boolean(nota3) === false) {
        alert("Há campos vazios");
        return;
    }
    const resultado = document.getElementById("resultado")

    const media = (nota1 + nota2 + nota3) / 3;

    resultado.innerHTML = `A média do aluno ${nomeAluno} é ${media}`;

    console.log(media);
}


