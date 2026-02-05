let btnNon = document.getElementById('btn-non');

// Fonction pour générer un nombre aléatoire entre min et max
function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

btnNon.addEventListener('mouseover', () => {
    // Largeur et hauteur de la fenêtre disponible
    const maxX = window.innerWidth - btnNon.offsetWidth;
    const maxY = window.innerHeight - btnNon.offsetHeight;

    // Calcul des nouvelles positions
    const randomX = getRandomPosition(maxX);
    const randomY = getRandomPosition(maxY);

    // Application des nouvelles coordonnées
    // On utilise 'fixed' ici pour qu'il bouge par rapport à tout l'écran, pas juste son parent
    btnNon.style.position = 'fixed';
    btnNon.style.left = randomX + 'px';
    btnNon.style.top = randomY + 'px';
});

// 1. On sélectionne l'élément de chargement dans le HTML
const chargement = document.querySelector('.chargement');

// 2. On attend que la page soit chargée (optionnel, mais conseillé)
window.addEventListener('load', () => {

    // 3. Le fameux setTimeout pour créer le délai
    setTimeout(() => {
        
        // On ajoute la classe CSS qui va déclencher la disparition
        chargement.classList.add('disparition');

    }, 5000); // 3000 millisecondes = 3 secondes d'attente

});