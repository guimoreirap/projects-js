const diaEl = document.getElementById('dia');
const horaEl = document.getElementById('hora');
const minEl = document.getElementById('min');
const segEl = document.getElementById('seg');

const diaDouble = ('21 Nov 2022');

function contador(){
    const diaMeta = new Date(diaDouble);
    const diaAtual = new Date();

    const totalSegundos = (diaMeta - diaAtual) / 1000;

    const dia = Math.floor(totalSegundos / 3600 / 24);
    const hora = Math.floor(totalSegundos / 3600) % 24;
    const min = Math.floor(totalSegundos / 60) % 60;
    const seg = Math.floor(totalSegundos) % 60;

    diaEl.innerHTML = formatarTempo(dia);
    horaEl.innerHTML = formatarTempo(hora);
    minEl.innerHTML = formatarTempo(min);
    segEl.innerHTML = formatarTempo(seg);
}

function formatarTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo; 
}

//inicio da chamada
contador();
setInterval(contador,1000);