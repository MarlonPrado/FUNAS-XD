// Contador simple de 24 horas
document.addEventListener('DOMContentLoaded', function() {
    // Establecer fecha objetivo (24 horas desde ahora)
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24);
    
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
});
