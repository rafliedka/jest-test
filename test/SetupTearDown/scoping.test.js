const { isCity, initializeCityDatabase, initializeFoodDatabase, isValidCityFoodPair } = require('../../src/isCity');

beforeEach(() => {
    return initializeCityDatabase();
});

test(`city database has Vienna`, () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test(`city database has San Juan`, () => {
    expect(isCity('San Juan')).toBeTruthy();
});

// describe block
describe(`matching cities to foods`, () => {
    beforeEach(() => { // setup just for in this block
        return initializeFoodDatabase();
    });

    test(`food database has Vienna`, () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBeTruthy();
    });

    test(`food database has San Juan`, () => {
        expect(isValidCityFoodPair('San Juan', 'Mofogo')).toBeTruthy();
    });
});