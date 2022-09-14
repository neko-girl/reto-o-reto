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
            'Besa a alguien de 5 formas diferentes',
            'Seducir solo con el tacto a otro jugador',
            'Juega con la lengua de alguien mas',
            'Vendate los ojos, los demas se esparsen por la habitacion. Vos caminas y besas al primero que toques',
            'Quitate 3 prendas de ropa',
            'Pasar la lengua por el cuerpo de otra persona',
            'Realizar sentadillas en ropa interior',
            'Pon una de tus películas porno favoritas en el movil',
            
            'Da una nalgada al jugador de la derecha',
            'Da una nalgada al jugador de la izquierda',
            'Seduce a una persona de tu mismo genero frente a todos',
            'Juega lo que reste del juego abraz@ al jugador de la izquierda',
            'Muerde despacito el labio al jugador de la derecha',
            'Dale un beso en la oreja al jugador frente a ti',
            'Sacale una prenda al jugador de la izquierda sin usar las manos',
            'Cierra los ojos, otro jugador te tiene que dar un beso, despues tienes que adivinar quien fue',
            'Ponte en 4 durante 3 turnos',
            'Da un beso en la parte del cuerpo que quieras a un jugador',
            'Ponte en pose del misionero con el jugador de tu derecha',
            'Acariciale la pierna al jugador de tu izquierda',
            'Da un beso al jugador mas lejos de ti',
            'Apoya tu cabeza sobre la entrepierna del jugador de tu izquierda durante 2 turnos',
            'Un jugador tiene que hacer un chupeto en el cuello',
            'Sientate sobre un jugador de espalda a los demas lo que reste del juego',
            'Ponte en pose de 69 con el jugador de tu derecha',
            'Haz un recorrido de besos sensuales al jugador de tu derecha desde la panza hasta la pelvis',
            'Teoriza sobre el arte del porno, como dirigirias el video perfecto?',
            'Da una catedra de como hacer una buena mamada',
            'Beso intenso',
            'Foto-Orgia, Todos los jugadores menos tu tienen que hacer una pose sexual con el jugador de su derecha, tu sacas la foto (si son impares sale trio)',
            'Sacate una prenda',
            'El jugador de la derecha tiene que apoyar su pie en tu entrepierna lo que reste del juego',
            'Demuestra como seducirias a alguien',
            'Tienes 5 segundos para decir los nombres de todos, dale un beso a los que no llegues a nombrar',
            'Todos los jugadores te tienen que dar un beso en algun lugar del cuerpo, no vale repetir',
            'Los jugadores quee esten a tu izquierda y a tu derecha tienen que inclinarse y poner su boca en tu entrepierna (de forma sensual) y quedarse ahi 2 turnos'
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
