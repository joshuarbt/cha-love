// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// L'animation magique en 4 lignes !
gsap.to("#img-sequence", {
    // GSAP va changer la src automatiquement de 001 à 100
    src: "images/image-[001:100].jpg",
    
    scrollTrigger: {
        trigger: ".section-animation",
        start: "top top",
        end: "bottom top",
        scrub: 1, // L'animation suit le scroll au pixel près
        pin: true, // L'image reste fixée pendant l'animation
        anticipatePin: 1
    }
});
