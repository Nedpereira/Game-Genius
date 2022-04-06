let order = [];
let clickOrder = [];
let pontos = 0;
let contador = 0;


// 0 - azul
//1 - vermelho
//2 - amarelo
//3 - verde 


const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');

let embaralhar = () =>  {

     let corOrder = Math.floor(Math.random() * 4 );
     order[order.length] = corOrder;
     clickOrder = [];

     for(let i in order){
       
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);


        
     }

}

let lightColor = (element, number) => {

    number = number * 500;

    setTimeout(() => {
    element.classList.add('selection');
    }, number - 250);
     
    setTimeout(() => {

        element.classList.remove('selection');
    });

}

let checkOrder = () => {

    for(let i in clickOrder)
    {
        if(clickOrder[i] != order[i])
        {
           over();
           break;
        }

    }
    if(clickOrder.length == order.length){

        alert(`Pontuação: ${pontos} \n Você acertou🤩! Iniciando próximo nivel..`);
        nextlevel();
    }

}

let click = (color) => {

    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selection');

    setTimeout(() => {

        createColorElement(color).classList.remove('selection');

        checkOrder();
    }, 250);

}

let createColorElement = (color) => {

    if(color == 0)
    {
        return azul;
    } else if (color == 1){
        return vermelho;
    } else if (color == 2){
        return amarelo;
    } else if(color == 3){
        return verde;
    }

}

let nextlevel = () => {

     pontos++;
     embaralhar();
}

let over = () => {

    alert(`Pontuação: ${pontos}\n Você perdeu o jogo😞!\n Clique em OK para iniciar um novo jogo ✔️`);
    order = [];
    clickOrder = [];

    play();
}

let play = () => {
    
    pontos = 0;
     alert(`                                    Bem vindo ao Genius! \n                                     Iniciando um jogo..🕹️ `)
    
     nextlevel();
}

azul.onclick =() => click(0);
vermelho.onclick =() => click(1);
amarelo.onclick =() => click(2);
verde.onclick =() => click(3);

play();

