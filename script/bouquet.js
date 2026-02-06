// --- 1. Sélection des éléments ---
const fleurs = document.querySelectorAll('.fleur');
const zoneBouquet = document.getElementById('zone-bouquet');

let draggedItem = null; // L'objet qu'on tient
let offsetX = 0;
let offsetY = 0;

// --- 2. Gestion du Drag & Drop ---

// Quand on CLIQUE sur une fleur
fleurs.forEach(fleur => {
    fleur.addEventListener('mousedown', (e) => {
        draggedItem = fleur;
        // Calcul du décalage pour que la souris reste au même endroit sur l'objet
        offsetX = e.clientX - fleur.getBoundingClientRect().left;
        offsetY = e.clientY - fleur.getBoundingClientRect().top;
        fleur.style.zIndex = 100; // Passe devant tout le monde
    });
});

// Quand on BOUGE la souris
document.addEventListener('mousemove', (e) => {
    if (!draggedItem) return; // Si on ne tient rien, on ne fait rien

    // On déplace l'élément
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    draggedItem.style.left = `${x}px`;
    draggedItem.style.top = `${y}px`;
});

// Quand on LÂCHE la souris
document.addEventListener('mouseup', () => {
    if (!draggedItem) return;

    // Vérification : est-ce qu'on est dans la zone ?
    if (verifierCollision(draggedItem, zoneBouquet)) {
        draggedItem.dataset.placed = "true"; // Marqué comme "placé"
        zoneBouquet.classList.add('active'); // Effet visuel
        setTimeout(() => zoneBouquet.classList.remove('active'), 500);
    } else {
        draggedItem.dataset.placed = "false"; // Marqué comme "non placé"
    }

    draggedItem.style.zIndex = 10; // On remet le z-index normal
    draggedItem = null; // On oublie l'objet

    // Vérification finale
    verifierVictoire();
});

// --- 3. Fonctions Utilitaires ---

// Fonction mathématique pour détecter le chevauchement
function verifierCollision(objet, zone) {
    const rectObj = objet.getBoundingClientRect();
    const rectZone = zone.getBoundingClientRect();

    // On prend le centre de l'objet
    const centreX = rectObj.left + rectObj.width / 2;
    const centreY = rectObj.top + rectObj.height / 2;

    // Est-ce que ce centre est à l'intérieur de la zone ?
    return (
        centreX > rectZone.left &&
        centreX < rectZone.right &&
        centreY > rectZone.top &&
        centreY < rectZone.bottom
    );
}

// Fonction pour vérifier si tout est fini
function verifierVictoire() {
    // On compte les fleurs bien placées
    const fleursPlacees = document.querySelectorAll('.fleur[data-placed="true"]');
    
    // Si toutes les fleurs sont placées
    if (fleursPlacees.length === fleurs.length) {
        setTimeout(() => {
            window.location.href = "/html/bouquet-lettre.html"; 
        }, 1500);
    }
}
