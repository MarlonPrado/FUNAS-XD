// Contador simple de 6 horas
document.addEventListener('DOMContentLoaded', function() {
    // Establecer fecha objetivo (6 horas desde ahora)
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 6);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const target = targetDate.getTime();
        const difference = target - now;
        
        if (difference > 0) {
            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            document.querySelector('.countdown h3').innerHTML = '✅ ¡EL CHECKER YA ESTÁ ACTIVO!';
            document.querySelector('.countdown h3').style.color = '#44ff44';
        }
    }
    
    // Actualizar cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Efectos de partículas para elementos FREE
    createParticleEffects();
    
    // Crear partículas dinámicas adicionales
    createDynamicParticles();
});

// Crear partículas dinámicas adicionales
function createDynamicParticles() {
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';
        
        const symbols = ['✨', '💎', '⭐', '🌟', '💫', '🔥', '⚡'];
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '5';
        particle.style.animation = 'floatUpDynamic ' + (Math.random() * 3 + 4) + 's linear forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 7000);
    }, 800);
}

// Crear efectos de partículas
function createParticleEffects() {
    const freeElements = document.querySelectorAll('.free');
    
    freeElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            createParticles(element);
        });
    });
}

function createParticles(element) {
    const rect = element.getBoundingClientRect();
    const particles = ['💎', '✨', '⭐', '🌟', '💫'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            particle.style.position = 'fixed';
            particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.fontSize = '20px';
            particle.style.animation = 'floatUp 2s ease-out forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }, i * 100);
    }
}

// Agregar CSS para animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
    
    @keyframes floatUpDynamic {
        0% {
            opacity: 0;
            transform: translateY(0) rotate(0deg);
        }
        10% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) rotate(360deg);
        }
    }
    
    .dynamic-particle {
        user-select: none;
        opacity: 0.7;
    }
`;
document.head.appendChild(style);
