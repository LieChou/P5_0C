var citation = document.querySelector('.citation');
var random = document.querySelector('.random');

//function randomValueFromArray(array){return array[Math.floor(Math.random()*array.length)];}

var quotes =["l\'amour c\'est l'\idéal de l\'égalité", 
"je voudrais être Maria", 
"il y a La Callas qui exige que je me porte avec sa dignité", 
"une différence de goût", 
"en matière de plaisanteries gâte l'amitié", 
"la connaissance qu'a un seul homme de la faute de cent autres", 
"ne lui sert à rien", 
"quand on aime la vie on aime le passé", 
"c'est le présent tel qu'il a survécu dans la mémoire humaine", 
"ce dont nous avons besoin est d'aimer", 
"sans nous épuiser"];

console.log(quotes.length);

//fonction anonyme 
random.addEventListener('click', ()=> {
    function getRandomQuote(){
        //splice the object from the quotes array and store it into a new variable "splicedQuote"
        var randomQuote = Math.floor(Math.random()*quotes.length);
        var splicedQuote = quotes.splice(randomQuote,1)[0];
    
        //push the spliced object into the "viewedQuotes" array
        viewedQuotes=[];
        viewedQuotes.push(splicedQuote);
    
        //"if" statement to check if first array is now empty = all quotes have been used
        // if true then change it back to original state and set viewQuotes to an empty array
        if (quotes.length == 0){
            quotes = viewedQuotes;
            viewedQuotes=[];
        }
        return splicedQuote;
        }
        
    
    function generate(quotes){
        for (i=0; i<3; i++){
            generate += quotes.selectedRandomQuote[i];
        }
        return generate;
    }

    var selectedRandomQuote = getRandomQuote;
    citation.textContent = selectedRandomQuote;
    citation.style.visibility = 'visible';
    console.log(selectedRandomQuote);
});
    
    //faire une boucle for et appeler tableau
     
    
   //if ((part1 !== part2 ) && (part2 !==part3) && (part3 !== part1)){
    //var newCitation = part1.charAt(0).toUpperCase() + part1.slice(1) + ": " + part2 + ", " + part3 + ".";
    //console.log(newCitation);
   //}
   //else {
    //result();
   //}

