/**
 * CARSK Advent Calendar Data
 * Generated from 12Days_of_CARSK_BRG.xlsx
 *
 * 29 transplant centers distributed across 12 working days
 * Each center receives one $50 gift card, shared among all team members
 * Includes superlatives for each center group
 */

// Calendar configuration
const CALENDAR_CONFIG = {
    startDate: new Date(2025, 11, 9),  // December 9, 2025
    endDate: new Date(2025, 11, 24),   // December 24, 2025
    grandPrizeDate: new Date(2025, 11, 25),  // December 25, 2025
    totalDays: 12,  // 12 working days (excluding weekends)
    prizePerCenter: "$50 Gift Card",
    recruitmentTrackingStartDate: "December 8th"
};

// Total Randomised counts from spreadsheet (12Days_of_CARSK_BRG.xlsx)
// These are the total patients recruited so far at each center
const RECRUITMENT_COUNTS = {
    1: 82,   // Royal University Hospital
    2: 40,   // Kingston General Hospital
    3: 75,   // University Health Network
    4: 90,   // St. George's Hospital Trust
    5: 15,   // Guy's and St. Thomas
    6: 74,   // London Health Sciences
    7: 72,   // University of Montreal CIUSSS (Maisonneuve-Rosemont)
    8: 71,   // Queen Elizabeth II (Halifax)
    9: 21,   // Laval University
    10: 37,  // George Washington University
    11: 31,  // Kings College Hospital
    12: 30,  // Imperial College
    13: 17,  // Brighton & Sussex NHS Trust
    14: 40,  // St. Helier's
    15: 85,  // St. Michael's Hospital
    16: 31,  // Baylor Scott & White
    17: 32,  // Hospital Del Mar, Barcelona
    18: 102, // Charite, Berlin
    19: 42,  // University of Alberta
    20: 33,  // University of Montreal CHUM
    21: 72,  // McGill University
    22: 37,  // VCU University
    23: 65,  // Royal Free Hospital
    24: 18,  // University of Pennsylvania
    25: 11,  // University of Minnesota
    26: 85,  // The Ottawa Hospital
    27: 48,  // St. Joseph's Hospital (Hamilton)
    28: 27,  // Barts Health NHS Trust
    29: 200  // University of Arizona
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

// All 29 transplant centers with accurate coordinates and superlatives
// Grouped by day number from spreadsheet
const TRANSPLANT_CENTERS = [
    // Day 1 - Small but mighty!
    {
        id: 1,
        name: "Royal University Hospital",
        city: "Saskatoon",
        state: "Saskatchewan",
        country: "Canada",
        coordinates: { lat: 52.1332, lng: -106.6700 },
        dayNumber: 1,
        superlative: "Small but mighty!",
        superlativeDescription: "One of our smaller centers in the CARSK trial with less than 50 kidney transplant a year, impressing us by surpassing their initial recruitment targets",
        members: [
            { name: "Braeden Mandtler", role: "Research Coordinator" },
            { name: "Dr. Rahul Mainra", role: "PI" }
        ]
    },
    {
        id: 2,
        name: "Kingston General Hospital",
        city: "Kingston",
        state: "Ontario",
        country: "Canada",
        coordinates: { lat: 44.2253, lng: -76.4951 },
        dayNumber: 1,
        superlative: "Small but mighty!",
        superlativeDescription: "One of our smaller centers in the CARSK trial with less than 50 kidney transplant a year, impressing us by surpassing their initial recruitment targets",
        members: [
            { name: "Muhammed Shahriar Zaman", role: "Research Coordinator" },
            { name: "Dr. Khaled Shamseddin", role: "PI" }
        ]
    },
    // Day 2 - The power of Fellows & Trainee Doctors!
    {
        id: 3,
        name: "University Health Network",
        city: "Toronto",
        state: "Ontario",
        country: "Canada",
        coordinates: { lat: 43.6590, lng: -79.3880 },
        dayNumber: 2,
        superlative: "The power of Fellows & Trainee Doctors!",
        superlativeDescription: "CARSK has been a learning opportunity for future research PIs at these centres and their work has contributed to the recruitment success at these sites.",
        members: [
            { name: "Jasleen Panesar", role: "Research Coordinator" },
            { name: "Dr. Joseph Kim", role: "PI" }
        ]
    },
    {
        id: 4,
        name: "St. George's Hospital Trust",
        city: "London",
        state: "",
        country: "UK",
        coordinates: { lat: 51.4273, lng: -0.1750 },
        dayNumber: 2,
        superlative: "The power of Fellows & Trainee Doctors!",
        superlativeDescription: "CARSK has been a learning opportunity for future research PIs at these centres and their work has contributed to the recruitment success at these sites.",
        members: [
            { name: "Sharirose Abat", role: "Research Nurse" },
            { name: "Riny Paul", role: "Research Nurse" },
            { name: "Dr. Debasish Banerjee", role: "PI" }
        ]
    },
    {
        id: 5,
        name: "Guy's and St. Thomas",
        city: "London",
        state: "",
        country: "UK",
        coordinates: { lat: 51.5021, lng: -0.1186 },
        dayNumber: 2,
        superlative: "The power of Fellows & Trainee Doctors!",
        superlativeDescription: "CARSK has been a learning opportunity for future research PIs at these centres and their work has contributed to the recruitment success at these sites.",
        members: [
            { name: "Jamee Chen", role: "Research Nurse" },
            { name: "Dr. Nicole Kumar", role: "PI" }
        ]
    },
    // Day 3 - Consistency is Key!
    {
        id: 6,
        name: "London Health Sciences",
        city: "London",
        state: "Ontario",
        country: "Canada",
        coordinates: { lat: 43.0130, lng: -81.2752 },
        dayNumber: 3,
        superlative: "Consistency is Key!",
        superlativeDescription: "These centers have 100 or less kidney transplants a year and with consistent recruitment have surpassed their initial recruitment targets",
        members: [
            { name: "Gabriela Offerni", role: "Research Coordinator" },
            { name: "Dr. Lakshman Gunaratnam", role: "PI" }
        ]
    },
    {
        id: 7,
        name: "University of Montreal CIUSSS (Maisonneuve-Rosemont)",
        city: "Montreal",
        state: "Quebec",
        country: "Canada",
        coordinates: { lat: 45.5650, lng: -73.5600 },
        dayNumber: 3,
        superlative: "Consistency is Key!",
        superlativeDescription: "These centers have 100 or less kidney transplants a year and with consistent recruitment have surpassed their initial recruitment targets",
        members: [
            { name: "Belinda Abidi", role: "Research Coordinator" },
            { name: "Dr. Duy Tran", role: "PI" }
        ]
    },
    {
        id: 8,
        name: "Queen Elizabeth II (Halifax)",
        city: "Halifax",
        state: "Nova Scotia",
        country: "Canada",
        coordinates: { lat: 44.6414, lng: -63.5859 },
        dayNumber: 3,
        superlative: "Consistency is Key!",
        superlativeDescription: "These centers have 100 or less kidney transplants a year and with consistent recruitment have surpassed their initial recruitment targets",
        members: [
            { name: "Elizabeth Larsen", role: "Research Coordinator" },
            { name: "Dr. Amanda Vinson", role: "PI" }
        ]
    },
    // Day 4 - Data stars!
    {
        id: 9,
        name: "Laval University",
        city: "Quebec City",
        state: "Quebec",
        country: "Canada",
        coordinates: { lat: 46.7784, lng: -71.2761 },
        dayNumber: 4,
        superlative: "Data stars!",
        superlativeDescription: "These sites have excelled in data capturing and integrity. Consistently on top of data and study visits!",
        members: [
            { name: "Marie-Pier Roussel", role: "Research Coordinator" },
            { name: "Dr. Sacha De Seres", role: "PI" }
        ]
    },
    {
        id: 10,
        name: "George Washington University",
        city: "Washington D.C.",
        state: "",
        country: "USA",
        coordinates: { lat: 38.9007, lng: -77.0518 },
        dayNumber: 4,
        superlative: "Data stars!",
        superlativeDescription: "These sites have excelled in data capturing and integrity. Consistently on top of data and study visits!",
        members: [
            { name: "Ana Pabalan", role: "Research Coordinator" },
            { name: "Nairuti Dave", role: "Research Coordinator" },
            { name: "Dr. Dominic Raj", role: "PI" }
        ]
    },
    {
        id: 11,
        name: "Kings College Hospital",
        city: "London",
        state: "",
        country: "UK",
        coordinates: { lat: 51.4681, lng: -0.0884 },
        dayNumber: 4,
        superlative: "Data stars!",
        superlativeDescription: "These sites have excelled in data capturing and integrity. Consistently on top of data and study visits!",
        members: [
            { name: "David Benerayan", role: "Research Nurse" },
            { name: "Dr. Sapna", role: "PI" }
        ]
    },
    {
        id: 12,
        name: "Imperial College",
        city: "London",
        state: "",
        country: "UK",
        coordinates: { lat: 51.4988, lng: -0.1749 },
        dayNumber: 4,
        superlative: "Data stars!",
        superlativeDescription: "These sites have excelled in data capturing and integrity. Consistently on top of data and study visits!",
        members: [
            { name: "Racheal Lagasca", role: "Research Nurse" },
            { name: "Dr. Chris Baker", role: "PI" }
        ]
    },
    // Day 5 - Quickest to target!
    {
        id: 13,
        name: "Brighton & Sussex NHS Trust",
        city: "Brighton",
        state: "",
        country: "UK",
        coordinates: { lat: 50.8429, lng: -0.1313 },
        dayNumber: 5,
        superlative: "Quickest to target!",
        superlativeDescription: "Both Sites recruited to their initial target in under 13 months.",
        members: [
            { name: "Karolina Zdenka", role: "Research Coordinator" },
            { name: "Kostantinos Koutroutsos", role: "PI" }
        ]
    },
    {
        id: 14,
        name: "St. Helier's",
        city: "London",
        state: "",
        country: "UK",
        coordinates: { lat: 51.3782, lng: -0.2082 },
        dayNumber: 5,
        superlative: "Quickest to target!",
        superlativeDescription: "Both Sites recruited to their initial target in under 13 months.",
        members: [
            { name: "Peter Amoah", role: "Research Coordinator" },
            { name: "Kwame Ansu", role: "Research Coordinator" },
            { name: "Dr. Phanish", role: "PI" }
        ]
    },
    // Day 6 - Communication is Key!
    {
        id: 15,
        name: "St. Michael's Hospital",
        city: "Toronto",
        state: "Ontario",
        country: "Canada",
        coordinates: { lat: 43.6529, lng: -79.3773 },
        dayNumber: 6,
        superlative: "Communication is Key!",
        superlativeDescription: "These sites provide great transparency with sites specific recruitment needs, targets, goals!",
        members: [
            { name: "Yawen Zheng", role: "Research Coordinator" },
            { name: "Sierra Bazzarella", role: "Research Coordinator" },
            { name: "Lindita Rapi", role: "Research Manager" },
            { name: "Michelle Nash", role: "Research Manager" },
            { name: "Ramesh Prasad", role: "PI" }
        ]
    },
    {
        id: 16,
        name: "Baylor Scott & White",
        city: "Dallas",
        state: "Texas",
        country: "USA",
        coordinates: { lat: 32.7767, lng: -96.7970 },
        dayNumber: 6,
        superlative: "Communication is Key!",
        superlativeDescription: "These sites provide great transparency with sites specific recruitment needs, targets, goals!",
        members: [
            { name: "Reshasri Bolisetty", role: "Research Coordinator" },
            { name: "Dr. Fischbach", role: "PI" }
        ]
    },
    // Day 7 - Sites that bolus us with patients!
    {
        id: 17,
        name: "Hospital Del Mar, Barcelona",
        city: "Barcelona",
        state: "",
        country: "Spain",
        coordinates: { lat: 41.3851, lng: 2.1992 },
        dayNumber: 7,
        superlative: "Sites that bolus us with patients!",
        superlativeDescription: "These sites have recruited more than 15 patients in one month!",
        members: [
            { name: "Anna Faura", role: "Research Manager" },
            { name: "Lidia Ruiz", role: "Research Coordinator" },
            { name: "Dr. Maria Perez", role: "PI" },
            { name: "Dr. Marta Crespo", role: "Co-I" }
        ]
    },
    {
        id: 18,
        name: "Charite, Berlin",
        city: "Berlin",
        state: "",
        country: "Germany",
        coordinates: { lat: 52.5260, lng: 13.3777 },
        dayNumber: 7,
        superlative: "Sites that bolus us with patients!",
        superlativeDescription: "These sites have recruited more than 15 patients in one month!",
        members: [
            { name: "Alexander Schramm", role: "Research Coordinator" },
            { name: "Dr. Klemens Budde", role: "PI" }
        ]
    },
    // Day 8 - PI support is essential!
    {
        id: 19,
        name: "University of Alberta",
        city: "Edmonton",
        state: "Alberta",
        country: "Canada",
        coordinates: { lat: 53.5232, lng: -113.5263 },
        dayNumber: 8,
        superlative: "PI support is essential!",
        superlativeDescription: "These sites have great PI involvement in the consenting and recruitment of eligible patients!",
        members: [
            { name: "Kathryn Farmer", role: "Research Coordinator" },
            { name: "Dr. Sita Gourishankar", role: "PI" }
        ]
    },
    {
        id: 20,
        name: "University of Montreal CHUM",
        city: "Montreal",
        state: "Quebec",
        country: "Canada",
        coordinates: { lat: 45.5115, lng: -73.5579 },
        dayNumber: 8,
        superlative: "PI support is essential!",
        superlativeDescription: "These sites have great PI involvement in the consenting and recruitment of eligible patients!",
        members: [
            { name: "Majda Belkaid", role: "Research Coordinator" },
            { name: "Dr. Heloise Cardinal", role: "PI" }
        ]
    },
    // Day 9 - Self-motivated!
    {
        id: 21,
        name: "McGill University",
        city: "Montreal",
        state: "Quebec",
        country: "Canada",
        coordinates: { lat: 45.5048, lng: -73.5772 },
        dayNumber: 9,
        superlative: "Self-motivated!",
        superlativeDescription: "These sites are well managed and organized and consistently recruit with little to no central site assistance!",
        members: [
            { name: "Norka Rios", role: "Research Coordinator" },
            { name: "Effrosyne Tsirella", role: "Research Coordinator" },
            { name: "Dr. Marcelo Cantarovich", role: "PI" },
            { name: "Dr. Rita Suri", role: "Co-I" }
        ]
    },
    {
        id: 22,
        name: "VCU University",
        city: "Richmond",
        state: "Virginia",
        country: "USA",
        coordinates: { lat: 37.5485, lng: -77.4530 },
        dayNumber: 9,
        superlative: "Self-motivated!",
        superlativeDescription: "These sites are well managed and organized and consistently recruit with little to no central site assistance!",
        members: [
            { name: "Meron Zeleke", role: "Research Coordinator" },
            { name: "Shawn Fenner", role: "Research Coordinator" },
            { name: "Dr. Dhiren Kumar", role: "PI" }
        ]
    },
    {
        id: 23,
        name: "Royal Free Hospital",
        city: "London",
        state: "",
        country: "UK",
        coordinates: { lat: 51.5535, lng: -0.1650 },
        dayNumber: 9,
        superlative: "Self-motivated!",
        superlativeDescription: "These sites are well managed and organized and consistently recruit with little to no central site assistance!",
        members: [
            { name: "Jona Guevarra", role: "Research Nurse" },
            { name: "Hibo Mahdi", role: "Research Nurse" },
            { name: "Dr. Rhys Evens", role: "PI" }
        ]
    },
    // Day 10 - The New USA team!
    {
        id: 24,
        name: "University of Pennsylvania",
        city: "Philadelphia",
        state: "Pennsylvania",
        country: "USA",
        coordinates: { lat: 39.9496, lng: -75.1938 },
        dayNumber: 10,
        superlative: "The New USA team!",
        superlativeDescription: "These are the 3 newest sites from the USA!",
        members: [
            { name: "Stacy Lau", role: "Research Manager" },
            { name: "Anisha Bhandari", role: "Research Coordinator" },
            { name: "Dr. Roy Bloom", role: "PI" }
        ]
    },
    {
        id: 25,
        name: "University of Minnesota",
        city: "Minneapolis",
        state: "Minnesota",
        country: "USA",
        coordinates: { lat: 44.9721, lng: -93.2323 },
        dayNumber: 10,
        superlative: "The New USA team!",
        superlativeDescription: "These are the 3 newest sites from the USA!",
        members: [
            { name: "Mary Farnsworth", role: "Research Coordinator" },
            { name: "Adele Poser", role: "Research Coordinator" },
            { name: "Elise Reed", role: "Research Coordinator" },
            { name: "Dr. Arthur Matas", role: "PI" }
        ]
    },
    // Day 11 - Team players!
    {
        id: 26,
        name: "The Ottawa Hospital",
        city: "Ottawa",
        state: "Ontario",
        country: "Canada",
        coordinates: { lat: 45.3929, lng: -75.7200 },
        dayNumber: 11,
        superlative: "Team players!",
        superlativeDescription: "CARSK is an international study with some sites as close as 4 km apart! These sites have accepted a transfer of a research patient so they can continue in the trial in their randomization arm.",
        members: [
            { name: "Jennifer Biggs", role: "Research Coordinator" },
            { name: "Dr. Greg Knoll", role: "PI" }
        ]
    },
    {
        id: 27,
        name: "St. Joseph's Hospital (Hamilton)",
        city: "Hamilton",
        state: "Ontario",
        country: "Canada",
        coordinates: { lat: 43.2557, lng: -79.8711 },
        dayNumber: 11,
        superlative: "Team players!",
        superlativeDescription: "CARSK is an international study with some sites as close as 4 km apart! These sites have accepted a transfer of a research patient so they can continue in the trial in their randomization arm.",
        members: [
            { name: "Andrea Mezetti", role: "Research Coordinator" },
            { name: "Taylor Dondas", role: "Research Coordinator" },
            { name: "Dr. Christine Ribic", role: "PI" }
        ]
    },
    {
        id: 28,
        name: "Barts Health NHS Trust",
        city: "London",
        state: "",
        country: "UK",
        coordinates: { lat: 51.5182, lng: -0.0595 },
        dayNumber: 11,
        superlative: "Team players!",
        superlativeDescription: "CARSK is an international study with some sites as close as 4 km apart! These sites have accepted a transfer of a research patient so they can continue in the trial in their randomization arm.",
        members: [
            { name: "Anika Anderson", role: "Research Nurse" },
            { name: "Dr. Kieran Mccafferty", role: "PI" }
        ]
    },
    // Day 12 - Doubled recruitment target!
    {
        id: 29,
        name: "University of Arizona",
        city: "Tucson",
        state: "Arizona",
        country: "USA",
        coordinates: { lat: 32.2319, lng: -110.9501 },
        dayNumber: 12,
        superlative: "Doubled recruitment target!",
        superlativeDescription: "Arizona is the only center in the CARSK trial that has doubled their recruitment in the CARSK study!",
        members: [
            { name: "Fred Rauh", role: "Research Coordinator" },
            { name: "Dr. Ariyamuthu", role: "PI" }
        ]
    }
];

// Group centers by day number from spreadsheet
function assignCentersToDays(centers, calendarDays) {
    const dayAssignments = [];

    for (let dayNum = 1; dayNum <= 12; dayNum++) {
        const centersForDay = centers.filter(c => c.dayNumber === dayNum);
        const calendarDay = calendarDays[dayNum - 1];

        // Get superlative from first center of the day (all centers on same day share superlative)
        const superlative = centersForDay.length > 0 ? centersForDay[0].superlative : '';
        const superlativeDescription = centersForDay.length > 0 ? centersForDay[0].superlativeDescription : '';

        dayAssignments.push({
            day: dayNum,
            calendarDay: calendarDay,
            superlative: superlative,
            superlativeDescription: superlativeDescription,
            centers: centersForDay.map(c => ({
                ...c,
                prize: CALENDAR_CONFIG.prizePerCenter
            }))
        });
    }

    return dayAssignments;
}

// Generate the day assignments
const DAY_ASSIGNMENTS = assignCentersToDays(TRANSPLANT_CENTERS, CALENDAR_DAYS);

// Gift box colors
const GIFT_COLORS = ['red', 'green', 'blue', 'purple', 'gold', 'pink'];

// Helper to get recruitment count for a center
function getRecruitmentCount(centerId) {
    return RECRUITMENT_COUNTS[centerId] || 0;
}

// Export for use in other modules
window.CARSK_DATA = {
    config: CALENDAR_CONFIG,
    calendarDays: CALENDAR_DAYS,
    centers: TRANSPLANT_CENTERS,
    dayAssignments: DAY_ASSIGNMENTS,
    giftColors: GIFT_COLORS,
    recruitmentCounts: RECRUITMENT_COUNTS,
    getRecruitmentCount: getRecruitmentCount
};

// Log assignment summary
console.log('📅 CARSK Advent Calendar - Center Assignments:');
DAY_ASSIGNMENTS.forEach(day => {
    const date = day.calendarDay.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    console.log(`Day ${day.day} (${date}) - "${day.superlative}": ${day.centers.map(c => c.name).join(', ')}`);
});
