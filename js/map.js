/**
 * World Map Component for CARSK Advent Calendar
 * Uses Leaflet.js for accurate geographic representation
 * Features Santa (Dr. Chadban) flying between centers
 *
 * Map is FIXED (no zoom/pan) to ensure Santa animation works correctly
 */

class WorldMap {
    constructor() {
        this.mapContainer = document.getElementById('leaflet-map');
        this.santaOverlay = document.getElementById('santa-overlay');
        this.santa = document.getElementById('santa');
        this.centers = window.CARSK_DATA.centers;
        this.markers = {};
        this.visitedCenters = new Set();
        this.map = null;
        this.isAnimating = false;
        this.fixedZoom = 2;  // Fixed zoom level
        this.continuousAnimation = true;  // Enable continuous animation
        this.currentCenterIndex = 0;  // Track which center Santa is visiting

        this.init();
    }

    init() {
        this.initLeafletMap();
        this.addCenterMarkers();
        this.initSanta();

        // Start continuous Santa animation after a short delay
        setTimeout(() => {
            this.startContinuousAnimation();
        }, 1500);
    }

    initLeafletMap() {
        // Fixed center point between North America and Europe
        // This ensures consistent view regardless of window size
        const fixedCenter = [42, -30];  // Atlantic Ocean, showing NA and Europe
        const fixedZoom = 2.5;  // Zoom level that shows all centers nicely

        // Create map with ALL interactions disabled for stable Santa animation
        this.map = L.map('leaflet-map', {
            center: fixedCenter,
            zoom: fixedZoom,
            minZoom: fixedZoom,  // Lock zoom level
            maxZoom: fixedZoom,  // Lock zoom level
            zoomControl: false,        // Hide zoom controls
            dragging: false,           // Disable dragging
            touchZoom: false,          // Disable touch zoom
            scrollWheelZoom: false,    // Disable scroll zoom
            doubleClickZoom: false,    // Disable double-click zoom
            boxZoom: false,            // Disable box zoom
            keyboard: false,           // Disable keyboard navigation
            attributionControl: true
        });

        // Use a dark/festive tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(this.map);

        // Store the fixed zoom for reference
        this.fixedZoom = fixedZoom;
    }

    addCenterMarkers() {
        this.centers.forEach(center => {
            // Create custom icon
            const icon = L.divIcon({
                className: 'center-marker-icon',
                html: `<div class="custom-marker" data-center-id="${center.id}"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

            // Create marker
            const marker = L.marker([center.coordinates.lat, center.coordinates.lng], {
                icon: icon,
                interactive: true  // Allow hover/click for popups
            }).addTo(this.map);

            // Create popup content
            const popupContent = `
                <div class="popup-title">${center.name}</div>
                <div class="popup-location">${center.city}, ${center.country}</div>
            `;

            marker.bindPopup(popupContent);

            // Store reference
            this.markers[center.id] = marker;
        });
    }

    markCenterVisited(centerId) {
        this.visitedCenters.add(centerId);
        const marker = this.markers[centerId];
        if (marker) {
            const el = marker.getElement();
            if (el) {
                const customMarker = el.querySelector('.custom-marker');
                if (customMarker) {
                    customMarker.classList.add('visited');
                }
            }
        }
    }

    initSanta() {
        // Santa starts visible and idle
        this.santa.classList.add('idle');
        this.santa.classList.remove('hidden');

        // Position Santa at a nice starting point on the map
        this.positionSantaAtStart();
    }

    positionSantaAtStart() {
        // Position Santa in the upper left area of the map overlay
        this.santaX = 100;
        this.santaY = 80;
        this.santa.style.left = `${this.santaX}px`;
        this.santa.style.top = `${this.santaY}px`;
        this.santa.style.transform = 'translate(-50%, -100%)';
    }

    // Get pixel position of a center on the map (stable since map doesn't move)
    getCenterPixelPosition(center) {
        const latLng = L.latLng(center.coordinates.lat, center.coordinates.lng);
        const point = this.map.latLngToContainerPoint(latLng);
        return { x: point.x, y: point.y };
    }

    // Animate Santa flying to a specific center
    async flySantaToCenter(centerId, duration = 2500) {
        const center = this.centers.find(c => c.id === centerId);
        if (!center) return;

        // Get the EXACT pixel position of the center marker
        const targetPos = this.getCenterPixelPosition(center);

        // Santa will be positioned so his bottom-center is directly above the marker
        // We set left/top to the marker position, then use CSS transform to offset
        const targetX = targetPos.x;
        const targetY = targetPos.y;

        this.santa.classList.remove('idle');
        this.santa.classList.add('flying');

        const startX = this.santaX || 100;
        const startY = this.santaY || 50;

        // Determine if Santa should face left or right
        const facingLeft = targetX < startX;
        const scaleX = facingLeft ? -1 : 1;

        return new Promise(resolve => {
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth easing
                const easeProgress = 1 - Math.pow(1 - progress, 3);

                const currentX = startX + (targetX - startX) * easeProgress;
                const currentY = startY + (targetY - startY) * easeProgress;

                // Add a slight arc to the flight path
                const arcHeight = Math.sin(progress * Math.PI) * -50;

                // Position Santa: left/top at marker, transform moves him up and centers him
                this.santa.style.left = `${currentX}px`;
                this.santa.style.top = `${currentY + arcHeight}px`;
                this.santa.style.transform = `translate(-50%, -100%) scaleX(${scaleX})`;

                // Store current position for next animation
                this.santaX = currentX;
                this.santaY = currentY + arcHeight;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Arrived at center - final position exactly above marker
                    this.santa.classList.remove('flying');
                    this.santa.classList.add('idle');
                    this.santa.style.left = `${targetX}px`;
                    this.santa.style.top = `${targetY}px`;
                    this.santa.style.transform = `translate(-50%, -100%) scaleX(${scaleX})`;
                    this.santaX = targetX;
                    this.santaY = targetY;
                    this.dropGift(centerId);
                    this.markCenterVisited(centerId);
                    resolve();
                }
            };

            requestAnimationFrame(animate);
        });
    }

    dropGift(centerId) {
        // Get the center's exact pixel position on the map
        const center = this.centers.find(c => c.id === centerId);
        if (!center) return;

        const targetPos = this.getCenterPixelPosition(center);

        // Create gift element - start from Santa's bottom (directly above marker) and drop to marker
        const gift = document.createElement('span');
        gift.className = 'dropping-gift';
        gift.textContent = '🎁';
        gift.style.position = 'absolute';
        gift.style.left = `${targetPos.x}px`;
        gift.style.top = `${targetPos.y}px`;  // Start at marker position (animation will handle the rest)
        gift.style.zIndex = '999';  // Below Santa but above map

        // Add to the santa overlay so it's above the map
        this.santaOverlay.appendChild(gift);

        setTimeout(() => gift.remove(), 1500);
    }

    // Visit all centers for a specific day
    async visitCentersForDay(dayIndex) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const dayData = window.CARSK_DATA.dayAssignments[dayIndex];
        if (!dayData || !dayData.centers.length) {
            this.isAnimating = false;
            return;
        }

        // Reset Santa position before starting
        this.positionSantaAtStart();
        this.santa.style.transform = 'scaleX(1)';
        await this.delay(300);

        // Visit each center for this day
        for (let i = 0; i < dayData.centers.length; i++) {
            const center = dayData.centers[i];
            await this.flySantaToCenter(center.id, 2000);
            await this.delay(800);  // Pause at each center
        }

        // After visiting all centers, Santa returns to starting position
        await this.returnSantaToStart();

        this.isAnimating = false;
    }

    async returnSantaToStart() {
        this.santa.classList.remove('idle');
        this.santa.classList.add('flying');

        const startX = parseFloat(this.santa.style.left);
        const startY = parseFloat(this.santa.style.top);
        const targetX = 30;
        const targetY = 30;

        // Face left if returning leftward
        if (targetX < startX) {
            this.santa.style.transform = 'scaleX(-1)';
        }

        const duration = 1500;

        return new Promise(resolve => {
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3);

                const currentX = startX + (targetX - startX) * easeProgress;
                const currentY = startY + (targetY - startY) * easeProgress;
                const arcHeight = Math.sin(progress * Math.PI) * -30;

                this.santa.style.left = `${currentX}px`;
                this.santa.style.top = `${currentY + arcHeight}px`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    this.santa.classList.remove('flying');
                    this.santa.classList.add('idle');
                    this.santa.style.transform = 'scaleX(1)';
                    resolve();
                }
            };

            requestAnimationFrame(animate);
        });
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Start continuous animation - Santa visits all centers in a loop
    async startContinuousAnimation() {
        if (!this.continuousAnimation) return;

        // Shuffle centers for variety in the route
        const shuffledCenters = this.getShuffledCenters();

        while (this.continuousAnimation) {
            for (let i = 0; i < shuffledCenters.length; i++) {
                if (!this.continuousAnimation) break;

                const center = shuffledCenters[i];
                await this.flySantaToCenterSmooth(center.id, 3000);  // Slower, smoother flight
                await this.delay(1200);  // Pause at each center
            }

            // Brief pause before starting the loop again
            if (this.continuousAnimation) {
                await this.delay(2000);
            }
        }
    }

    // Get centers in a geographically sensible order (roughly west to east, then loop)
    getShuffledCenters() {
        // Sort by longitude to create a nice flight path
        const sorted = [...this.centers].sort((a, b) => a.coordinates.lng - b.coordinates.lng);
        return sorted;
    }

    // Smoother version of flight animation for continuous mode
    async flySantaToCenterSmooth(centerId, duration = 3000) {
        const center = this.centers.find(c => c.id === centerId);
        if (!center) return;

        // Get the EXACT pixel position of the center marker
        const targetPos = this.getCenterPixelPosition(center);
        const targetX = targetPos.x;
        const targetY = targetPos.y;

        this.santa.classList.remove('idle');
        this.santa.classList.add('flying');

        const startX = this.santaX || 100;
        const startY = this.santaY || 50;

        // Determine direction
        const facingLeft = targetX < startX;
        const scaleX = facingLeft ? -1 : 1;

        return new Promise(resolve => {
            const startTime = performance.now();

            const animate = (currentTime) => {
                if (!this.continuousAnimation) {
                    resolve();
                    return;
                }

                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth easing (ease-in-out)
                const easeProgress = progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                const currentX = startX + (targetX - startX) * easeProgress;
                const currentY = startY + (targetY - startY) * easeProgress;

                // Gentle arc
                const arcHeight = Math.sin(progress * Math.PI) * -40;

                // Position Santa: left/top at marker, transform moves him up and centers him
                this.santa.style.left = `${currentX}px`;
                this.santa.style.top = `${currentY + arcHeight}px`;
                this.santa.style.transform = `translate(-50%, -100%) scaleX(${scaleX})`;

                // Store current position for next animation
                this.santaX = currentX;
                this.santaY = currentY + arcHeight;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Arrived at center - final position exactly above marker
                    this.santa.classList.remove('flying');
                    this.santa.classList.add('idle');
                    this.santa.style.left = `${targetX}px`;
                    this.santa.style.top = `${targetY}px`;
                    this.santa.style.transform = `translate(-50%, -100%) scaleX(${scaleX})`;
                    this.santaX = targetX;
                    this.santaY = targetY;
                    this.dropGift(centerId);
                    resolve();
                }
            };

            requestAnimationFrame(animate);
        });
    }

    // Stop the continuous animation (useful if needed)
    stopContinuousAnimation() {
        this.continuousAnimation = false;
    }

    // Restart continuous animation
    restartContinuousAnimation() {
        if (!this.continuousAnimation) {
            this.continuousAnimation = true;
            this.startContinuousAnimation();
        }
    }

    // Update markers based on current/override date
    updateMarkersForDate(currentDate) {
        const dayAssignments = window.CARSK_DATA.dayAssignments;

        // Reset all markers
        Object.keys(this.markers).forEach(id => {
            const marker = this.markers[id];
            const el = marker.getElement();
            if (el) {
                const customMarker = el.querySelector('.custom-marker');
                if (customMarker) {
                    customMarker.classList.remove('visited');
                }
            }
        });

        this.visitedCenters.clear();

        // Mark centers as visited for past days
        dayAssignments.forEach(day => {
            const dayDate = new Date(day.calendarDay.date);
            dayDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);

            if (currentDate >= dayDate) {
                day.centers.forEach(center => {
                    this.markCenterVisited(center.id);
                });
            }
        });
    }

    // Handle map resize (still useful for window resize)
    invalidateSize() {
        if (this.map) {
            this.map.invalidateSize();
        }
    }
}

// Initialize map when DOM is ready
window.WorldMapInstance = null;
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure Leaflet is loaded
    setTimeout(() => {
        window.WorldMapInstance = new WorldMap();
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.WorldMapInstance) {
        window.WorldMapInstance.invalidateSize();
    }
});
