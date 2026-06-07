function concentracao(peso) {
    return (peso - 3.6) * 4;
}

function calcular() {

    const cx1 = concentracao(Number(document.getElementById('cx1').value));
    const cx2 = concentracao(Number(document.getElementById('cx2').value));
    const cx3 = concentracao(Number(document.getElementById('cx3').value));
    const cx4 = concentracao(Number(document.getElementById('cx4').value));
    const cone = concentracao(Number(document.getElementById('cone').value));
    const retalheira = concentracao(Number(document.getElementById('retalheira').value));
    const masseira = concentracao(Number(document.getElementById('masseira').value));
    const hm = concentracao(Number(document.getElementById('hm').value));

    const resultado = `
        <h2>Concentrações</h2>

        <table>
            <tr>
                <th>Local</th>
                <th>Concentração</th>
            </tr>
            <tr><td>CX1</td><td>${cx1.toFixed(2)}</td></tr>
            <tr><td>CX2</td><td>${cx2.toFixed(2)}</td></tr>
            <tr><td>CX3</td><td>${cx3.toFixed(2)}</td></tr>
            <tr><td>CX4</td><td>${cx4.toFixed(2)}</td></tr>
            <tr><td>Cone</td><td>${cone.toFixed(2)}</td></tr>
            <tr><td>Retalheira</td><td>${retalheira.toFixed(2)}</td></tr>
            <tr><td>Masseira</td><td>${masseira.toFixed(2)}</td></tr>
            <tr><td>HM</td><td>${hm.toFixed(2)}</td></tr>
        </table>

        <h2>Decantação</h2>

        <table>
            <tr>
                <th>Caixa</th>
                <th>Resultado</th>
            </tr>
            <tr><td>CX1</td><td>${(hm - (cx1 / 4)).toFixed(2)}</td></tr>
            <tr><td>CX2</td><td>${(hm - (cx2 / 4)).toFixed(2)}</td></tr>
            <tr><td>CX3</td><td>${(hm - (cx3 / 4)).toFixed(2)}</td></tr>
            <tr><td>CX4</td><td>${(hm - (cx4 / 4)).toFixed(2)}</td></tr>
        </table>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}