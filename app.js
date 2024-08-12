let NumeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    let numeroGenerado = Math.ceil(Math.random()*numeroMaximo);

    if (numerosSorteados.length == numeroMaximo) {
    MostrarTexto('p', 'Ya no hay números');
    } else {
        console.log(numeroGenerado);
        console.log(numerosSorteados);
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function MostrarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function VerificarIntento() {
    let numeroUsuario = Number(document.getElementById('valorUsuario').value);
    if (numeroUsuario === NumeroSecreto) {
        MostrarTexto('p', `¡Has acertado el número ${(intentos === 1) ? 'a la primera' : (`en ${intentos} intentos`)}!`)
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó.
        if (numeroUsuario > NumeroSecreto) {
            MostrarTexto('p', 'El número secreto es menor.')
        } else {
            MostrarTexto('p', 'El número secreto es mayor.')
        }
        intentos++;
        limpiarcaja()

    }
}

function limpiarcaja() {
    document.querySelector('#valorUsuario').value = '';
}

function CondicionesIniciales(){
    MostrarTexto('h1', 'Juego del Número Secreto');
    MostrarTexto('p', `Escoge un número entre 1 y ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    console.log(NumeroSecreto)
    intentos = 1;
    }    

function ReiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //Indicar mensaje de inicio, generar número secerto y reiniciar intentos
    CondicionesIniciales();    
    //Desahibilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

CondicionesIniciales();

