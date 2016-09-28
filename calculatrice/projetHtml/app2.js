"use strict";
(function(){
	console.log("Bienvenue dans le fichier app.js");


	// Je teste que jQuery marche bien
	// Je récupère le texte de ma balise h1
	var valH1 = $("h1").text();
	console.log("Mon h1 est '" + valH1 + "'.");



	// Je vais tester la détection de click sur
	// le bouton 1 dont l'id est 'btn-1'
	/*
		Je ne vais rien inventer, il y a un exemple
		tout prêt sur
		http://api.jquery.com/click/
	*/
	$('#btn-1').click(function(){
		console.log('click sur bouton 1');
		console.log('click sur bouton 1');
		console.log('click sur bouton 1');
		console.log('click sur bouton 1');
		console.log('click sur bouton 1');
		
	});

	/*
		To Do :
		- détecter les clicks sur les 9 btn de chiffres
		- stocker les valeurs des chiffres après le click sur un btn
		- détecter les clicks sur une des 5 opérations : + - / *
		- effectuer l'opération sur les 2 chiffres stockés
		- afficher le résultat dans le html

	*/

	function add(a, b){
		
	}	

	function substract(a, b){
		
	}	

	function multiply(a, b){
		
	}	

	function divide(a, b){
		
	}	
})();