// ✅ CORRECTION 1 : Bonne syntaxe du plugin
gsap.registerPlugin(ScrollTrigger);

// ✅ CORRECTION 2 : Syntaxe src correcte pour tes 103 images (000 à 102)
gsap.to("#img-sequence", {
    // GSAP va passer automatiquement de lettre-000.jpg à lettre-102.jpg
    src: ".../seq/lettre-[000:102].jpg",
    
    scrollTrigger: {
        trigger: ".section-animation",
        start: "top top",
        end: "bottom top",
        scrub: 1,           // Suit le scroll au pixel près
        pin: true,          // L'image reste fixée pendant l'animation
        anticipatePin: 1    // Optimisation pour éviter saccades
    }
});
