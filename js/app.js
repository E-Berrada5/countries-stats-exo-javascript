//Ajout d'une fonction qui sépare les chiffres par 3 pour une meilleure lisibilité
function lisibilite_nombre(nbr)
{
		var nombre = ''+nbr;
		var retour = '';
		var count=0;
		for(var i=nombre.length-1 ; i>=0 ; i--)
		{
			if(count!=0 && count % 3 == 0)
				retour = nombre[i]+' '+retour ;
			else
				retour = nombre[i]+retour ;
			count++;
		}
		return retour;
}





/*
for(let pays of countries ){
  if(pays.countryName.toLowerCase() === nom_pays.toLowerCase() ) {
      //console.log(pays)
      paysTrouvé = pays
  }}
if(paysTrouvé) {
  console.log( paysTrouvé)
} else {
  console.log("Aucun pays trouvé")
}



//EXERCICE 2 
//on parcours notre tableau pour voir si notre variable y est compris 
for(let pays of countries ){
  if(pays.countryName.toLowerCase() === nom_pays.toLowerCase() ) {
      //console.log(pays)
      paysTrouvé = pays
  }}

if(paysTrouvé) {
  console.log( 'la capital du pays est : ' + paysTrouvé.capital + ' La devise du pays est :  '  + paysTrouvé.countryCode + ' La population du pays est de : ' + paysTrouvé.population+" ' d'habitant")
} else {
  console.log("Aucun pays trouvé")
}



//EXERCICE 3
// je récupère juste une chaîne de caractères
let continent_nom =window.prompt("veuillez entrer une chaine de caractères : ")
// on crée une variable pour stocker le continent si il existe
let continent_trouvé = []
// on utilise une boucle pour parcourir le tableau
for (let countrie of countries){
//console.log(countrie)
// on utilise la structure de contrôle if pour définir les conditions d'affichage 
if (countrie.continentName.toLowerCase() === continent_nom.toLowerCase()){
  //console.log(countrie)
  continent_trouvé.push(countrie)
}
}

console.log(continent_trouvé)

 */
/*



//exerice 4 calculer la population total des pays pour un continent 
const data = "europe"
//on déclare un tableau pour afficher ses valeur si le continent existe
const europe = []
//on utilise une boucle pour parcourir les éléments dont la valeur de la propriété continentname
// est = à notre valeur entrer 
for (let a of countries){
  if (a.continentName.toLowerCase() === data.toLowerCase() ){
    // pour chaque valeur de continentName correspondant à data on l'insére dans le tableau 
    europe.push(a)
  }
}
// on déclare une variable totalpopulation qui va additionner toutes les propriétes population du tableau 
var totalpopulation = 0
for (let a of europe){
  totalpopulation = totalpopulation + parseInt(a.population)
  
}
console.log(  'il y a en ' + data +' '+ lisibilite_nombre(totalpopulation)   + ' habitants')
*/




//EXERCICES 5 



// on stocke toutes les informations de l'europe
const europe = "europe";
//on déclare un tableau pour stocker ses valeur si le continent existe
const continentEurope = [];
//on utilise une boucle pour parcourir les éléments dont la valeur de la propriété continentname
// est = à notre valeur entrer 
for (let a of countries){
  if (a.continentName.toLowerCase() === europe.toLowerCase() ){
    // pour chaque valeur de continentName correspondant à data on l'insére dans le tableau 
    continentEurope.push(a)
  }
}
// on déclare une variable totalpopulation qui va additionner toutes les propriétes population du tableau 
var totalpopulationeurope = 0
for (let a of continentEurope){
  totalpopulationeurope = totalpopulationeurope + parseInt(a.population)
}
console.log(  'il y a en ' + europe +' '+ lisibilite_nombre(totalpopulationeurope)   + ' habitants')






//on stocke toute les informations de l'afrique 
const africa = "africa";
 // on déclare un tableau africa pour stocker les valeurs continentname correspondant à africa
const continentAfrica = [];
//on utilise une boucle pour parcourir tout les éléments du tableau countries dont la propriétes  
//continentName est égale à Africa
for (let a of countries){
  if (a.continentName.toLowerCase() === africa.toLowerCase()){
    //dans chaque cas ou l'égalité est vérifier (renvoie true )
    //on stocke ajoute l'objet au tableau continentAfrica
    continentAfrica.push(a)
  }
}
//on déclare une variable totalpopulationafrica qui va additionner toutes les propriétes population du tableau
var totalpopulationafrica = 0 
for (let a of continentAfrica){
  totalpopulationafrica = totalpopulationafrica + parseInt(a.population)
}
console.log(  'il y a en ' + africa +' '+ lisibilite_nombre(totalpopulationafrica)   + ' habitants')






//on stocke toutes les informations sur l'océanie
// on initialise une variable oceania et lui assigne la valeur oceania que l'on va comparer à la propriéte
 //continentName des objets  notre tableau countries
const oceania= "oceania";
// on déclare un tableau oceania dans lequel nous allons plus tard stocker les objets dont la valeur de la propriétes
//continentName est = à oceania
const continentOceania = [];
for (a of countries){
  //on ajoute la fonction toLowerCase pour passer tout nos caractères en minuscules avant la comparaison de manière
  // à ne pas être sensible à la casse
  if (a.continentName.toLowerCase() === oceania.toLocaleLowerCase()){
    //dans le cas ou l'égalité est vérifier on ajoute l'objet au tableau 
    continentOceania.push(a)
  }
}
// on déclare et assigne une variable totalpopulation qui par la suite va contenir l'addition de toute les propriétés
//population des objets de notre tableau
let totalpopulationOceania = 0;
// on utilise une boucle for pour additionner à chaque itération de continentOceania la propriétes population
for ( let a of continentOceania){
  totalpopulationOceania = totalpopulationOceania + parseInt(a.population)
}
// on affiche donc la population totale de l'océanie 
console.log(  'il y a en ' + oceania +' '+ lisibilite_nombre(totalpopulationOceania)   + ' habitants')





// on stocke toutes les informations sur l'asie 
// on initialise une variable asie  et lui assigne la valeur asie  que l'on va comparer à la propriéte
 //continentName des objets  notre tableau countries
 const asia = "asia";
 // on déclare un tableau asie dans lequel nous allons plus tard stocker les objets dont la valeur de la propriétes
//continentName est = à asie
const continentAsia = [];
for (a of countries){
  //on ajoute la fonction toLowerCase pour passer tout nos caractères en minuscules avant la comparaison de manière
  // à ne pas être sensible à la casse
  if (a.continentName.toLowerCase() === asia.toLocaleLowerCase()){
    //dans le cas ou l'égalité est vérifier on ajoute l'objet au tableau 
    continentAsia.push(a)
  }
}
//ensuite l'on déclare une variable qui va stocker l'addition de toutes les valeurs de la propriétes population des 
//objet de notre tableau continentAsia
let totalpopulationAsia = 0;
for (a of continentAsia){
  totalpopulationAsia = totalpopulationAsia +parseInt(a.population)
}
// on affiche donc la population totale de l'océanie 
console.log(  'il y a en ' + asia +' '+ lisibilite_nombre(totalpopulationAsia)   + ' habitants')




// on stocke toutes les informations sur l'antarctique
// on initialise une variable antarctica  et lui assigne la valeur antarctica que l'on va comparer à la propriéte
 //continentName des objets  notre tableau countries
 const antarctica = "antarctica"
 // on déclare un tableau continent antarctica qui va stocker tout les objets dont la propriétés continentName
 //est = à Antarctica 
 const continentAntarctica = [];
 // on utilise une boucle pour mettre tout les objets dont la propriétes continentName est égale à Antarctica
 for (a of countries){
  if (a.continentName.toLowerCase() === antarctica.toLowerCase()){
    continentAntarctica.push(a)
  }
 }
 //on déclare une variable totalpopulatin qui va additionner toutes les population du tableau
 let totalpopulationantarctica = 0;
 //on utilise une boucle pour les additionner
 for (a of continentAntarctica){
  totalpopulationantarctica = totalpopulationantarctica + parseInt(a.population)
 }
 //puis on affiche le tout 
 console.log(  'il y a en ' + antarctica +' '+ lisibilite_nombre(totalpopulationantarctica)   + ' habitants')




 //on stocke les informations north_america
 const northamerica = "North America";
 // on utilise un tableau qui va stocker toutes les propriétes continentName dont la valeur est égale à North_america
 const continentNorthamerica = [];

 for (a of countries){
  if(a.continentName.toLowerCase() === northamerica.toLowerCase()){
    continentNorthamerica.push(a)
  }
 }
 // on déclare une variable qui va stocker toutes les propriétes population 
 let totalpopulationNorthamerica = 0;

 for (a of continentNorthamerica){
  totalpopulationNorthamerica = totalpopulationNorthamerica + parseInt(a.population)
 }
//puis on affiche le tout 
console.log(  'il y a en ' + northamerica +' '+ lisibilite_nombre(totalpopulationNorthamerica)   + ' habitants')




// on stocke les informations sud americaine 
 //on stocke les informations north_america
 const southamerica = "south America";
 // on utilise un tableau qui va stocker toutes les propriétes continentName dont la valeur est égale à North_america
 const continentsouthamerica = [];

 for (a of countries){
  if(a.continentName.toLowerCase() === southamerica.toLowerCase()){
    continentsouthamerica.push(a)
  }
 }
 // on déclare une variable qui va stocker toutes les propriétes population 
 let totalpopulationsouthamerica = 0;

 for (a of continentsouthamerica){
  totalpopulationsouthamerica = totalpopulationsouthamerica + parseInt(a.population)
 }
//puis on affiche le tout 
console.log(  'il y a en ' + southamerica +' '+ lisibilite_nombre(totalpopulationsouthamerica)   + ' habitants')

const worldpopulation = [totalpopulationeurope, totalpopulationAsia, totalpopulationNorthamerica,
totalpopulationOceania, totalpopulationsouthamerica, totalpopulationOceania, totalpopulationafrica]
console.log( "le continent le plus peuplé est donc l'asie avec " +lisibilite_nombre(Math.max(...worldpopulation)) + " habitants .")















