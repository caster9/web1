//challenge  number one  :
const text = "there is no war in ba sing se";
const wordCount = text.split().length;
console.log("number of words:", wordCount);



//challenge  number two  :
let countries = ['china','japan','south korea','vietnam','malaysia']
let capitals = ['beijing','tokyo','seoul','hanoi','kuala lumpur']

for (let i=0; i< countries.length; i++) {
    let country = countries[i];
    let capital = capitals[i];
    console.log('your country: ${country.chartAT(0).toUpperCase() + country.slice(1)} has the capital named ${capital.chartAT(0).toUpperCase() + capital.slice(1)}.');
}



//challenge  number three  : 
import random

    def vanable_randomizer():
    randomizer = random.randint(0, 3)
        if randomizer == 0:
            return "Your fate is a certain victory."
        elif randomizer == 1:
            return "Your fate is a not so certain victory."
        elif randomizer == 2:
            return "Your fate is an uneasy victory."
        else:
            return "Your fate is unclear, & chosen undead."











//challenge  number four:
function checkSeason(month) {
    // Define the mapping of months to seasons
    const seasons = {
        "autumn": [9, 10, 11],
        "winter": [12, 1, 2],
        "spring": [3, 4, 5],
        "summer": [6, 7, 8]
    };
    
    // Convert the month to lowercase to handle case-insensitivity
    month = month.toLowerCase();
    
    // Check if the input month is valid
    const monthNames = {
        "january": 1, "february": 2, "march": 3, "april": 4,
        "may": 5, "june": 6, "july": 7, "august": 8,
        "september": 9, "october": 10, "november": 11, "december": 12
    };
    
    if (!isNaN(month)) {
        month = parseInt(month);
        if (month < 1 || month > 12) {
            return "Invalid month number. Please enter a number between 1 and 12.";
        }
    } else if (!(month in monthNames)) {
        return "Invalid month name. Please enter a valid month name or number.";
    } else {
        month = monthNames[month];
    }
    
    // Determine the season based on the month
    for (const season in seasons) {
        if (seasons[season].includes(month)) {
            return season;
        }
    }
}

// Example usage:
console.log(checkSeason("March")); // Output: spring
console.log(checkSeason("6"));     // Output: summer