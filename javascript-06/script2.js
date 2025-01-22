// Requisições de api
const cepInput = document.getElementById("cepNumber");

async function buscarCep () {
    try {
        console.log(cepInput.value)
        const dadosDoCep = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
        .then((response) => response.json())

    console.log(dadosDoCep)

      throw new Error('Erro ao buscar o cep')
    } catch (error) {
        console.error('Erro ao buscar o cep',error)
    }
}

buscarCep()