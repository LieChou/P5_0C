let citation = document.querySelector('.citation');
let random = document.querySelector('.random');

var quotes = {

"famousWomen": ["l\'amour c\'est l'\idéal de l\'égalité", 
"je voudrais être Maria", 
"il y a La Callas qui exige que je me porte avec sa dignité", 
"une différence de goût", 
"en matière de plaisanteries gâte l'amitié", 
"la connaissance qu'a un seul homme de la faute de cent autres", 
"ne lui sert à rien", 
"quand on aime la vie on aime le passé", 
"c'est le présent tel qu'il a survécu dans la mémoire humaine", 
"ce dont nous avons besoin est d'aimer", 
"sans nous épuiser" ],

"famousMen": ["la vie c'est comme une bicyclette", 
"il faut avancer pour ne pas perdre l'équilibre", 
"un seul être vous manque", 
"et tout est dépeuplé", 
"dans la vie on ne fait pas ce que l'on veut", 
"on est responsable de ce que l'on est", 
"le bonheur est parfois caché", 
"dans l'inconnu", 
"le monde ne sera pas détruit par ceux qui font le mal", 
"par ceux qui les regardent sans rien faire",
"il ne faut pas",
"vendre la peau de l'ours",
"avant de l'avoir tué",
"le monde du passe-temps",
"de la montre qui tourne"]

}

//Génération d'un morceau de citation random
let viewedQuotes=[];
let splicedQuote =[]
let randomQuote = Math.floor(Math.random()*quotes.length);

function getRandomQuote(quotes){

let splicedQuote = quotes.splice(randomQuote,1)[0];
    
    if (quotes.length !== 0){
        viewedQuotes.push(splicedQuote);  
    } else {
        quotes.push(...viewedQuotes);
        viewedQuotes =[];
    } 
    return splicedQuote; 
}

//Génération d'une citation avec les 3 morceaux
function generateQuote(quotes){
    
    let part1 = getRandomQuote(quotes);
    let part2 = getRandomQuote(quotes);
    let part3 = getRandomQuote(quotes);
           
    let newCitation = part1.charAt(0).toUpperCase() + part1.slice(1) + ": " + part2 + ", " + part3 + "."; 
        
    citation.textContent = newCitation;
    citation.style.visibility = 'visible';
    console.log(newCitation);

    }

random.addEventListener('click', ()=> {

//Récupération des variables
    //récupération du nombre de citations demandé dans la variable valeur
    let customNumber = document.querySelector('input[name=numberChoice]:checked')
    let valeur= customNumber.value;
    console.log(valeur);

    //récupération du type de citation demandé dans la variable quotes
    let customQuotes = document.querySelector('input[name=textChoice]:checked');
    let quoteType = customQuotes.value;
    console.log(quoteType);


//Application en fonction du type de citation et du nombre séléctionnés
    let n=valeur;
    let i=0;
    while (i<n){
        if(quoteType==='famousWomen'){
            generateQuote(quotes.famousWomen);
        }
        else {
            generateQuote(quotes.famousMen);
        }
        i++;
        
    }

});





