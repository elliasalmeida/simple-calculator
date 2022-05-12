// ES6 GERAL


/*Destructing */
var pet = {
    name: 'Toninho',
    specie: 'hamster',
    age: 1.6
};
var age = pet.age;


/* Functions! */


/* Named Function - Funçáo com nome */
function soma1(x, y) {
    return x + y;
}

/* Anonymous Function - Funçao anonima */
var soma2 = function(x, y) {
    return x + y;
}

/* ************ ES6 ************** */

/* Arrow Function */
const soma3 = (x, y) => {
    return x + y;
}

const soma4 = (x, y) => x + y;

const array = [1, 2, 3, 4, 5].map((x) => x * 10)
console.log(array); /* [10, 20, 30, 40, 50] */


//console.log(soma4(10, 5)) /* 15 */


// ******************************************************

/* Spread operator (...) */
const unidades = [1, 2, 3];
const dezenas = [10, 20, 30];

const numeros = [...unidades, ...dezenas];
console.log(numeros)

const obj1 = {
    a: 123
};

const obj2 = {
    b: "Olá"
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3)

// ==========================================

// ************************** React *********************************

// <div id="app"></div>

// React.createElement(/* tag */ 'h1', /* propriedades */, /* filhos */)
const ourTitle = React.createElement("h1", null, "Olá!" );

// ReactDOM.render(/* Componente */, /* Conteiner */)
const conteiner = document.getElementById('app')
ReactDOM.render(ourTitle, conteiner);



