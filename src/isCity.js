let cityDatabase = [];
let foodDatabase = [];

function initializeCityDatabase() {
    cityDatabase = ['Vienna', 'San Juan'];
}

function clearCityDatabase() {
    cityDatabase = [];
}

function isCity(city) {
    return cityDatabase.includes(city);
}

function initializeFoodDatabase() {
    foodDatabase = {
        'Vienna': 'Wiener Schnitzel',
        'San Juan': 'Mofogo'
    }
}

function isValidCityFoodPair(city, food) {
    return foodDatabase[city] === food
}

module.exports = {
    initializeCityDatabase,
    clearCityDatabase,
    isCity,
    initializeFoodDatabase,
    isValidCityFoodPair
};