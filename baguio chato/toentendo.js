// JavaScript básico: alerta ao clicar no botão
document.addEventListener('DOMContentLoaded', function() {
	const botao = document.querySelector('button');
	if (botao) {
		botao.addEventListener('click', function() {
			alert('Você clicou no botão!');
		});
	}
});
