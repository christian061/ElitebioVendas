document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroCopy = document.querySelector('.hero-copy');
    const heroVisual = document.querySelector('.hero-visual');

    // Efeito de paralaxe suave
    function handleParallax(e) {
        if (!heroContent) return;
        
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Movimento mais suave
        const xPos = (clientX / innerWidth - 0.5) * 20; // Valor reduzido para movimento mais sutil
        const yPos = (clientY / innerHeight - 0.5) * 10;
        
        // Aplicar transformação apenas ao conteúdo principal
        heroContent.style.transform = `translate3d(0, 0, 0) rotateY(${xPos * 0.5}deg) rotateX(${-yPos * 0.5}deg)`;
        
        // Efeito de profundidade sutil
        if (heroCopy) {
            heroCopy.style.transform = `translate3d(${xPos * 0.5}px, ${yPos * 0.5}px, 20px)`;
        }
        
        if (heroVisual) {
            heroVisual.style.transform = `translate3d(${-xPos * 0.5}px, ${yPos * 0.5}px, 10px)`;
        }
    }
    
    // Adicionar event listeners
    if (window.innerWidth > 768) { // Apenas em desktop
        document.addEventListener('mousemove', handleParallax);
        
        // Resetar quando o mouse sair
        hero.addEventListener('mouseleave', function() {
            if (heroContent) heroContent.style.transform = 'translate3d(0, 0, 0)';
            if (heroCopy) heroCopy.style.transform = 'translate3d(0, 0, 0)';
            if (heroVisual) heroVisual.style.transform = 'translate3d(0, 0, 0)';
        });
    }
});
