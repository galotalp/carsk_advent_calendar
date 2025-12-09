/**
 * CARSK Advent Calendar Data
 * Generated from centers_spreadsheet.xlsx
 *
 * 29 transplant centers distributed across 12 working days
 * Each center receives one $50 gift card, shared among all coordinators
 */

// Calendar configuration
const CALENDAR_CONFIG = {
    startDate: new Date(2025, 11, 9),  // December 9, 2025
    endDate: new Date(2025, 11, 24),   // December 24, 2025
    totalDays: 12,  // 12 working days (excluding weekends)
    prizePerCenter: "$50 Gift Card"
};

// Working days for the calendar (December 2025, excluding weekends)
const CALENDAR_DAYS = [
    { day: 1, date: new Date(2025, 11, 9), dayOfWeek: 'Tuesday' },
    { day: 2, date: new Date(2025, 11, 10), dayOfWeek: 'Wednesday' },
    { day: 3, date: new Date(2025, 11, 11), dayOfWeek: 'Thursday' },
    { day: 4, date: new Date(2025, 11, 12), dayOfWeek: 'Friday' },
    { day: 5, date: new Date(2025, 11, 15), dayOfWeek: 'Monday' },
    { day: 6, date: new Date(2025, 11, 16), dayOfWeek: 'Tuesday' },
    { day: 7, date: new Date(2025, 11, 17), dayOfWeek: 'Wednesday' },
    { day: 8, date: new Date(2025, 11, 18), dayOfWeek: 'Thursday' },
    { day: 9, date: new Date(2025, 11, 19), dayOfWeek: 'Friday' },
    { day: 10, date: new Date(2025, 11, 22), dayOfWeek: 'Monday' },
    { day: 11, date: new Date(2025, 11, 23), dayOfWeek: 'Tuesday' },
    { day: 12, date: new Date(2025, 11, 24), dayOfWeek: 'Wednesday' }
];

// All 29 transplant centers with accurate coordinates
const TRANSPLANT_CENTERS = [
    {
        id: 1,
        name: "University of Alberta",
        city: "Edmonton",
        country: "Canada",
        coordinates: { lat: 53.5232, lng: -113.5263 },
        members: [
            { name: "Kathryn Farmer", role: "Research Coordinator" },
            { name: "Wei Chen", role: "Research Coordinator" },
            { name: "Dr. Sita Gourishankar", role: "PI" }
        ]
    },
    {
        id: 2,
        name: "Royal University Hospital",
        city: "Saskatoon",
        country: "Canada",
        coordinates: { lat: 52.1332, lng: -106.6700 },
        members: [
            { name: "Braeden Mandtler", role: "Research Coordinator" },
            { name: "Dr. Rahul Mainra", role: "PI" }
        ]
    },
    {
        id: 3,
        name: "University Health Network",
        city: "Toronto",
        country: "Canada",
        coordinates: { lat: 43.6590, lng: -79.3880 },
        members: [
            { name: "Joe Kim", role: "PI" },
            { name: "Jasleen", role: "Research Coordinator" }
        ]
    },
    {
        id: 4,
        name: "St. Michael's Hospital",
        city: "Toronto",
        country: "Canada",
        coordinates: { lat: 43.6529, lng: -79.3773 },
        members: [
            { name: "Maya", role: "Research Coordinator" },
            { name: "Yawen", role: "Research Coordinator" },
            { name: "Lindita Rapi", role: "Research Coordinator" },
            { name: "Michelle Nash", role: "Research Coordinator" }
        ]
    },
    {
        id: 5,
        name: "The Ottawa Hospital",
        city: "Ottawa",
        country: "Canada",
        coordinates: { lat: 45.3929, lng: -75.7200 },
        members: [
            { name: "Jennifer Biggs", role: "Research Coordinator" },
            { name: "Dr. Greg Knoll", role: "PI" }
        ]
    },
    {
        id: 6,
        name: "St. Joseph's Hospital (Hamilton)",
        city: "Hamilton",
        country: "Canada",
        coordinates: { lat: 43.2557, lng: -79.8711 },
        members: [
            { name: "Andrea Mezetti", role: "Research Coordinator" },
            { name: "Taylor Dondas", role: "Research Coordinator" },
            { name: "Dr. Christine Ribic", role: "PI" }
        ]
    },
    {
        id: 7,
        name: "London Health Sciences",
        city: "London",
        country: "Canada",
        coordinates: { lat: 43.0130, lng: -81.2752 },
        members: [
            { name: "Gabriela Offerni", role: "Research Coordinator" },
            { name: "Dr. Lakshman Gunaratnam", role: "PI" }
        ]
    },
    {
        id: 8,
        name: "Kingston General Hospital",
        city: "Kingston",
        country: "Canada",
        coordinates: { lat: 44.2253, lng: -76.4951 },
        members: [
            { name: "Shahriah", role: "Research Coordinator" },
            { name: "Dr. Khaled Shamseddin", role: "PI" }
        ]
    },
    {
        id: 9,
        name: "University of Montreal CHUM",
        city: "Montreal",
        country: "Canada",
        coordinates: { lat: 45.5115, lng: -73.5579 },
        members: [
            { name: "Majda Belkaid", role: "Research Coordinator" },
            { name: "Zineb", role: "Research Coordinator" },
            { name: "Dr. Heloise Cardinal", role: "PI" }
        ]
    },
    {
        id: 10,
        name: "McGill University",
        city: "Montreal",
        country: "Canada",
        coordinates: { lat: 45.5048, lng: -73.5772 },
        members: [
            { name: "Norka Rios", role: "Research Coordinator" },
            { name: "Effrosyne", role: "Research Coordinator" },
            { name: "Dr. Marcelo Cantarovich", role: "PI" },
            { name: "Dr. Rita Suri", role: "PI" }
        ]
    },
    {
        id: 11,
        name: "University of Montreal CIUSSS (Maisonneuve-Rosemont)",
        city: "Montreal",
        country: "Canada",
        coordinates: { lat: 45.5650, lng: -73.5600 },
        members: [
            { name: "Lucie Boutin", role: "Research Coordinator" },
            { name: "Belinda", role: "Research Coordinator" },
            { name: "Dr. Duy Tran", role: "PI" }
        ]
    },
    {
        id: 12,
        name: "Laval University",
        city: "Quebec City",
        country: "Canada",
        coordinates: { lat: 46.7784, lng: -71.2761 },
        members: [
            { name: "Marie-Pier", role: "Research Coordinator" },
            { name: "Dr. Sacha De Seres", role: "PI" }
        ]
    },
    {
        id: 13,
        name: "Queen Elizabeth II (Halifax)",
        city: "Halifax",
        country: "Canada",
        coordinates: { lat: 44.6414, lng: -63.5859 },
        members: [
            { name: "Elizabeth Larsen", role: "Research Coordinator" },
            { name: "Dr. Amanda Vinson", role: "PI" }
        ]
    },
    {
        id: 14,
        name: "George Washington University",
        city: "Washington D.C.",
        country: "USA",
        coordinates: { lat: 38.9007, lng: -77.0518 },
        members: [
            { name: "Ana Pabalan", role: "Research Coordinator" },
            { name: "Nairuti Dave", role: "Research Coordinator" },
            { name: "Dr. Dominic Raj", role: "PI" }
        ]
    },
    {
        id: 15,
        name: "University of Arizona",
        city: "Tucson",
        country: "USA",
        coordinates: { lat: 32.2319, lng: -110.9501 },
        members: [
            { name: "Dr. Ariyamuthu", role: "PI" },
            { name: "Fred Rauh", role: "Research Coordinator" }
        ]
    },
    {
        id: 16,
        name: "University of Pennsylvania",
        city: "Philadelphia",
        country: "USA",
        coordinates: { lat: 39.9496, lng: -75.1938 },
        members: [
            { name: "Stacy Lau", role: "Research Coordinator" },
            { name: "Anisha Bhandari", role: "Research Coordinator" },
            { name: "Dr. Roy Bloom", role: "PI" }
        ]
    },
    {
        id: 17,
        name: "University of Minnesota",
        city: "Minneapolis",
        country: "USA",
        coordinates: { lat: 44.9721, lng: -93.2323 },
        members: [
            { name: "Mary Farnsworth", role: "Research Coordinator" },
            { name: "Adele", role: "Research Coordinator" },
            { name: "Dr. Arthur Matas", role: "PI" }
        ]
    },
    {
        id: 18,
        name: "Baylor Scott & White",
        city: "Dallas",
        country: "USA",
        coordinates: { lat: 32.7767, lng: -96.7970 },
        members: [
            { name: "Reshasri", role: "Research Coordinator" },
            { name: "Ashley", role: "Research Coordinator" },
            { name: "Taryn Kruse", role: "Research Coordinator" },
            { name: "Michelle Reyes", role: "Research Coordinator" },
            { name: "Christine Guerra", role: "Research Coordinator" },
            { name: "Dr. Fischbach", role: "PI" }
        ]
    },
    {
        id: 19,
        name: "VCU University",
        city: "Richmond",
        country: "USA",
        coordinates: { lat: 37.5485, lng: -77.4530 },
        members: [
            { name: "Meron Zeleke", role: "Research Coordinator" },
            { name: "Shawn Fenner", role: "Research Coordinator" },
            { name: "Dr. Dhiren Kumar", role: "PI" }
        ]
    },
    {
        id: 20,
        name: "Hospital Del Mar, Barcelona",
        city: "Barcelona",
        country: "Spain",
        coordinates: { lat: 41.3851, lng: 2.1992 },
        members: [
            { name: "Dr. Maria Perez", role: "PI" },
            { name: "Marta Crespo", role: "Research Coordinator" },
            { name: "Anna Faura", role: "Research Coordinator" },
            { name: "Lidia", role: "Research Coordinator" }
        ]
    },
    {
        id: 21,
        name: "Charite, Berlin",
        city: "Berlin",
        country: "Germany",
        coordinates: { lat: 52.5260, lng: 13.3777 },
        members: [
            { name: "Alexander", role: "Research Coordinator" },
            { name: "Dr. Martina Bertolo", role: "PI" },
            { name: "Eva", role: "Research Coordinator" }
        ]
    },
    {
        id: 22,
        name: "Brighton & Sussex NHS Trust",
        city: "Brighton",
        country: "UK",
        coordinates: { lat: 50.8429, lng: -0.1313 },
        members: [
            { name: "Kostantinos Koutroutsos", role: "PI" },
            { name: "Karolina Zdenka", role: "Research Coordinator" },
            { name: "Mel Smith", role: "Research Coordinator" },
            { name: "Kate Trivedi", role: "Research Coordinator" }
        ]
    },
    {
        id: 23,
        name: "St. Helier's",
        city: "London",
        country: "UK",
        coordinates: { lat: 51.3782, lng: -0.2082 },
        members: [
            { name: "Dr. Phanish", role: "PI" },
            { name: "Peter Amoah", role: "Research Coordinator" },
            { name: "Kwame Ansu", role: "Research Coordinator" }
        ]
    },
    {
        id: 24,
        name: "St. George's Hospital Trust",
        city: "London",
        country: "UK",
        coordinates: { lat: 51.4273, lng: -0.1750 },
        members: [
            { name: "Khin Moh", role: "PI" },
            { name: "Sharirose", role: "Research Coordinator" },
            { name: "Riny", role: "Research Coordinator" }
        ]
    },
    {
        id: 25,
        name: "Kings College Hospital",
        city: "London",
        country: "UK",
        coordinates: { lat: 51.4681, lng: -0.0884 },
        members: [
            { name: "Dr. Sapna", role: "PI" },
            { name: "David B", role: "Research Coordinator" },
            { name: "Viktoria", role: "Research Coordinator" }
        ]
    },
    {
        id: 26,
        name: "Barts Health NHS Trust",
        city: "London",
        country: "UK",
        coordinates: { lat: 51.5182, lng: -0.0595 },
        members: [
            { name: "Kieran Mccafferty", role: "PI" },
            { name: "Anika", role: "Research Coordinator" },
            { name: "Damini", role: "Research Coordinator" }
        ]
    },
    {
        id: 27,
        name: "Imperial College",
        city: "London",
        country: "UK",
        coordinates: { lat: 51.4988, lng: -0.1749 },
        members: [
            { name: "Dr. Chris Baker", role: "PI" },
            { name: "Racheal Lagasca", role: "Research Coordinator" }
        ]
    },
    {
        id: 28,
        name: "Guy's and St. Thomas",
        city: "London",
        country: "UK",
        coordinates: { lat: 51.5021, lng: -0.1186 },
        members: [
            { name: "Dr. Nicole Kumar", role: "PI" },
            { name: "Dr. Jake Hudson", role: "PI" },
            { name: "Jamee Chen", role: "Research Coordinator" },
            { name: "Sobande", role: "Research Coordinator" }
        ]
    },
    {
        id: 29,
        name: "Royal Free Hospital",
        city: "London",
        country: "UK",
        coordinates: { lat: 51.5535, lng: -0.1650 },
        members: [
            { name: "Rhys Evens", role: "PI" },
            { name: "Jona Guevarra", role: "Research Coordinator" },
            { name: "Hibo Mahdi", role: "Research Coordinator" }
        ]
    }
];

// Function to randomly assign centers to days with seeded random for consistency
function assignCentersToDays(centers, numDays, seed = 2025) {
    // Seeded random for reproducibility
    let random = seed;
    const seededRandom = () => {
        random = (random * 9301 + 49297) % 233280;
        return random / 233280;
    };

    // Shuffle centers
    const shuffled = [...centers];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Calculate base distribution: 29 centers / 12 days = ~2-3 per day
    const basePerDay = Math.floor(centers.length / numDays); // 2
    const extraDays = centers.length % numDays; // 5 days get 3 centers

    const dayAssignments = [];
    let centerIndex = 0;

    for (let i = 0; i < numDays; i++) {
        // First 'extraDays' days get one extra center
        const centersForThisDay = i < extraDays ? basePerDay + 1 : basePerDay;
        const dayCenters = shuffled.slice(centerIndex, centerIndex + centersForThisDay);
        centerIndex += centersForThisDay;

        dayAssignments.push({
            day: i + 1,
            calendarDay: CALENDAR_DAYS[i],
            centers: dayCenters.map(c => ({
                ...c,
                prize: CALENDAR_CONFIG.prizePerCenter
            }))
        });
    }

    return dayAssignments;
}

// Generate the day assignments
const DAY_ASSIGNMENTS = assignCentersToDays(TRANSPLANT_CENTERS, 12);

// Gift box colors
const GIFT_COLORS = ['red', 'green', 'blue', 'purple', 'gold', 'pink'];

// Helper to get coordinators only (exclude PIs)
function getCoordinators(members) {
    return members.filter(m => m.role === "Research Coordinator");
}

// Helper to get PIs only
function getPIs(members) {
    return members.filter(m => m.role === "PI");
}

// Export for use in other modules
window.CARSK_DATA = {
    config: CALENDAR_CONFIG,
    calendarDays: CALENDAR_DAYS,
    centers: TRANSPLANT_CENTERS,
    dayAssignments: DAY_ASSIGNMENTS,
    giftColors: GIFT_COLORS,
    getCoordinators,
    getPIs
};

// Log assignment summary
console.log('📅 CARSK Advent Calendar - Center Assignments:');
DAY_ASSIGNMENTS.forEach(day => {
    const date = day.calendarDay.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    console.log(`Day ${day.day} (${date}): ${day.centers.map(c => c.name).join(', ')}`);
});
