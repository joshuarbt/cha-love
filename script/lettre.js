gsap.registerPlugin(ScrollTrigger);

// --- CONFIGURATION ---
const nbImages = 102;        // Ton nombre total d'images (de 0 à 102)
const pixelsParImage = 30;   // Vitesse : 30px de scroll pour changer 1 image
                             // Plus ce chiffre est petit, plus ça va vite.
                             // Plus il est grand, plus il faut scroller beaucoup.

// Calcul de la hauteur totale exacte
const hauteurTotale = nbImages * pixelsParImage;

const sequence = { frame: 0 };

gsap.to(sequence, {
    frame: nbImages,
    snap: "frame", // Assure qu'on tombe pile sur un chiffre rond (image 1, image 2...)
    
    scrollTrigger: {
        trigger: ".section-animation",
        start: "top top", // Commence quand le haut de l'image est en haut de l'écran
        
        // C'EST ICI LA MAGIE :
        // La fin est calculée dynamiquement : "+=" veut dire "ajoute X pixels de scroll"
        end: () => "+=" + hauteurTotale, 
        
        scrub: 0.5, // Un peu de fluidité (0 = instantané, 1 = un peu mou)
        pin: true,  // Bloque l'image pendant le scroll
    },
    
    onUpdate: () => {
        const img = document.getElementById("img-sequence");
        const numeroFormate = sequence.frame.toString().padStart(3, '0');
        
        // Vérifie toujours ton chemin ici ("./seq/" ou "./src/seq/")
        img.src = `./seq-txt/lettre-${numeroFormate}.jpg`; 
    }
});
