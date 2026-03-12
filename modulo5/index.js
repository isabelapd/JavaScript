// criar uma função que calcula o tempo restante, e recebe uma data futura 

const calcularTempoRestante = (dataFutura) => {
    const agora = new Date ().getTime();
    const diferencaDeDatas = dataFutura - agora;

    const segundosDeUmMinuto = 60 * 1000;
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDoDia = 24 *segundosDeUmaHora;
    
    const dias = Math.floor(diferencaDeDatas / segundosDoDia);
    const horas = Math.floor((diferencaDeDatas % segundosDoDia)/segundosDeUmaHora);
    const minutos = Math.floor((diferencaDeDatas % segundosDeUmaHora)/segundosDeUmMinuto);
    const segundos = Math.floor((diferencaDeDatas % segundosDeUmMinuto)/1000);
    return{
        dias,
        horas,
        minutos,
        segundos
    };
}

//console.log(calcularTempoRestante(dataFutura));

// Função que atualiza do temporizador 

const atualizarTemporizador = () => {
    const dataFutura = new Date ('2025-12-31T23:59:50').getTime();
    const TempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById('dias').innerText = `Dias ${TempoRestante.dias}`;
    document.getElementById('horas').innerText = `Horas ${TempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${TempoRestante.minutos}`;
    document.getElementById('segundos').innerText = `Segundos ${TempoRestante.segundos}`;


    //console.log(TempoRestante)
}
const intervalo = setInterval(atualizarTemporizador, 1000);

//atualizarTemporizador()
