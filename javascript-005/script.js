// Objetos

const perfil = {
    nome: "Mickael", 
    idade: 20,
    eMaiorDeIdade: true,
}

console.log(perfil);

// Arrays

//const usuarios = ["Gabriel", "Mickael", "Lucas"];
//const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];

//console.log(fibonacci);
//console.log(usuarios);

const usuarios = [
    { nome: "Gabriel", idade: 20, premium: true, salario: 1000 },
    { nome: "Mickael", idade: 20, premium: true, salario: 2000 },
    { nome: "Lucas", idade: 20, premium: false, salario: 3000 },
    { nome: "João", idade: 20, premium: false, salario: 4000 },
    { nome: "Maria", idade: 20, premium: true, salario: 5000 },
]

// Filter

// console.log(usuarios.filter((usuario) => usuario.premium === false));

// Find

// console.log(usuarios.find((usuarios) => usuario.premium === true));

// findIndex

// console.log(usuarios.findIndex((usuario) => usuario.nome === "Lucas"));

// Some

// console.log(usuarios.some(usuario) => usuario.premium === false);

//Every

// console.log(usuarios.every((usuario) => usuario.premium === true));

// Map

// console.log(usuarios.map((usuarios) => ` O ${usuarios.nome} tem ${usuario.idade + 2} anos.`));

// Reduce

// console.log(usuarios.reduce((total, usuario) => total + usuario.salario, 0));



// exerc 1, Filtrem os usuarios que tenham um salario maior que 3000.

// console.log(usuarios.filter((usuario) => usuario.salario > 3000));


//exerc 2, Verifiquem se existe algum usuario que tenha um salario maior que 5000.

//console.log(usuarios.Some((usuarios) => usuarios.salario > 5000));


// exerc 3, Verifique se todos os usuários são premiums.

// console.log(usuarios.every((usuario) => usuario.premium === true));


// exerc 4, encontre o usuario que se chama Maria.

// console.log(usuarios.reduce((usuarios) => usuario.nome === "maria"));


// console.log(usuarios[0]);

