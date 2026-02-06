// 1. On sélectionne l'élément de chargement dans le HTML
const chargement = document.querySelector('.chargement');

// 2. On attend que la page soit chargée (optionnel, mais conseillé)
window.addEventListener('load', () => {

    // 3. Le fameux setTimeout pour créer le délai
    setTimeout(() => {
        
        // On ajoute la classe CSS qui va déclencher la disparition
        chargement.classList.add('disparition');

    }, 3000); // 1000 millisecondes = 1 secondes

});