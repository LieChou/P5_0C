let citation = document.querySelector('.citation');
let random = document.querySelector('.random');

var quotes = [

["l\'amour c\'est l'\idéal de l\'égalité", 
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

["la vie c'est comme une bicyclette", 
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
"de la montre qui tourne",
"couper les cheveux en quatre"]

]

random.addEventListener('click', ()=> {
console.log(quotes);
//Récupération des variables
    //récupération du nombre de citations demandé dans la variable valeur
    let customNumber = document.querySelector('input[name=numberChoice]:checked')
    let valeur= customNumber.value;
    //console.log(valeur);

    //récupération du type de citation demandé dans la variable quotes
    let customQuotes = document.querySelector('input[name=textChoice]:checked');
    let quoteType = customQuotes.value;
    //console.log(quoteType);
    
    let viewedQuotes=[];
//Génération d'un morceau de citation random
    function getRandomQuote(quotes){
        let randomQuote = Math.floor(Math.random()*quotes.length);
        let splicedQuote = quotes.splice(randomQuote,1)[0];
    
        viewedQuotes.push(splicedQuote);
        
        if (quotes.length === 0){
            quotes = viewedQuotes.splice(0,viewedQuotes.length);
            console.log(viewedQuotes);
            viewedQuotes=[];
            console.log(quotes);
            
        } 
        
        //boucler sur nouveau tableau et pour chaque entrée faire un push dans quotes
        
        return splicedQuote;   
        }

    //splice the object from the quotes array and store it into a new variable "splicedQuote"
        //let randomQuote = Math.floor(Math.random()*quotes.length);
        //let splicedQuote = quotes.splice(randomQuote,1);
    
    //push the spliced object into the "viewedQuotes" array
        //let viewedQuotes = [];
        //viewedQuotes.push(splicedQuote);
    
    //"if" statement to check if first array is now empty = all quotes have been used
    // if true then change it back to original state and set viewQuotes to an empty array
        //if (quotes.length == 0){
            //quotes = viewedQuotes.splice(0,viewedQuotes.length);
        //viewedQuotes=[];
        //let randomQuote = Math.floor(Math.random()*quotes.length);
        //let splicedQuote = quotes.splice(randomQuote,1);
        //viewedQuotes.push(splicedQuote);
        //}

    //return splicedQuote;    
    
    //}
    
    //choix du sous-tableau dans le tableau "quotes"
    if(quoteType==='famousWomen'){
        getRandomQuote(quotes[0]);
    } else {
        getRandomQuote(quotes[1]);
    }

//Génération d'une citation avec les 3 morceaux

    //function generateQuote(){
        
        //let selectedRandomQuote = getRandomQuote(quotes);
        //let HTML = "<p class='quote'>" + selectedRandomQuote.quote + "</p>";
        //if (!selectedRandomQuote.citation){} else {
            //HTML += '<p>' + '<span class="citation">' + selectedRandomQuote.citation + '</span>' + '</p>';
        //}
        //document.getElementById('citation').innerHTML = HTML;
        //let newCitation = getRandomQuote(quotes) + " : " + getRandomQuote(quotes) + ", " + getRandomQuote(quotes) + ".";
        //citation.textContent = newCitation,
        //citation.style.visibility = 'visible';
        //console.log(newCitation);
    //}

    function generateQuote(quotes){
    
    let part1 = getRandomQuote(quotes);
    let part2 = getRandomQuote(quotes);
    let part3 = getRandomQuote(quotes);
       
    let newCitation = part1.charAt(0).toUpperCase() + part1.slice(1) + ": " + part2 + ", " + part3 + "."; //!//problème de Majuscule en début de phrase
    
    citation.textContent = newCitation;
    citation.style.visibility = 'visible';
    console.log(newCitation);
        
    }

//Application en fonction du type et du nombre séléctionnés
    let n=valeur;
    let i=0;
    while (i<n){
        if(quoteType==='famousWomen'){
            generateQuote(quotes[0]);
        }
        else {
            generateQuote(quotes[1]);
        }
        i++;

    }

});



