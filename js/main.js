$(document).ready(function(){

	$(document).tooltip();

});


window.addEventListener('load', function(){
	const covid = [

		{
			nombre: 'Antígeno SARS-COV-2 (covid)',
			img: 'static/img/coronavirus.png',
		},


		{
			nombre: 'PCR GENEXPERT Mycobacterium Tuberculosis',
			img: 'static/img/coronavirus.png'
		},


		{
			nombre: 'SARS-COV-2 lgM/lgG covid (Quimioluminiscencia)',
			img: 'static/img/coronavirus.png'
		},


		{
			nombre: 'SARS-COV-2 lgM (covid)',
			img: 'static/img/coronavirus.png'
		},


		{
			nombre: 'Prueba rapida antígeno SARS-COV-2 (covid)',
			img: 'static/img/coronavirus.png'
		},


		{
			nombre: 'SARS-COV-2 Combo (Ag/lgG/lgM) (covid)',
			img: 'static/img/coronavirus.png'
		},

	];



	// **************buscador***********************************

	const search = document.querySelector('#search');
	const resultados = document.querySelector('#resultados');


	const filtro = () =>{
		//variables a utilizar
		resultados.innerHTML = '';
		const texto = search.value.toLowerCase();

		//funcion del buscador
		for(let datas of covid){
			let busqueda = datas.nombre.toLowerCase();

			if(busqueda.indexOf(texto) !== -1){
				resultados.innerHTML += `

					<div class="card mt-2">
						<div class="card-body">

							<h5 class="text-center font-weight-lighter">
								<img
								src="${datas.img}"
								title="Icons made by Freepik from www.flaticon.com"
								class="img-fluid"
								width="50">
								${datas.nombre}
								<br><br>

								<a
								href="https://www.facebook.com/kanoklab/"
								class="btn"
								target="_blank">Mas Información</a>

							</h5><br><br>

						</div>
					</div>

				`;


			}

		}

		if(resultados.innerHTML == ''){
			resultados.innerHTML += `

				<p class="text-muted mt-3">
					No se encontraron resultados
				</p>

			`;
		}


	}


	search.addEventListener('keyup', filtro);


	//animaciones
	ScrollReveal().reveal('.card', {
        interval: 300,
        reset: true
    });



});
