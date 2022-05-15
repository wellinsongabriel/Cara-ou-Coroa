document.addEventListener('DOMContentLoaded', function () {

	lados = ['cara', 'coroa']

	//declaração das imagens
	cara_coroa = document.querySelector('.cara_coroa')
	cara = document.querySelector('.cara')
	coroa = document.querySelector('.coroa')
	restaurar = document.querySelector('.atualizar')
	tempo = 100

	setInterval(() => {
		if (cara.getAttribute('hidden') != 'hidden') {//testa qual lado está aparecendo no momento

			//sem essa condição o setInterval não para de acrescentar valores para opacidade
			if (parseFloat(cara.style.opacity) < 1) {
				cara.style.opacity = parseFloat(cara.style.opacity) + 0.1
			}
		} else {
			if (parseFloat(coroa.style.opacity) < 1) {
				coroa.style.opacity = parseFloat(coroa.style.opacity) + 0.1
			}
		}
	}, tempo)

	apagarMoedas = () => {//ajusta para 0 a opacidade da cara e da coroa
		cara.style.opacity = 0
		coroa.style.opacity = 0
	}

	sortear = () => {
		i = Math.floor(Math.random() * 2)//aleatorio entre 0 e 1
		if (lados[i] == 'cara') {
			apagarMoedas()
			coroa.setAttribute('hidden', 'hidden')//esconder o lado coroa
			cara.removeAttribute('hidden')//exibir o lado cara			
		}
		if (lados[i] == 'coroa') {
			apagarMoedas()
			cara.setAttribute('hidden', 'hidden')
			coroa.removeAttribute('hidden')
		}
	}

	//evento de clique da imagem inicial
	cara_coroa.addEventListener('click', function () {
		//esconder a imagem inicial
		cara_coroa.setAttribute('hidden', 'hidden')
		sortear()
	})

	//evento de clique do lado cara da moeda
	cara.addEventListener('click', function () {
		sortear()
	})

	//evento de clique do lado coroa da moeda
	coroa.addEventListener('click', function () {
		sortear()
	})

	//evento de clique do botão para restaurar para tela inicial
	restaurar.addEventListener('click', function () {
		cara_coroa.removeAttribute('hidden')
		cara.setAttribute('hidden', 'hidden')
		coroa.setAttribute('hidden', 'hidden')

	})
})
