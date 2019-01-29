let citation = document.querySelector('.citation');
let random = document.querySelector('.random');

random.addEventListener('click', ()=> {

    var quotes = {
        "famousWomen": ["je ne suis pas de ceux et celles", "qui redoutent l'avenir", 
                        "une différence de goût", "en matière de plaisanteries gâte l'amitié", "la connaissance qu'a un seul homme de la faute de cent autres", 
                        "ne lui sert à rien", "quand on aime la vie on aime le passé", "c'est le présent tel qu'il a survécu dans la mémoire humaine", 
                        "ce dont nous avons besoin est d'aimer", "sans nous épuiser","le refuge le plus sûr","est le coeur d'une maman",
                        "je pense qu'il faut respecter les hommes", "pas les idées", "le sentiment de ne pas être aimé", "est la plus grande des pauvretés", 
                        "le bonheur c'est lorsque vos actes", "sont en accord avec vos paroles", "les seuls beaux yeux", "sont ceux qui vous regardent", 
                        "avec tendresse", "la vie est un défi à relever", "un bonheur à mériter", "une aventure à tenter",
                        "on est si petit", "le monde est si grand", "que serait la vie", "sans notre maman", "il y a deux genres de personnes", "ceux qui font le travail",
                        "ceux qui en prennent le crédit", "tentez d\'être du premier groupe", "il y a moins de compétition", "dans toutes les larmes", "s'attarde un espoir"],
        
        "famousMen": ["la vie c'est comme une bicyclette", "il faut avancer pour ne pas perdre l'équilibre", "un seul être vous manque", "et tout est dépeuplé", 
                    "dans la vie on ne fait pas ce que l'on veut", "on est responsable de ce que l'on est", "le bonheur est parfois caché", "dans l'inconnu", 
                    "le monde ne sera pas détruit par ceux qui font le mal", "par ceux qui les regardent sans rien faire", "pour critiquer les gens il faut les connaitre",
                    "on passe une moitié de sa vie à attendre ceux qu'on aimera", "l'autre moitié à quitter ceux que l'on aime", "pour les connaitre, il faut les aimer",
                    "vendre la peau de l'ours", "avant de l'avoir tué", "exige beaucoup de toi même", "attends peu des autres", "ainsi beaucoup d'ennuis te seront épargnés",
                    "la vie est un mystère qu'il faut vivre", "non un problème à résoudre", "agis avec gentillesse", "mais n'attends pas de la reconnaissance",
                    "on ne peut battre son adversaire que par l'amour et non la haine", "la haine est la forme la plus subtile de la violence", 
                    "la haine blesse celui qui hait, et non le haï", "la non-violence est infiniment supérieure à la violence", "le pardon est plus viril que le châtiment",
                    "le pardon est la parure du soldat", "la haine tue toujours", "l'amour ne meurt jamais", "il n\'y a pas d\'au revoir pour nous", "peu importe d'où tu es",
                    "tu seras toujours dans mon coeur"]
        }

    let viewedQuotes=[];
    let selectedQuotes=[];

    //Récupération des variables:
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
            selectedQuotes = quotes.famousWomen;
            generateQuote();
            } else {
            selectedQuotes = quotes.famousMen;
            generateQuote();
        }
            i++;
        }

    //Génération d'une citation avec les 3 morceaux
    async function generateQuote(){
        let part1 = await getRandomQuote()
        let part2 = await getRandomQuote()
        let part3 = await getRandomQuote()
        let newCitation = part1.charAt(0).toUpperCase() + part1.slice(1) + ": " + part2 + ", " + part3 + "." ;
        citation.innerHTML += newCitation + '<br/>';
        console.log(newCitation);
    }    
    
    //Génération d'un morceau de citation random
    async function getRandomQuote(){
        if (selectedQuotes.length === 0){
            selectedQuotes = await resetTable(selectedQuotes,viewedQuotes);
            viewedQuotes=[];
        }
        let randomQuote = Math.floor(Math.random()*selectedQuotes.length);
        let splicedQuote = selectedQuotes.splice(randomQuote,1)[0];
        viewedQuotes.push(splicedQuote);
        console.log(selectedQuotes);
        console.log(viewedQuotes);
        return splicedQuote;
    };

    function resetTable(selectedQuotes,viewedQuotes){
        selectedQuotes = viewedQuotes;
        return selectedQuotes;
    }

    //Pop-up de fin pour recommencer ou sortir du programme
    setTimeout(() => {
        let keepGoing = prompt('Entrez 1 pour continuer, 0 pour retourner sur la page d\'accueil ')
        if (keepGoing === '0'){
            window.location.href = "index.html";
        } else if(keepGoing ==='1'){
            window.location.href = window.location.protocol + "//" + window.location.hostname + ":8888" + window.location.pathname;
        } else{
            window.alert('Saisie invalide, merci de saisir soit 0 pour sortir soit 1 pour rester sur cette page');
            window.location.href = window.location.protocol + "//" + window.location.hostname + ":8888" + window.location.pathname;
        }
    },1000);   

});