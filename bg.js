function bgCreateParticles() {
    const container = document.getElementById('bgParticles');
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'bg-particle';
        
      const moveX = Math.random() * 200 - 100 + 'px';
      const moveY = Math.random() * 200 - 100 + 'px';
        
        particle.style.setProperty('--moveX', moveX);
        particle.style.setProperty('--moveY', moveY);
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
        
        container.appendChild(particle);
    }
    }
    
  // Accent vonalak létrehozása
    function bgCreateAccents() {
    const container = document.querySelector('.bg-container');
    const accentCount = window.innerWidth < 768 ? 5 : 10;
    
    setInterval(() => {
        if (document.querySelectorAll('.bg-accent').length < accentCount) {
        const accent = document.createElement('div');
        accent.className = 'bg-accent';
        accent.style.left = Math.random() * 100 + '%';
        container.appendChild(accent);
        
        setTimeout(() => {
            accent.remove();
        }, 8000);
        }
    }, 1000);
    }
    
  // Reszponzív kezelés
function bgHandleResize() {
    const container = document.getElementById('bgParticles');
    container.innerHTML = '';
    bgCreateParticles();
    }
    
  // Inicializálás
    window.addEventListener('load', () => {
    bgCreateParticles();
    bgCreateAccents();
    });
    
    window.addEventListener('resize', bgHandleResize);