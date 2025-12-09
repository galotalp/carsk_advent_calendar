/**
 * Animation utilities for CARSK Advent Calendar
 * Handles snowfall, stars, and other visual effects
 */

class Animations {
    constructor() {
        this.snowfallContainer = document.getElementById('snowfall');
        this.init();
    }

    init() {
        this.createSnowfall();
        this.createStars();
    }

    createSnowfall() {
        const snowflakes = ['❄', '❅', '❆', '•'];
        const numSnowflakes = 50;

        for (let i = 0; i < numSnowflakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.fontSize = `${0.5 + Math.random() * 1}em`;
            snowflake.style.opacity = `${0.3 + Math.random() * 0.7}`;
            snowflake.style.animationDuration = `${5 + Math.random() * 10}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;

            this.snowfallContainer.appendChild(snowflake);
        }
    }

    createStars() {
        const mapSection = document.getElementById('map-section');
        if (!mapSection) return;

        const numStars = 30;

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.setProperty('--duration', `${1 + Math.random() * 3}s`);
            star.style.setProperty('--delay', `${Math.random() * 2}s`);

            mapSection.appendChild(star);
        }
    }

    // Create celebration effect
    celebrate() {
        this.createBurst();
    }

    createBurst() {
        const burst = document.createElement('div');
        burst.className = 'celebration-burst';
        burst.style.position = 'fixed';
        burst.style.top = '50%';
        burst.style.left = '50%';
        burst.style.transform = 'translate(-50%, -50%)';
        burst.style.pointerEvents = 'none';
        burst.style.zIndex = '9999';

        document.body.appendChild(burst);

        // Create burst particles
        const colors = ['#e74c3c', '#27ae60', '#f1c40f', '#3498db', '#9b59b6'];
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.borderRadius = '50%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            const angle = (i / 30) * Math.PI * 2;
            const distance = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            particle.style.animation = `particle-burst 1s ease-out forwards`;
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);

            burst.appendChild(particle);
        }

        setTimeout(() => burst.remove(), 1500);
    }
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.AnimationsInstance = new Animations();
});
