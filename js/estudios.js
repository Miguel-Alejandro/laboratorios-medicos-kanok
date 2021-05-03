//querys
$(document).ready(function(){
	$(document).tooltip();
});


//script
window.addEventListener('load', function(){
	let estudios = [

		{
			nombre: 'Inmunologia',
			desc: 'Perfiles tiroideos <br> Determinación de hormonas <br> Perfil hormonal masculino <br> Perfil hormonal femenino <br><br>  La Inmunología es la especialidad médica que se centra en el estudio, diagnóstico y tratamiento de las enfermedades relacionadas con el sistema inmunitario y, como consecuencia, de los órganos, tejidos y células que modulan la respuesta del organismo ante la presencia de agentes patógenos externos <br><br> <b>Pregunte por otros estudios</b>'
		},


		{
			nombre: 'Quimica Sanguinea',
			desc: 'Manejamos perfiles de 6 hasta 32 elementos <br> Perfil para tiroideo <br> Perfil hepático <br> Perfil gestacional <br> Perfil de glucosa <br> Proteína en suero y orina <br> Electrolitos <br><br>  Es un examen que mide los niveles de ciertas sustancias en la sangre el cual suministra información al médico por medio de una serie de pruebas acerca del metabolismo en el cuerpo humano y el funcionamiento de ciertos órganos como el hígado y los riñones.  <br><br> <b>Pregunte por otros estudios</b>'
		},

		{
			nombre: 'Hematologia',
			desc: 'Biometría hemática completa <br> Anticuerpos anti RH <br> Biometría hemática reticulositos <br> Estudios citoquímico diversos <br> Cuenta de plaquetas <br> Fragilidad eritrocitaria <br> Treponema pallidum en campo oscuro <br> Velocidad de sedimentación globular <br><br>  Es el estudio de la sangre y sus desórdenes. Los hematólogos y los hematopatólogos son proveedores de atención médica altamente calificados que se especializan en la sangre y los componentes de la sangre, incluyendo las células de la sangre y las de la médula ósea.  <br><br> <b>Pregunte por otros estudios</b>'
		},


		{
			nombre: 'Uroanalisis',
			desc: 'Examen general de orina.Análisis físico químico y microscópico <br> Una prueba de orina, puede hacerse como parte de un chequeo de rutina o para detectar trastornos del tracto urinario, el riñón o el hígado.  <br><br> <b>Pregunte por otros estudios</b>'
		},


		{
			nombre: 'Bacteriologia',
			desc: 'Amiba en fresco y moco fecal en heces <br> Identificación de parásitos <br> Antígeno de helicobacter pylori en heces <br>Coprológico en heces fecales <br> coproparasitoscópico <br> Sangre oculta en heces <br><br> Realizamos todo tipo de estudios para diagnosticar enfermedades infecciosas y parasitarias  <br><br> <b>Pregunte por otros estudios</b>'
		},


		{
			nombre: ' Microbiologia',
			desc: 'Cultivo de exudado faríngeo  <br> Cultivo de orina (urocultivo) <br>  Cultivo de exudado cérvicovaginal <br> Cultivo de exudado uretral <br> Cultivo de heces fecales <br> Cultivo de lavado o aspirado bronquial <br> Cultivo de liquido de diálisis <br><br>  Estudia los microorganismos, bacterias, hongos, protistas y parásitos y otros agentes como virus, viroides y priones.  <br><br> <b>Pregunte por otros estudios</b>'
		},


		{
			nombre: 'Pruebas de Paternidad',
			desc: 'Exclusión  de paternidad <br> <br> Es el procedimiento que permite determinar, a través del análisis del ADN, quién es el padre o la madre biológica de un niño, niña o adolescente  <br><br> <b>Pregunte por otros estudios</b>'
		},


		{
			nombre: 'Deteccion de Metales',
			desc: 'Detección de metales pesados en sangre <br><br>  Prueba de sangre de metales pesados es un grupo de pruebas que miden los niveles de metales potencialmente dañinos en la sangre.  <br><br> <b>Pregunte por otros estudios</b>'
		},


		{
			nombre: 'Tamiz Neonatal',
			desc: 'Tamiz neonatal, <br> Hidroxiprogesterona neonatal <br> Hormona estimulante de la tiroides TSH neonatal <br> Tiroxina T4 neonatal <br> Glucosa 6 fosfato deshidrogenasa neonatal <br><br>  Debe realizarse a todos los niños recién nacidos para detectar alteraciones del metabolismo que los hace distintos a los demás. Detecta el hipotiroidismo congénito, que es una de las enfermedades endocrinas más frecuentes de la niñez (causa de retraso mental).  <br><br> <b>pregunte por otros estudios</b>'
		},


		{
			nombre: 'Patologia  y Citopatologia',
			desc: 'Biopsia por aspiración con aguja <br> Biopsia endoscopica  <br> Biopsia revisión bloque de parafina <br> Biopsia órgano especial <br><br>  Se analizan especímenes tomados a partir de células, tejidos u órganos a simple vista o usando microscopios para estudiar sus cambios cuando están afectados por una enfermedad.  <br><br> <b>pregunte por otros estudios</b>'
		},

		{
			nombre: 'Alergias',
			desc: 'Perfiles de alergias alimentarias <br> Perfiles de alergias inhalatorias <br> Determinación de inmunoglobulina IgE <br> Estudios de IgE específicos para diversos alérgenos <br><br> <b>Pregunte por otros estudios</b>'
		},

		{
			nombre: 'Infecciosas ',
			desc: 'Perfil viral  (anticuerpos HIV, anticuerpos HVC,  antígeno HBsAg) <br> Perfil TORCH (Toxoplasma, Rubeola, Citomelovirus, Herpes) <br><br> <b>Pregunte por otros estudios</b>'
		}

	];


	//buscador
	const search = document.querySelector('#search');
	const resultados = document.querySelector('#resultados');


	const filtro = () =>{
		resultados.innerHTML = '';
		const texto = search.value.toLowerCase();

		for(let data of estudios){
			let busqueda = data.nombre.toLowerCase();

			if(busqueda.indexOf(texto) !== -1){
				resultados.innerHTML += `

					<div class="card mt-3 shadow bg-white rounded" id="card-estudios">
						<div class="card-body">
							<div class="row">

								<div class="col text-center">
									<h1 class="font-weight-lighter">
										${data.nombre}
									</h1>
									<a href="https://www.facebook.com/kanoklab/" class="btn bg-pink" target="_blank">Mas información</a>
								</div>

								<div class="col">
									<h5 class="text-justify font-weight-lighter">
										${data.desc}
									</h5>
								</div>

							</div>
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


});
