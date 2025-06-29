// Mostrar a carta
document.getElementById('mostrarCarta').addEventListener('click', () => {
  document.getElementById('carta').classList.remove('oculto');
  document.getElementById('mensagemFinal').classList.add('oculto'); // Garante que não fique visível
});

// Aceitar o contrato
document.getElementById('aceitarContrato').addEventListener('click', () => {
  document.getElementById('mensagemFinal').classList.remove('oculto');
});