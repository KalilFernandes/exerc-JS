//condicionais
// if - se 
// else - senão

const nome = "Samuel"
const idade = 24

if(idade >= 18){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// > Maior que
// < Menor que
// >= Maior ou igual
// <= Menor ou igual


//função para calcular a diaria de um carro
// valor por km = 0.50
// valor por dia = 150
// só considerar os kms se a quantidade de dias for maior que 10

const km = 350
const dia = 15


const diarias = dia * 150

if(dia > 10){
    const valorkm = km * 0.50
    console.log(`Valor total com km: ${diarias + valorkm}`)
} else {
    console.log(`Valor total sem km: ${diarias}`)
}


// calcule o valor de serviço de um pintor
// valor por metro quadrado = 40;
// se a quantidade de metros quadrados for maior que 6
// aplicar um desconto de 10%


const m2 = 40
const Desconto = 0.1

const valorDesconto = m2 * Desconto

if(m2 > 6){
    console.log(`Aplicar um desconto: ${valorDesconto}`)
} else {
    console.log(`sem desconto: ${valorm2}`)
}