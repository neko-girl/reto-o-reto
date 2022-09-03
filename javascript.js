let challenges = [
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
            'juega papel piedra o tijera con el jugador que quieras y El que pierda se quita una prenda, el ganador decida que prenda se va a quitar',
            'sientate en la cara del jugador que decida la botella',
            'juega piedra papel o tijera y quien pierda es esclavo del otro',
            'intercambia una prenda con alguien del sexo opuesto (no vale zarcillos, zapatos, cadenas, o pulseras)',
            'muestra una parte intima al grupo',
            'lame un muslo',
            'lame un ombligo',
            'Beso frances a tu derecha',
            'Beso frances a tu izquierda',
            'Haz un beso frances',
            'Intercambia toda la ropa con alguien del sexo opuesto',
            'Besa a alguien de 5 formas diferentes',
            'Seducir solo con el tacto a otro jugador',
            'Juega con la lengua de alguien mas',
            'Vendate los ojos, los demas se esparsen por la habitacion. Vos caminas y besas al primero que toques',
            'Quitate 3 prendas de ropa',
            'Pasar la lengua por el cuerpo de otra persona',
            'Realizar sentadillas en ropa interior',
            'Pon una de tus películas porno favoritas en el movil'
        ]
let originalLeght = Math.round(challenges.length*0.85)
const update = (items) => challenges = items;

function getRandomInt(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let queue = [];
const enqueue = (item) => item? queue.push(item) : undefined;
const dequeue = () => queue.shift();

function Miau() {
    let challenge = challenges[getRandomInt(challenges.length)]
    enqueue(challenge)
    update(challenges.filter(i => !queue.includes(i)));
    if (queue.length >= originalLeght) {
        challenges.push(dequeue())
    }
    return challenge;
}

function speak(text, len = 'es-Es') {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text
    msg.lang = len
    msg.rate = 2
    window.speechSynthesis.speak(msg)
}

function OnClick() {
    let element = document.getElementById("challenge");
    console.log(element)
    challenge=Miau()
    
    speak(challenge)

    element.innerText = challenge
}

speak('Jugaremos Reto o Reto')
