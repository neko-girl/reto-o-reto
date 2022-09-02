let test=[
            'Besarle la nalga o el huevo al procurador de la derecha',
            'Acerca tus labios lo mas posible a alguien sin besarse',
            'Roba un beso a la persona mas linda',
            'Intercambia una prenda con la persona de tu derecha',
            '5 minutos al cielo',
            'Sientate en el regaso de alguien',
            'Besa a un chico',
            'Besa a una chica',
            'Lame el cuello de alguien',
            'Haz un chupon',
            'Besa una nalga',
            'Lame un pie',
            'Besa a un jugador en una parte del cuerpo que empiece por la letra de tu su nombre',
            'juega papel piedra o tijera con el jugador que quieras y El que pierda se quita una prenda'
        ]
let originalLeght = Math.round(test.length*0.85)
const update = (items) => test = items;

function getRandomInt(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let queue = [];
const enqueue = (item) => item? queue.push(item) : undefined;
const dequeue = () => queue.shift();

function Miau() {
    let random = test[getRandomInt(test.length)]
    enqueue(random)
    update(test.filter(i => !queue.includes(i)));
    if (queue.length >= originalLeght) {
        test.push(dequeue())
    }
    return random;
}

function speak(text, len = 'es-Es') {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text
    msg.lang = len
    window.speechSynthesis.speak(msg)
}

function OnClick() {
    let element = document.getElementById("reto");
    reto=Miau()
    
    speak(reto)

    element.innerText = reto
}

speak('Jugaremos Reto o Reto perrasssssss')
