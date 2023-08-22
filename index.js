const citations = ["La vie c'est des étapes... La plus douce c'est l'amour... La plus dure c'est la séparation... La plus pénible c'est les adieux... La plus belle c'est les retrouvailles."];
const affirmations = ["Le bonheur est mon droit imprescriptible. J’accepte que le bonheur devienne le cœur de mon existence"];
const conseils = ["Ne cachez pas vos compétences: Être timide est l’une des raisons pour lesquelles une compétence est généralement oubliée dans un coin. Si vous voulez améliorer vos compétences, vous devez sortir de votre placard et les utiliser où et quand vous en avez besoin. Vous devez vous habituer à les utiliser avec des personnes afin qu’elles soient bénéfiques pour vous-même et pour les autres."];
//Fonction pour générer un message aléatoire
function genererMessage() {
    // Sélectionné un élément aléatoire de chaque tableau
    const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
    const affirmationAleatoire = affirmations[Math.floor(Math.random() * affirmations.length)];
    const conseilAleatoire = conseils[Math.floor(Math.random() * conseils.length)];
    // Combine les éléments sélectionnés pour créer un nouveau message d'inspiration
    const message = `${citationAleatoire} ${affirmationAleatoire} ${conseilAleatoire}`;
    // Affiche le message dans la console
    console.log(message);
  }
  // Appelle la fonction pour générer un nouveau message d'inspiration à chaque fois que le programme est exécuté
  genererMessage();