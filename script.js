function concentracao(peso) {
    return (peso - 3.6) * 4;
}

function calcular() {

    const pesoCx1 = Number(document.getElementById("cx1").value);
    const pesoCx2 = Number(document.getElementById("cx2").value);
    const pesoCx3 = Number(document.getElementById("cx3").value);
    const pesoCx4 = Number(document.getElementById("cx4").value);
    const pesoCone = Number(document.getElementById("cone").value);
    const pesoRetalheira = Number(document.getElementById("retalheira").value);
    const pesoMasseira = Number(document.getElementById("masseira").value);
    const pesoHm = Number(document.getElementById("hm").value);

    const cx1 = concentracao(pesoCx1);
    const cx2 = concentracao(pesoCx2);
    const cx3 = concentracao(pesoCx3);
    const cx4 = concentracao(pesoCx4);
    const cone = concentracao(pesoCone);
    const retalheira = concentracao(pesoRetalheira);
    const masseira = concentracao(pesoMasseira);
    const hm = concentracao(pesoHm);

    document.getElementById("resultado").innerHTML = `
        <div class="tabela-card">
            <h2>Concentrações</h2>

            <table>
                <tr>
                    <th>Local</th>
                    <th>Concentração</th>
                </tr>

                <tr><td>Caixa 1</td><td>${cx1.toFixed(2)}</td></tr>
                <tr><td>Caixa 2</td><td>${cx2.toFixed(2)}</td></tr>
                <tr><td>Caixa 3</td><td>${cx3.toFixed(2)}</td></tr>
                <tr><td>Caixa 4</td><td>${cx4.toFixed(2)}</td></tr>
                <tr><td>Cone</td><td>${cone.toFixed(2)}</td></tr>
                <tr><td>Retalheira</td><td>${retalheira.toFixed(2)}</td></tr>
                <tr><td>Masseira</td><td>${masseira.toFixed(2)}</td></tr>
                <tr><td>HM</td><td>${hm.toFixed(2)}</td></tr>
            </table>
        </div>

        <div class="tabela-card">
            <h2>Decantação</h2>

            <table>
                <tr>
                    <th>Caixa</th>
                    <th>Resultado</th>
                </tr>

                <tr><td>Caixa 1</td><td>${(hm - (cx1 / 4)).toFixed(2)}</td></tr>
                <tr><td>Caixa 2</td><td>${(hm - (cx2 / 4)).toFixed(2)}</td></tr>
                <tr><td>Caixa 3</td><td>${(hm - (cx3 / 4)).toFixed(2)}</td></tr>
                <tr><td>Caixa 4</td><td>${(hm - (cx4 / 4)).toFixed(2)}</td></tr>
            </table>
        </div>
    `;
}

// document.getElementById("resultado").innerHTML = `
// <div class="resultados">

//     <div class="tabela-card">
//         <h2>Concentrações</h2>

//         <table>
//             <thead>
//                 <tr>
//                     <th>Local</th>
//                     <th>Peso</th>
//                     <th>Concentração</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Caixa 1</td>
//                     <td>${document.getElementById('cx1').value}</td>
//                     <td>${cx1.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Caixa 2</td>
//                     <td>${document.getElementById('cx2').value}</td>
//                     <td>${cx2.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Caixa 3</td>
//                     <td>${document.getElementById('cx3').value}</td>
//                     <td>${cx3.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Caixa 4</td>
//                     <td>${document.getElementById('cx4').value}</td>
//                     <td>${cx4.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Cone</td>
//                     <td>${document.getElementById('cone').value}</td>
//                     <td>${cone.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Retalheira</td>
//                     <td>${document.getElementById('retalheira').value}</td>
//                     <td>${retalheira.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Masseira</td>
//                     <td>${document.getElementById('masseira').value}</td>
//                     <td>${masseira.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>HM</td>
//                     <td>${document.getElementById('hm').value}</td>
//                     <td>${hm.toFixed(2)}</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

//     <div class="tabela-card">
//         <h2>Decantações</h2>

//         <table>
//             <thead>
//                 <tr>
//                     <th>Caixa</th>
//                     <th>Resultado</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Caixa 1</td>
//                     <td>${(hm - (cx1 / 4)).toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Caixa 2</td>
//                     <td>${(hm - (cx2 / 4)).toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Caixa 3</td>
//                     <td>${(hm - (cx3 / 4)).toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                     <td>Caixa 4</td>
//                     <td>${(hm - (cx4 / 4)).toFixed(2)}</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

// </div>
// `;


// function concentracao(peso) {
//     return (peso - 3.6) * 4;
// }

// function calcular() {

//     const cx1 = concentracao(Number(document.getElementById('cx1').value));
//     const cx2 = concentracao(Number(document.getElementById('cx2').value));
//     const cx3 = concentracao(Number(document.getElementById('cx3').value));
//     const cx4 = concentracao(Number(document.getElementById('cx4').value));
//     const cone = concentracao(Number(document.getElementById('cone').value));
//     const retalheira = concentracao(Number(document.getElementById('retalheira').value));
//     const masseira = concentracao(Number(document.getElementById('masseira').value));
//     const hm = concentracao(Number(document.getElementById('hm').value));

//     const resultado = `
//         <h2>Concentrações</h2>

//         <table>
//             <tr>
//                 <th>Local</th>
//                 <th>Concentração</th>
//             </tr>
//             <tr><td>CX1</td><td>${cx1.toFixed(2)}</td></tr>
//             <tr><td>CX2</td><td>${cx2.toFixed(2)}</td></tr>
//             <tr><td>CX3</td><td>${cx3.toFixed(2)}</td></tr>
//             <tr><td>CX4</td><td>${cx4.toFixed(2)}</td></tr>
//             <tr><td>Cone</td><td>${cone.toFixed(2)}</td></tr>
//             <tr><td>Retalheira</td><td>${retalheira.toFixed(2)}</td></tr>
//             <tr><td>Masseira</td><td>${masseira.toFixed(2)}</td></tr>
//             <tr><td>HM</td><td>${hm.toFixed(2)}</td></tr>
//         </table>

//         <h2>Decantação</h2>

//         <table>
//             <tr>
//                 <th>Caixa</th>
//                 <th>Resultado</th>
//             </tr>
//             <tr><td>CX1</td><td>${(hm - (cx1 / 4)).toFixed(2)}</td></tr>
//             <tr><td>CX2</td><td>${(hm - (cx2 / 4)).toFixed(2)}</td></tr>
//             <tr><td>CX3</td><td>${(hm - (cx3 / 4)).toFixed(2)}</td></tr>
//             <tr><td>CX4</td><td>${(hm - (cx4 / 4)).toFixed(2)}</td></tr>
//         </table>
//     `;

//     document.getElementById("resultado").innerHTML = resultado;
// }