const form = document.getElementById('form_atividade');
const imgAprovado = '<img src="./assets/feliz.jpg" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./assets/triste.png" alt="Emoji celebrando"/>';

const spanAprovado = '<span class="resultado aprovado"> Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado"> Reprovado</span>';

const notaMinima = parseFloat(prompt('Digite a nota mínima:'))

const atividade = [];
const notas = [];

let linhasTabela = '';

form.addEventListener('submit',function(e){
     e.preventDefault();

     adicionaLinha();
     atualizaTabela();
     atualizaMediaFinal();
})


function adicionaLinha(){
     const inputNomeAtividade = document.getElementById('nome_atividade');
     const inputNotaAtividade = document.getElementById('nota_atividade');

     if(atividade.includes(inputNomeAtividade.value)){
          alert(`A atividade: ${inputNomeAtividade} já foi inserida`);
     }else{
          atividade.push(inputNomeAtividade.value);
          notas.push(parseFloat(inputNotaAtividade.value));

          let linha = '<tr>';
          linha += `<td>${inputNomeAtividade.value}</td>`;
          linha += `<td>${inputNotaAtividade.value}</td>`;
          linha += `<td>${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado}</td>`;
          linha += '</tr>';

          linhasTabela += linha;
     }
     inputNomeAtividade.value = ''
     inputNotaAtividade.value = ''
}

function atualizaTabela(){

     const corpoTabela = document.getElementById('corpo_tabela');
     corpoTabela.innerHTML = linhasTabela;
}

function atualizaMediaFinal(){
     const mediaFinal = calculaMediaFinal();

     document.getElementById('media-final-valor').innerHTML = mediaFinal;
     document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){
     let somaDasNotas = 0;

     for(let i = 0; i < notas.length; i++){
          somaDasNotas += notas[i]
     }

     return somaDasNotas / notas.length;
}