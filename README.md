# CARSK Advent Calendar 2025

An animated web-based advent calendar celebrating research coordinators from the CARSK clinical trial across 29 transplant centers worldwide.

## Project Overview

- **Purpose**: Celebrate and recognize research coordinators from December 9-24, 2025
- **Centers**: 29 transplant centers across Canada, USA, UK, Germany, and Spain
- **Days**: 12 working days (excluding weekends)
- **Prize**: Each center receives one $50 gift card to share among their team

## Quick Start

```bash
npm install
npm start
```

Opens at `http://localhost:8080`

## Project Structure

```
carsk_advent_calendar/
├── index.html              # Main entry point
├── package.json            # Dependencies (http-server, xlsx)
├── css/
│   ├── styles.css          # Base styles, modal, snowfall
│   ├── map.css             # Leaflet map, Santa animation
│   ├── calendar.css        # Gift box grid & animations
│   └── animations.css      # Decorative effects
├── js/
│   ├── data.js             # Center data, day assignments (EDIT THIS FOR CHANGES)
│   ├── map.js              # Leaflet world map, Santa flight logic
│   ├── calendar.js         # Gift boxes, modal display
│   ├── animations.js       # Snowfall, stars
│   └── main.js             # Date override, dev utilities
└── assets/
    ├── images/
    │   └── steve_chadban.png   # Dr. Chadban's photo (Santa's face)
    └── centers_spreadsheet.xlsx # Source data for centers
```

## Key Features

### 1. Date Override (Testing)
- Use the date picker in the header to preview any date
- URL parameter: `?date=2025-12-15`
- Console: `CARSK_DEV.gotoDay(5)` jumps to day 5

### 2. World Map (Leaflet.js)
- Accurate geographic positioning using OpenStreetMap/CARTO tiles
- Red markers = awaiting gift, Gold markers = gift delivered
- Click markers to see center info popup

### 3. Santa Animation
- Dr. Chadban's face on Santa in a sleigh with reindeer
- Santa is ALWAYS visible in the upper-left of the map
- Flies to centers when a gift is opened, drops gift emoji
- Returns to starting position after visiting all centers for the day

### 4. Gift Boxes
- 12 boxes (one per working day)
- Locked (future) / Available (today/past) / Opened states
- Opening animation with particles and confetti
- Modal shows all team members (PIs + Coordinators) and prize

### 5. Calendar Logic
- 29 centers distributed across 12 days (2-3 centers per day)
- Uses seeded random shuffle for consistent assignment
- Each center gets ONE $50 gift card
- ALL team members are recognized by name

## Data Structure (js/data.js)

### Center Format
```javascript
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
}
```

### Day Assignment Format
```javascript
{
    day: 1,
    calendarDay: { day: 1, date: Date, dayOfWeek: 'Tuesday' },
    centers: [ /* 2-3 centers */ ]
}
```

## Modifying Center Data

1. Edit `assets/centers_spreadsheet.xlsx` with new data
2. Run the parse script or manually update `js/data.js`
3. The `TRANSPLANT_CENTERS` array contains all 29 centers
4. The `assignCentersToDays()` function handles distribution

### To Re-parse Spreadsheet
```bash
node -e "
const XLSX = require('xlsx');
const wb = XLSX.readFile('assets/centers_spreadsheet.xlsx');
const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
// Group by center and output...
"
```

## Developer Console Commands

```javascript
CARSK_DEV.gotoDay(n)      // Jump to day n (1-12)
CARSK_DEV.playSanta(n)    // Play Santa animation for day n
CARSK_DEV.resetGifts()    // Clear all opened gifts
CARSK_DEV.showData()      // Log all data to console
CARSK_DEV.listDays()      // List all day assignments
```

## Dependencies

- **Leaflet.js** (CDN): Geographic mapping
- **Google Fonts**: Mountains of Christmas, Poppins
- **CARTO Dark Tiles**: Map styling
- **xlsx** (dev): Spreadsheet parsing

## Calendar Schedule

| Day | Date | Weekday |
|-----|------|---------|
| 1 | Dec 9 | Tuesday |
| 2 | Dec 10 | Wednesday |
| 3 | Dec 11 | Thursday |
| 4 | Dec 12 | Friday |
| 5 | Dec 15 | Monday |
| 6 | Dec 16 | Tuesday |
| 7 | Dec 17 | Wednesday |
| 8 | Dec 18 | Thursday |
| 9 | Dec 19 | Friday |
| 10 | Dec 22 | Monday |
| 11 | Dec 23 | Tuesday |
| 12 | Dec 24 | Wednesday |

## Known Issues / Future Improvements

- [ ] Santa animation could be more elaborate (trail particles, etc.)
- [ ] Add sound effects for gift opening
- [ ] Mobile responsiveness could be improved
- [ ] Add countdown timer to next gift
- [ ] Consider adding sharing functionality

## For Future Claude Code Sessions

When resuming work on this project:

1. **Read this README first** for project context
2. **Check `js/data.js`** for current center assignments
3. **Use `npm start`** to run the dev server
4. **Test with date override** before making changes
5. **Key files to modify**:
   - `js/data.js` - Center data and assignments
   - `js/calendar.js` - Gift/modal logic
   - `js/map.js` - Map and Santa animation
   - `css/map.css` - Santa styling

The project uses vanilla JavaScript with no build step - changes are immediately visible on page refresh.
