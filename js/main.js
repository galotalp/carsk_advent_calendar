/**
 * Main Application Entry Point for CARSK Advent Calendar
 */

class App {
    constructor() {
        this.init();
    }

    init() {
        console.log('🎄 CARSK Advent Calendar Initialized!');
        console.log('📅 Calendar runs from December 9-24, 2025 (excluding weekends)');
        console.log('🏥 29 transplant centers will be celebrated across 12 days');
    }
}

// Developer utilities (for debugging if needed)
window.CARSK_DEV = {
    // Show all data
    showData: function () {
        console.log('Calendar Configuration:', window.CARSK_DATA.config);
        console.log('Day Assignments:', window.CARSK_DATA.dayAssignments);
        console.log('All Centers:', window.CARSK_DATA.centers);
    },

    // List all days and their centers
    listDays: function () {
        window.CARSK_DATA.dayAssignments.forEach(day => {
            console.log(`\nDay ${day.day} (${day.calendarDay.date.toDateString()}):`);
            day.centers.forEach(center => {
                console.log(`  - ${center.name} (${center.city})`);
                console.log(`    Team: ${center.members.map(m => m.name).join(', ')}`);
            });
        });
    },

    // Reset opened gifts
    resetGifts: function () {
        if (window.AdventCalendarInstance) {
            window.AdventCalendarInstance.resetOpenedGifts();
            console.log('All gifts reset!');
        }
    },

    // Control Santa animation
    stopSanta: function() {
        if (window.WorldMapInstance) {
            window.WorldMapInstance.stopContinuousAnimation();
            console.log('Santa stopped');
        }
    },

    startSanta: function() {
        if (window.WorldMapInstance) {
            window.WorldMapInstance.restartContinuousAnimation();
            console.log('Santa started');
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.AppInstance = new App();
});
