alert("SEJA BEM VINDO AO GAME")

let p1 = prompt("Digite seu nome");
let p2 = prompt("Digite um poder que gostaria de ter");
let p3 = prompt("Digite o nome de um vilão");
let p4 = prompt("Digite um lugar que gostaria de estar");

let msg=DocumentTimeline.getElementById('msg');

msg.innerHTML = `<p>Olá ${p1} o seu poder é ${p2} você vai enfrentar o(a) ${p3} em/no ${p4} </p>`