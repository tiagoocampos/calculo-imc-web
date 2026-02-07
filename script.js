const nomeUsuario = document.getElementById('nomeUsuario');
const alturaUsuario = document.getElementById('alturaUsuario');
const pesoUsuario = document.getElementById('pesoUsuario');
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpar = document.getElementById('btnLimpar');
const resultadoImc = document.getElementById('resultadoImc');

function imc() {
  if (nomeUsuario.value === '' ||
      alturaUsuario.value === '' ||
      pesoUsuario.value === '') {
    resultadoImc.innerText = 'Preencha todos os campos corretamente.';
    return;
    }

  const nome = nomeUsuario.value;
  const altura = parseFloat(alturaUsuario.value);
  const peso = parseFloat(pesoUsuario.value);
  const imc = peso / (altura * altura);

  let mensagem = nomeUsuario.value + ', seu IMC é: ' + imc.toFixed(2) + ' - ';

  if (imc < 18.5){
    mensagem += 'Você está baixo do peso';
  } else if (imc < 25){
    mensagem += 'Você está com peso normal';
  } else if (imc < 29.9){
    mensagem += 'Você está com sobrepeso';
  }else if (imc < 34.9){
    mensagem += 'Você está com obesidade grau 1';
  } else if (imc < 39.9){
    mensagem += 'Você está com obesidade grau 2';
  } else {
    mensagem += 'Voce está com obesidade grau 3';
  }

  resultadoImc.innerText = mensagem;
  resultadoImc.style.display = 'block';
  btnLimpar.style.display = 'block';
  

}

function limpar() {
  nomeUsuario.value = '';
  alturaUsuario.value = '';
  pesoUsuario.value = '';
  resultadoImc.innerText = '';
  
  btnLimpar.style.display = 'none';
  resultadoImc.style.display = 'none';
}

 

btnCalcular.addEventListener('click', imc);
btnLimpar.addEventListener('click', limpar);

