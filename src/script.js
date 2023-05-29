const tiempoActual = new Date();
const minutosActuales = tiempoActual.getMinutes();

let metodoEncriptado;

switch (minutosActuales) {
    case 0: case 3: case 6: case 9: case 12: case 15: case 18: case 21: case 24: case 27: case 30: case 33: case 36: case 39: case 42: case 45: case 48: case 51: case 54: case 57: 
        metodoEncriptado = 0;
        break;
    case 1: case 4: case 7: case 10: case 13: case 16: case 19: case 22: case 25: case 28: case 31: case 34: case 37: case 40: case 43: case 46: case 49: case 52: case 55: case 58: 
        metodoEncriptado = 1;
        break;
    case 2: case 5: case 8: case 11: case 14: case 17: case 20: case 23: case 26: case 29: case 32: case 35: case 38: case 41: case 44: case 47: case 50: case 53: case 56: case 59: 
        metodoEncriptado = 2;
        break;
    default:
        break;
}

const removeAccents = (str) => {
    return str.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, ""); // esto remueve los acentos de los mensajes
} 

// definiciones globales de las variables de las funciones
let textoEncriptandoUppercase;
let textoEncriptandoCA;
let textoEncriptando;
let textoEncriptado = textoEncriptando;
let textoEncriptadoFinal;

let textoDesencriptandoUppercase;
let textoDesencriptandoCA;
let textoDesencriptando;
let textoDesencriptado = textoDesencriptando;
let textoDesencriptadoFinal;

let metodoDesencriptado;

// idenfiticadores de texto encriptado
const identificadorMetodo0 = "🙈";
const identificadorMetodo1 = "🙉";
const identificadorMetodo2 = "🙊";

// empieza la forma de encriptar un mensaje
function encriptarMensaje() {

    let textoEncriptandoUppercase = document.getElementById("texto-encriptar").value;
    let textoEncriptandoCA = textoEncriptandoUppercase.toLowerCase();
    let textoEncriptando = removeAccents(textoEncriptandoCA);
    let textoEncriptado;
    
    if (metodoEncriptado == 0) {
        textoEncriptado = textoEncriptando.replaceAll("a", "🥑");
        textoEncriptado = textoEncriptado.replaceAll("b", "🍌");
        textoEncriptado = textoEncriptado.replaceAll("c", "🥕");
        textoEncriptado = textoEncriptado.replaceAll("d", "🥟");
        textoEncriptado = textoEncriptado.replaceAll("e", "🍆");
        textoEncriptado = textoEncriptado.replaceAll("f", "🍟");
        textoEncriptado = textoEncriptado.replaceAll("g", "🍝");
        textoEncriptado = textoEncriptado.replaceAll("h", "🍔");
        textoEncriptado = textoEncriptado.replaceAll("i", "🥧");
        textoEncriptado = textoEncriptado.replaceAll("j", "🎃");
        textoEncriptado = textoEncriptado.replaceAll("k", "🍪");
        textoEncriptado = textoEncriptado.replaceAll("l", "🐬");
        textoEncriptado = textoEncriptado.replaceAll("m", "🍅");
        textoEncriptado = textoEncriptado.replaceAll("n", "🐌");
        textoEncriptado = textoEncriptado.replaceAll("ñ", "👖");
        textoEncriptado = textoEncriptado.replaceAll("o", "🥓");
        textoEncriptado = textoEncriptado.replaceAll("p", "🥔");
        textoEncriptado = textoEncriptado.replaceAll("q", "🦑");
        textoEncriptado = textoEncriptado.replaceAll("r", "🐦");
        textoEncriptado = textoEncriptado.replaceAll("s", "🐁");
        textoEncriptado = textoEncriptado.replaceAll("t", "🌷");
        textoEncriptado = textoEncriptado.replaceAll("u", "🐢");
        textoEncriptado = textoEncriptado.replaceAll("v", "🕊️");
        textoEncriptado = textoEncriptado.replaceAll("w", "🍉");
        textoEncriptado = textoEncriptado.replaceAll("x", "🦖");
        textoEncriptado = textoEncriptado.replaceAll("y", "🍛");
        textoEncriptado = textoEncriptado.replaceAll("z", "🦓");
        textoEncriptado = textoEncriptado.replaceAll("0", "💊");
        textoEncriptado = textoEncriptado.replaceAll("1", "⚽");
        textoEncriptado = textoEncriptado.replaceAll("2", "📯");
        textoEncriptado = textoEncriptado.replaceAll("3", "🎷");
        textoEncriptado = textoEncriptado.replaceAll("4", "🔔");
        textoEncriptado = textoEncriptado.replaceAll("5", "🖱️");
        textoEncriptado = textoEncriptado.replaceAll("6", "💾");
        textoEncriptado = textoEncriptado.replaceAll("7", "📺");
        textoEncriptado = textoEncriptado.replaceAll("8", "🕯️");
        textoEncriptado = textoEncriptado.replaceAll("9", "🚽");
        textoEncriptadoFinal = identificadorMetodo0 + textoEncriptado;
    }

    if (metodoEncriptado == 1) {
        textoEncriptado = textoEncriptando.replaceAll("a", "🌮");
        textoEncriptado = textoEncriptado.replaceAll("b", "🦀");
        textoEncriptado = textoEncriptado.replaceAll("c", "🥞");
        textoEncriptado = textoEncriptado.replaceAll("d", "🥪");
        textoEncriptado = textoEncriptado.replaceAll("e", "🍋");
        textoEncriptado = textoEncriptado.replaceAll("f", "🐟");
        textoEncriptado = textoEncriptado.replaceAll("g", "🐉");
        textoEncriptado = textoEncriptado.replaceAll("h", "🧀");
        textoEncriptado = textoEncriptado.replaceAll("i", "🍍");
        textoEncriptado = textoEncriptado.replaceAll("j", "🃏");
        textoEncriptado = textoEncriptado.replaceAll("k", "🦆");
        textoEncriptado = textoEncriptado.replaceAll("l", "🍭");
        textoEncriptado = textoEncriptado.replaceAll("m", "🥒");
        textoEncriptado = textoEncriptado.replaceAll("n", "🐜");
        textoEncriptado = textoEncriptado.replaceAll("ñ", "🧦");
        textoEncriptado = textoEncriptado.replaceAll("o", "🥐");
        textoEncriptado = textoEncriptado.replaceAll("p", "🍐");
        textoEncriptado = textoEncriptado.replaceAll("q", "🐝");
        textoEncriptado = textoEncriptado.replaceAll("r", "🐓");
        textoEncriptado = textoEncriptado.replaceAll("s", "🐎");
        textoEncriptado = textoEncriptado.replaceAll("t", "🌵");
        textoEncriptado = textoEncriptado.replaceAll("u", "🐛");
        textoEncriptado = textoEncriptado.replaceAll("v", "🌋");
        textoEncriptado = textoEncriptado.replaceAll("w", "🍓");
        textoEncriptado = textoEncriptado.replaceAll("x", "🦊");
        textoEncriptado = textoEncriptado.replaceAll("y", "🍬");
        textoEncriptado = textoEncriptado.replaceAll("z", "🦎");
        textoEncriptado = textoEncriptado.replaceAll("0", "💉");
        textoEncriptado = textoEncriptado.replaceAll("1", "⚾");
        textoEncriptado = textoEncriptado.replaceAll("2", "🎤");
        textoEncriptado = textoEncriptado.replaceAll("3", "🎸");
        textoEncriptado = textoEncriptado.replaceAll("4", "📻");
        textoEncriptado = textoEncriptado.replaceAll("5", "🎹");
        textoEncriptado = textoEncriptado.replaceAll("6", "💿");
        textoEncriptado = textoEncriptado.replaceAll("7", "📷");
        textoEncriptado = textoEncriptado.replaceAll("8", "💡");
        textoEncriptado = textoEncriptado.replaceAll("9", "🚿");
        textoEncriptadoFinal = identificadorMetodo1 + textoEncriptado;
    }

    if (metodoEncriptado == 2) {
        textoEncriptado = textoEncriptando.replaceAll("a", "🍇");
        textoEncriptado = textoEncriptado.replaceAll("b", "🌯");
        textoEncriptado = textoEncriptado.replaceAll("c", "🍑");
        textoEncriptado = textoEncriptado.replaceAll("d", "🍞");
        textoEncriptado = textoEncriptado.replaceAll("e", "🌹");
        textoEncriptado = textoEncriptado.replaceAll("f", "🐸");
        textoEncriptado = textoEncriptado.replaceAll("g", "🐧");
        textoEncriptado = textoEncriptado.replaceAll("h", "🍄");
        textoEncriptado = textoEncriptado.replaceAll("i", "🐇");
        textoEncriptado = textoEncriptado.replaceAll("j", "🕹️");
        textoEncriptado = textoEncriptado.replaceAll("k", "🐍");
        textoEncriptado = textoEncriptado.replaceAll("l", "🍈");
        textoEncriptado = textoEncriptado.replaceAll("m", "🦐");
        textoEncriptado = textoEncriptado.replaceAll("n", "🥜");
        textoEncriptado = textoEncriptado.replaceAll("ñ", "💍");
        textoEncriptado = textoEncriptado.replaceAll("o", "🥥");
        textoEncriptado = textoEncriptado.replaceAll("p", "🐆");
        textoEncriptado = textoEncriptado.replaceAll("q", "🦗");
        textoEncriptado = textoEncriptado.replaceAll("r", "🦃");
        textoEncriptado = textoEncriptado.replaceAll("s", "🍣");
        textoEncriptado = textoEncriptado.replaceAll("t", "🦇");
        textoEncriptado = textoEncriptado.replaceAll("u", "🦋");
        textoEncriptado = textoEncriptado.replaceAll("v", "🧤");
        textoEncriptado = textoEncriptado.replaceAll("w", "🥝");
        textoEncriptado = textoEncriptado.replaceAll("x", "🚕");
        textoEncriptado = textoEncriptado.replaceAll("y", "🍯");
        textoEncriptado = textoEncriptado.replaceAll("z", "🥨");
        textoEncriptado = textoEncriptado.replaceAll("0", "⚰️");
        textoEncriptado = textoEncriptado.replaceAll("1", "🏀");
        textoEncriptado = textoEncriptado.replaceAll("2", "🎧");
        textoEncriptado = textoEncriptado.replaceAll("3", "🎻");
        textoEncriptado = textoEncriptado.replaceAll("4", "🥁");
        textoEncriptado = textoEncriptado.replaceAll("5", "🖨️");
        textoEncriptado = textoEncriptado.replaceAll("6", "🎞️");
        textoEncriptado = textoEncriptado.replaceAll("7", "💻");
        textoEncriptado = textoEncriptado.replaceAll("8", "🔦");
        textoEncriptado = textoEncriptado.replaceAll("9", "🛁");
        textoEncriptadoFinal = identificadorMetodo2 + textoEncriptado;
    }
    
    document.querySelector(".output-encriptado").innerHTML = textoEncriptadoFinal;
}

// empieza la forma de desencriptar un mensaje
function desEncriptarMensaje() {

    let textoDesencriptandoUppercase = document.getElementById("texto-desencriptar").value;
    let textoDesencriptandoCA = textoDesencriptandoUppercase.toLowerCase();
    let textoDesencriptando = removeAccents(textoDesencriptandoCA);
    let textoDesencriptado;

    if (textoDesencriptando.includes(identificadorMetodo0)) {
        metodoDesencriptado = 0;
    } else if (textoDesencriptando.includes(identificadorMetodo1)) {
        metodoDesencriptado = 1;
    } else if (textoDesencriptando.includes(identificadorMetodo2)) {
        metodoDesencriptado = 2;
    } else {
        alert("El mensaje ingresado no es válido para desencriptar.");
    }

    if (metodoDesencriptado == 0) {
        textoDesencriptado = textoDesencriptando.replaceAll("🥑", "a");
        textoDesencriptado = textoDesencriptado.replaceAll("🍌", "b");
        textoDesencriptado = textoDesencriptado.replaceAll("🥕", "c");
        textoDesencriptado = textoDesencriptado.replaceAll("🥟", "d");
        textoDesencriptado = textoDesencriptado.replaceAll("🍆", "e");
        textoDesencriptado = textoDesencriptado.replaceAll("🍟", "f");
        textoDesencriptado = textoDesencriptado.replaceAll("🍝", "g");
        textoDesencriptado = textoDesencriptado.replaceAll("🍔", "h");
        textoDesencriptado = textoDesencriptado.replaceAll("🥧", "i");
        textoDesencriptado = textoDesencriptado.replaceAll("🎃", "j");
        textoDesencriptado = textoDesencriptado.replaceAll("🍪", "k");
        textoDesencriptado = textoDesencriptado.replaceAll("🐬", "l");
        textoDesencriptado = textoDesencriptado.replaceAll("🍅", "m");
        textoDesencriptado = textoDesencriptado.replaceAll("🐌", "n");
        textoDesencriptado = textoDesencriptado.replaceAll("👖", "ñ");
        textoDesencriptado = textoDesencriptado.replaceAll("🥓", "o");
        textoDesencriptado = textoDesencriptado.replaceAll("🥔", "p");
        textoDesencriptado = textoDesencriptado.replaceAll("🦑", "q");
        textoDesencriptado = textoDesencriptado.replaceAll("🐦", "r");
        textoDesencriptado = textoDesencriptado.replaceAll("🐁", "s");
        textoDesencriptado = textoDesencriptado.replaceAll("🌷", "t");
        textoDesencriptado = textoDesencriptado.replaceAll("🐢", "u");
        textoDesencriptado = textoDesencriptado.replaceAll("🕊️", "v");
        textoDesencriptado = textoDesencriptado.replaceAll("🍉", "w");
        textoDesencriptado = textoDesencriptado.replaceAll("🦖", "x");
        textoDesencriptado = textoDesencriptado.replaceAll("🍛", "y");
        textoDesencriptado = textoDesencriptado.replaceAll("🦓", "z");
        textoDesencriptado = textoDesencriptado.replaceAll("💊", "0");
        textoDesencriptado = textoDesencriptado.replaceAll("⚽", "1");
        textoDesencriptado = textoDesencriptado.replaceAll("📯", "2");
        textoDesencriptado = textoDesencriptado.replaceAll("🎷", "3");
        textoDesencriptado = textoDesencriptado.replaceAll("🔔", "4");
        textoDesencriptado = textoDesencriptado.replaceAll("🖱️", "5");
        textoDesencriptado = textoDesencriptado.replaceAll("💾", "6");
        textoDesencriptado = textoDesencriptado.replaceAll("📺", "7");
        textoDesencriptado = textoDesencriptado.replaceAll("🕯️", "8");
        textoDesencriptado = textoDesencriptado.replaceAll("🚽", "9");
        textoDesencriptado = textoDesencriptado.replaceAll("🙈", "");
        textoDesencriptadoFinal = textoDesencriptado;
    }

    if (metodoDesencriptado == 1) {
        textoDesencriptado = textoDesencriptando.replaceAll("🌮", "a");
        textoDesencriptado = textoDesencriptado.replaceAll("🦀", "b");
        textoDesencriptado = textoDesencriptado.replaceAll("🥞", "c");
        textoDesencriptado = textoDesencriptado.replaceAll("🥪", "d");
        textoDesencriptado = textoDesencriptado.replaceAll("🍋", "e");
        textoDesencriptado = textoDesencriptado.replaceAll("🐟", "f");
        textoDesencriptado = textoDesencriptado.replaceAll("🐉", "g");
        textoDesencriptado = textoDesencriptado.replaceAll("🧀", "h");
        textoDesencriptado = textoDesencriptado.replaceAll("🍍", "i");
        textoDesencriptado = textoDesencriptado.replaceAll("🃏", "j");
        textoDesencriptado = textoDesencriptado.replaceAll("🦆", "k");
        textoDesencriptado = textoDesencriptado.replaceAll("🍭", "l");
        textoDesencriptado = textoDesencriptado.replaceAll("🥒", "m");
        textoDesencriptado = textoDesencriptado.replaceAll("🐜", "n");
        textoDesencriptado = textoDesencriptado.replaceAll("🧦", "ñ");
        textoDesencriptado = textoDesencriptado.replaceAll("🥐", "o");
        textoDesencriptado = textoDesencriptado.replaceAll("🍐", "p");
        textoDesencriptado = textoDesencriptado.replaceAll("🐝", "q");
        textoDesencriptado = textoDesencriptado.replaceAll("🐓", "r");
        textoDesencriptado = textoDesencriptado.replaceAll("🐎", "s");
        textoDesencriptado = textoDesencriptado.replaceAll("🌵", "t");
        textoDesencriptado = textoDesencriptado.replaceAll("🐛", "u");
        textoDesencriptado = textoDesencriptado.replaceAll("🌋", "v");
        textoDesencriptado = textoDesencriptado.replaceAll("🍓", "w");
        textoDesencriptado = textoDesencriptado.replaceAll("🦊", "x");
        textoDesencriptado = textoDesencriptado.replaceAll("🍬", "y");
        textoDesencriptado = textoDesencriptado.replaceAll("🦎", "z");
        textoDesencriptado = textoDesencriptado.replaceAll("💉", "0");
        textoDesencriptado = textoDesencriptado.replaceAll("⚾", "1");
        textoDesencriptado = textoDesencriptado.replaceAll("🎤", "2");
        textoDesencriptado = textoDesencriptado.replaceAll("🎸", "3");
        textoDesencriptado = textoDesencriptado.replaceAll("📻", "4");
        textoDesencriptado = textoDesencriptado.replaceAll("🎹", "5");
        textoDesencriptado = textoDesencriptado.replaceAll("💿", "6");
        textoDesencriptado = textoDesencriptado.replaceAll("📷", "7");
        textoDesencriptado = textoDesencriptado.replaceAll("💡", "8");
        textoDesencriptado = textoDesencriptado.replaceAll("🚿", "9");
        textoDesencriptado = textoDesencriptado.replaceAll("🙉", "");
        textoDesencriptadoFinal = textoDesencriptado;
    }

    if (metodoDesencriptado == 2) {
        textoDesencriptado = textoDesencriptando.replaceAll("🍇", "a");
        textoDesencriptado = textoDesencriptado.replaceAll("🌯", "b");
        textoDesencriptado = textoDesencriptado.replaceAll("🍑", "c");
        textoDesencriptado = textoDesencriptado.replaceAll("🍞", "d");
        textoDesencriptado = textoDesencriptado.replaceAll("🌹", "e");
        textoDesencriptado = textoDesencriptado.replaceAll("🐸", "f");
        textoDesencriptado = textoDesencriptado.replaceAll("🐧", "g");
        textoDesencriptado = textoDesencriptado.replaceAll("🍄", "h");
        textoDesencriptado = textoDesencriptado.replaceAll("🐇", "i");
        textoDesencriptado = textoDesencriptado.replaceAll("🕹️", "j");
        textoDesencriptado = textoDesencriptado.replaceAll("🐍", "k");
        textoDesencriptado = textoDesencriptado.replaceAll("🍈", "l");
        textoDesencriptado = textoDesencriptado.replaceAll("🦐", "m");
        textoDesencriptado = textoDesencriptado.replaceAll("🥜", "n");
        textoDesencriptado = textoDesencriptado.replaceAll("💍", "ñ");
        textoDesencriptado = textoDesencriptado.replaceAll("🥥", "o");
        textoDesencriptado = textoDesencriptado.replaceAll("🐆", "p");
        textoDesencriptado = textoDesencriptado.replaceAll("🦗", "q");
        textoDesencriptado = textoDesencriptado.replaceAll("🦃", "r");
        textoDesencriptado = textoDesencriptado.replaceAll("🍣", "s");
        textoDesencriptado = textoDesencriptado.replaceAll("🦇", "t");
        textoDesencriptado = textoDesencriptado.replaceAll("🦋", "u");
        textoDesencriptado = textoDesencriptado.replaceAll("🧤", "v");
        textoDesencriptado = textoDesencriptado.replaceAll("🥝", "w");
        textoDesencriptado = textoDesencriptado.replaceAll("🚕", "x");
        textoDesencriptado = textoDesencriptado.replaceAll("🍯", "y");
        textoDesencriptado = textoDesencriptado.replaceAll("🥨", "z");
        textoDesencriptado = textoDesencriptado.replaceAll("⚰️", "0");
        textoDesencriptado = textoDesencriptado.replaceAll("🏀", "1");
        textoDesencriptado = textoDesencriptado.replaceAll("🎧", "2");
        textoDesencriptado = textoDesencriptado.replaceAll("🎻", "3");
        textoDesencriptado = textoDesencriptado.replaceAll("🥁", "4");
        textoDesencriptado = textoDesencriptado.replaceAll("🖨️", "5");
        textoDesencriptado = textoDesencriptado.replaceAll("🎞️", "6");
        textoDesencriptado = textoDesencriptado.replaceAll("💻", "7");
        textoDesencriptado = textoDesencriptado.replaceAll("🔦", "8");
        textoDesencriptado = textoDesencriptado.replaceAll("🛁", "9");
        textoDesencriptado = textoDesencriptado.replaceAll("🙊", "");
        textoDesencriptadoFinal = textoDesencriptado;
    }

    document.querySelector(".output-desencriptado").innerHTML = textoDesencriptadoFinal;
}

// caracteres propios de cada método
const caracteresCodigoDesencriptado0 = ["🥑", "🍌", "🥕", "🥟", "🍆", "🍟", "🍝", "🍔", "🥧", "🎃", "🍪", "🐬", "🍅", "🐌", "👖", "🥓", "🥔", "🦑", "🐦", "🐁", "🌷", "🐢", "🕊️", "🍉", "🦖", "🍛", "🦓", "💊", "⚽", "📯", "🎷", "🔔", "🖱️", "💾", "📺", "🕯️", "🚽"];
const caracteresCodigoDesencriptado1 = ["🌮", "🦀", "🥞", "🥪", "🍋", "🐟", "🐉", "🧀", "🍍", "🃏", "🦆", "🍭", "🥒", "🐜", "🧦", "🥐", "🍐", "🐝", "🐓", "🐎", "🌵", "🐛", "🌋", "🍓", "🦊", "🍬", "🦎", "💉", "⚾", "🎤", "🎸", "📻", "🎹", "💿", "📷", "💡", "🚿"];
const caracteresCodigoDesencriptado2 = ["🍇", "🌯", "🍑", "🍞", "🌹", "🐸", "🐧", "🍄", "🐇", "🕹️", "🐍", "🍈", "🦐", "🥜", "💍", "🥥", "🐆", "🦗", "🦃", "🍣", "🦇", "🦋", "🧤", "🥝", "🚕", "🍯", "🥨", "⚰️", "🏀", "🎧", "🎻", "🥁", "🖨️", "🎞️", "💻", "🔦", "🛁"];
