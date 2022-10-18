function Tabuada() {
            let num = Number(document.getElementById('numero').value);
            let saida = document.getElementById('saida');
            let tabuada = '';

            for (let count = 1; count <= 10; count++)
                tabuada += `${num} X ${count} = ${num*count} <br/>`;
            saida.innerHTML = `<h2>Tabuada do ${num}</h2> <p>${tabuada}</p>`;
        }
