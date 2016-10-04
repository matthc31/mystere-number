$(document).ready(main);

// Fonction principale
function main(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	// Récupérer le contenu de mon input
	function clickValider(){
		var taper = $('input').val();



		// Stocker un nombre ENTIER généré "aléatoirement"
		var nbr = Math.round(Math.random() * 3);
		console.log(nbr)
		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			if(taper == nbr){
			// Afficher une alert Gagné
			alert("Gagné");	
		}

			// Sinon s'il est supérieur
			else if(taper>nbr){
				alert("c'est balo c'est trop grand!");	
			}
			// Afficher une alert Perdu, votre nombre est trop grand
			
			// Sinon s'il est inférieur
			else{
				alert("c'est balo c'est trop petit!");
			}
			// Afficher une alert Perdu, votre nombre est trop petit

		}

	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$("button").click(function(){
		clickValider()
	});
}

