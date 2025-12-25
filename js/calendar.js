/**
 * Advent Calendar Component for CARSK
 * Handles gift box rendering, opening animations, and modal display
 *
 * Logic: Each center receives ONE $50 gift card, but ALL team members
 * (coordinators and PIs) are recognized and celebrated.
 */

class AdventCalendar {
    constructor() {
        this.calendarContainer = document.getElementById('advent-calendar');
        this.modal = document.getElementById('gift-modal');
        this.modalClose = document.getElementById('modal-close');
        this.dayAssignments = window.CARSK_DATA.dayAssignments;
        this.giftColors = window.CARSK_DATA.giftColors;
        this.openedGifts = new Set();

        // Date override for testing (set to null for production)
        // Example: new Date(2025, 11, 15) for December 15, 2025
        this.dateOverride = null;

        this.init();
    }

    init() {
        this.renderGiftBoxes();
        this.setupModalEvents();
        this.loadOpenedGifts();
        this.setupGrandPrize();
        this.checkUrlDateOverride();
    }

    checkUrlDateOverride() {
        const urlParams = new URLSearchParams(window.location.search);
        const dateParam = urlParams.get('date');
        if (dateParam) {
            const [year, month, day] = dateParam.split('-').map(Number);
            if (year && month && day) {
                this.setDateOverride(new Date(year, month - 1, day));
            }
        }
    }

    getCurrentDate() {
        return this.dateOverride || new Date();
    }

    // Set a date override for testing
    setDateOverride(date) {
        this.dateOverride = date;
        this.updateGiftStates();
        console.log(`📅 Date override set to: ${date ? date.toDateString() : 'none (using current date)'}`);
    }

    // Clear date override
    clearDateOverride() {
        this.dateOverride = null;
        this.updateGiftStates();
        console.log('📅 Date override cleared, using current date');
    }

    renderGiftBoxes() {
        this.calendarContainer.innerHTML = '';

        this.dayAssignments.forEach((day, index) => {
            const giftBox = this.createGiftBox(day, index);
            this.calendarContainer.appendChild(giftBox);
        });

        this.updateGiftStates();
    }

    createGiftBox(day, index) {
        const box = document.createElement('div');
        box.className = 'gift-box';
        box.dataset.day = day.day;
        box.dataset.color = this.giftColors[index % this.giftColors.length];

        const dateStr = this.formatDate(day.calendarDay.date);
        const centerCount = day.centers.length;

        box.innerHTML = `
            <div class="gift-box-inner">
                <div class="gift-wrapper">
                    <div class="gift-ribbon-v"></div>
                    <div class="gift-ribbon-h"></div>
                    <div class="gift-bow">
                        <div class="bow-loop left"></div>
                        <div class="bow-loop right"></div>
                        <div class="bow-center"></div>
                    </div>
                    <span class="gift-day">${day.day}</span>
                    <span class="gift-date">${dateStr}</span>
                    <span class="gift-centers-count">${centerCount} center${centerCount > 1 ? 's' : ''}</span>
                </div>
            </div>
            <div class="gift-particles"></div>
        `;

        box.addEventListener('click', () => this.handleGiftClick(day, box));

        return box;
    }

    formatDate(date) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getDate()}`;
    }

    updateGiftStates() {
        const currentDate = this.getCurrentDate();
        currentDate.setHours(0, 0, 0, 0);

        const giftBoxes = this.calendarContainer.querySelectorAll('.gift-box');

        giftBoxes.forEach((box, index) => {
            const day = this.dayAssignments[index];
            const giftDate = new Date(day.calendarDay.date);
            giftDate.setHours(0, 0, 0, 0);

            box.classList.remove('locked', 'today', 'opened', 'available');

            if (currentDate < giftDate) {
                box.classList.add('locked');
            } else if (currentDate.getTime() === giftDate.getTime()) {
                box.classList.add('today', 'available');
                if (this.openedGifts.has(day.day)) {
                    box.classList.add('opened');
                }
            } else {
                box.classList.add('available');
                if (this.openedGifts.has(day.day)) {
                    box.classList.add('opened');
                }
            }
        });

        if (window.WorldMapInstance) {
            window.WorldMapInstance.updateMarkersForDate(new Date(currentDate));
        }

        // Also update grand prize state
        this.updateGrandPrizeState();
    }

    handleGiftClick(day, box) {
        if (box.classList.contains('locked')) {
            this.showLockedMessage(day);
            return;
        }

        box.classList.add('opening');
        this.createParticles(box);

        // Santa animation is now continuous - no need to trigger it here

        setTimeout(() => {
            box.classList.remove('opening');
            box.classList.add('opened');
            this.openedGifts.add(day.day);
            this.saveOpenedGifts();
            this.showGiftModal(day);
        }, 800);
    }

    createParticles(box) {
        const particlesContainer = box.querySelector('.gift-particles');
        particlesContainer.innerHTML = '';

        const colors = ['#e74c3c', '#27ae60', '#f1c40f', '#3498db', '#9b59b6'];

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 200}px`);
            particle.style.setProperty('--ty', `${(Math.random() - 0.5) * 200}px`);
            particle.style.animationDelay = `${Math.random() * 0.3}s`;
            particlesContainer.appendChild(particle);
        }

        setTimeout(() => particlesContainer.innerHTML = '', 1500);
    }

    showLockedMessage(day) {
        const dateStr = this.formatDate(day.calendarDay.date);
        const box = this.calendarContainer.querySelector(`[data-day="${day.day}"]`);
        box.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => box.style.animation = '', 500);
    }

    showGiftModal(day) {
        const modalDate = document.getElementById('modal-date');
        const modalCenters = document.getElementById('modal-centers');
        const confettiContainer = document.getElementById('confetti');

        const dateStr = day.calendarDay.date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        modalDate.textContent = `Day ${day.day} - ${dateStr}`;

        // Build the superlative header if available
        const superlativeHeader = day.superlative ? `
            <div class="superlative-section">
                <h3 class="superlative-title">${day.superlative}</h3>
                <p class="superlative-description">${day.superlativeDescription}</p>
            </div>
        ` : '';

        // Render center cards - each center gets ONE gift card, all members recognized
        const centerCards = day.centers.map(center => {
            // Group members by role
            const pis = center.members.filter(m => m.role === "PI");
            const coIs = center.members.filter(m => m.role === "Co-I");
            const coordinators = center.members.filter(m => m.role === "Research Coordinator");
            const managers = center.members.filter(m => m.role === "Research Manager");
            const nurses = center.members.filter(m => m.role === "Research Nurse");

            // Format location
            const location = center.state
                ? `${center.city}, ${center.state}, ${center.country}`
                : `${center.city}, ${center.country}`;

            // Get recruitment count (Total Randomised from spreadsheet)
            const recruitmentCount = window.CARSK_DATA.getRecruitmentCount(center.id);

            return `
                <div class="center-card">
                    <h3>${center.name}</h3>
                    <p class="center-location">${location}</p>

                    <div class="recruitment-tracker">
                        <span class="recruitment-count">${recruitmentCount}</span>
                        <span class="recruitment-label">recruited so far</span>
                    </div>

                    ${pis.length > 0 ? `
                        <div class="team-section">
                            <p class="section-label">Principal Investigator${pis.length > 1 ? 's' : ''}:</p>
                            <div class="team-members pis">
                                ${pis.map(pi => `<span class="member-name pi">${pi.name}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${coIs.length > 0 ? `
                        <div class="team-section">
                            <p class="section-label">Co-Investigator${coIs.length > 1 ? 's' : ''}:</p>
                            <div class="team-members coIs">
                                ${coIs.map(coI => `<span class="member-name coI">${coI.name}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${managers.length > 0 ? `
                        <div class="team-section">
                            <p class="section-label">Research Manager${managers.length > 1 ? 's' : ''}:</p>
                            <div class="team-members managers">
                                ${managers.map(mgr => `<span class="member-name manager">${mgr.name}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${coordinators.length > 0 ? `
                        <div class="team-section">
                            <p class="section-label">Research Coordinator${coordinators.length > 1 ? 's' : ''}:</p>
                            <div class="team-members coordinators">
                                ${coordinators.map(coord => `<span class="member-name coordinator">${coord.name}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${nurses.length > 0 ? `
                        <div class="team-section">
                            <p class="section-label">Research Nurse${nurses.length > 1 ? 's' : ''}:</p>
                            <div class="team-members nurses">
                                ${nurses.map(nurse => `<span class="member-name nurse">${nurse.name}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}

                    <div class="prize">
                        <span class="prize-icon">🎁</span>
                        <strong>Center Prize:</strong> ${center.prize}
                        <p class="prize-note">One gift card per center will be emailed to each site to be shared among the team!</p>
                    </div>
                </div>
            `;
        }).join('');

        modalCenters.innerHTML = superlativeHeader + centerCards;

        this.createConfetti(confettiContainer);
        this.modal.classList.remove('hidden');
    }

    createConfetti(container) {
        container.innerHTML = '';
        const colors = ['#e74c3c', '#27ae60', '#f1c40f', '#3498db', '#9b59b6', '#e91e63'];

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
            container.appendChild(confetti);
        }

        setTimeout(() => container.innerHTML = '', 5000);
    }

    setupModalEvents() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }

    closeModal() {
        this.modal.classList.add('hidden');
    }

    saveOpenedGifts() {
        localStorage.setItem('carsk_opened_gifts', JSON.stringify([...this.openedGifts]));
    }

    loadOpenedGifts() {
        const saved = localStorage.getItem('carsk_opened_gifts');
        if (saved) {
            this.openedGifts = new Set(JSON.parse(saved));
        }
    }

    resetOpenedGifts() {
        this.openedGifts.clear();
        localStorage.removeItem('carsk_opened_gifts');
        this.updateGiftStates();
    }

    setupGrandPrize() {
        this.grandPrizeGift = document.getElementById('grand-prize-gift');
        if (!this.grandPrizeGift) return;

        this.grandPrizeGift.addEventListener('click', () => this.handleGrandPrizeClick());
        this.updateGrandPrizeState();
    }

    updateGrandPrizeState() {
        if (!this.grandPrizeGift) return;

        const currentDate = this.getCurrentDate();
        currentDate.setHours(0, 0, 0, 0);

        const christmasDay = new Date(2025, 11, 25); // December 25, 2025
        christmasDay.setHours(0, 0, 0, 0);

        this.grandPrizeGift.classList.remove('locked', 'today', 'available');

        if (currentDate < christmasDay) {
            this.grandPrizeGift.classList.add('locked');
        } else if (currentDate.getTime() === christmasDay.getTime()) {
            this.grandPrizeGift.classList.add('today', 'available');
        } else {
            this.grandPrizeGift.classList.add('available');
        }
    }

    handleGrandPrizeClick() {
        if (this.grandPrizeGift.classList.contains('locked')) {
            // Shake animation for locked state
            this.grandPrizeGift.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => this.grandPrizeGift.style.animation = '', 500);
            return;
        }

        this.showGrandPrizeModal();
    }

    showGrandPrizeModal() {
        const modalDate = document.getElementById('modal-date');
        const modalCenters = document.getElementById('modal-centers');
        const confettiContainer = document.getElementById('confetti');

        modalDate.textContent = 'Christmas Day Grand Prize Winners!';

        const grandPrizeContent = `
            <div class="grand-prize-reveal">
                <div class="john-gill-photo">
                    <img src="assets/images/john_gill_christmas.png" alt="John Gill" class="john-gill-image">
                </div>
                <div class="grand-prize-message">
                    <h3>Our winning centers are:</h3>
                    <div class="winning-centers-list">
                        <div class="winning-center">
                            <span class="center-name">Hospital Del Mar Research Institute</span>
                            <span class="center-location">Barcelona, Spain</span>
                        </div>
                        <div class="winning-center">
                            <span class="center-name">Charité</span>
                            <span class="center-location">Berlin, Germany</span>
                        </div>
                        <div class="winning-center">
                            <span class="center-name">Royal Free</span>
                            <span class="center-location">United Kingdom</span>
                        </div>
                        <div class="winning-center">
                            <span class="center-name">Queen Elizabeth II</span>
                            <span class="center-location">Halifax, Canada</span>
                        </div>
                    </div>
                    <div class="grand-prize-announcement">
                        <p>We have been overwhelmed with gratitude over everyone's hard work we wanted to appreciate more than just one site!</p>
                        <p class="prize-amount">We will be sending $250 gift cards to each site.</p>
                    </div>
                </div>
            </div>
        `;

        modalCenters.innerHTML = grandPrizeContent;

        this.createConfetti(confettiContainer);
        this.modal.classList.remove('hidden');
    }
}

window.AdventCalendarInstance = null;
document.addEventListener('DOMContentLoaded', () => {
    window.AdventCalendarInstance = new AdventCalendar();
});
