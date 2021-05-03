//querys
$(document).ready(function(){
	$(document).tooltip();
});


window.addEventListener('load', function(){
	//variables
	const servicios = [

		{
			nombre:'Perfil de ingreso',
			img: '../static/img/empresas.png'
		},

		{
			nombre:'Perfil Preventivo',
			img: '../static/img/empresas.png'
		},

		{
			nombre:'Perfiles Sanitarios',
			img: '../static/img/empresas.png'
		},

		{
			nombre:'Detección apnea del sueño ',
			img: '../static/img/empresas.png'
		},

		{
			nombre: 'Pruebas Covid-19',
			img: '../static/img/empresas.png'
		},

		{
			nombre: 'Antidoping',
			img: '../static/img/empresas.png'
		},


		{
			nombre: 'Campañas de salud ',
			img: '../static/img/empresas.png'
		}

	];



	servicios.forEach((item) =>{
		const servicio_card = `

			<div class="card mt-4">
				<div card-body>
					<h1 class="text-center font-weight-lighter m-2">
						<img src="${item.img}" alt="maletin" class="img-fluid" width="50" title="Icons made by Freepik from www.flaticon.com">
						${item.nombre}
					</h1>
				</div>
			</div>


		`;

		$('#servicio-empresas').append(servicio_card);
	});



});
