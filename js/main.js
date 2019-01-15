let citation = document.querySelector('.citation');
let random = document.querySelector('.random');

random.addEventListener('click', ()=> {

    var quotes = ["l\'amour c\'est l'\idéal de l\'égalité", 
    "je voudrais être Maria", 
    "il y a La Callas qui exige que je me porte avec sa dignité", 
    "une différence de goût", 
    "en matière de plaisanteries gâte l'amitié", 
    "la connaissance qu'a un seul homme de la faute de cent autres", 
    "ne lui sert à rien", 
    "quand on aime la vie on aime le passé", 
    "c'est le présent tel qu'il a survécu dans la mémoire humaine", 
    "ce dont nous avons besoin est d'aimer", 
    "sans nous épuiser",
    "le refuge le plus sur",
    "est le coeur d'une maman",
    "tout vient à point",
    "à qui sait attendre",
    "la vie c'est comme une bicyclette", 
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

    let viewedQuotes=[];

    function getRandomQuote(){
        //splice the object from the quotes array and store it into a new variable "splicedQuote"
        let randomQuote = Math.floor(Math.random()*quotes.length);
        let splicedQuote = quotes.splice(randomQuote,1)[0];
        viewedQuotes.push(splicedQuote); 
        if (quotes.length === 0){
            quotes = viewedQuotes;
            viewedQuotes=[];
        }
        return splicedQuote;
        }
        
        function generateQuote(quotes){
            let part1 = getRandomQuote(quotes);
            let part2 = getRandomQuote(quotes);
            let part3 = getRandomQuote(quotes);
            let newCitation = part1.charAt(0).toUpperCase() + part1.slice(1) + ": " + part2 + ", " + part3 + "."; 
            citation.textContent = newCitation;
            citation.style.visibility = 'visible';
            console.log(newCitation);
            }  

        generateQuote(quotes);
        
});
    
