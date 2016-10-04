$(document).ready(main);

// Fonction principale
function main(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		var taper = $('input').val();

		// Récupérer le contenu de mon input

		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			if(taper === 0){
			// Afficher une alert Gagné
			alert("Gagné");
		}

			
			// Sinon,
			// Afficher une alert Perdu

			else {
				alert("Perdu!");
			}
	}// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus

	$("button").click(function(){
		clickValider()
	});
}


