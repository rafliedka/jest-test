const { initializeCityDatabase, clearCityDatabase, isCity } = require("../../src/isCity")

beforeAll(() => {
    initializeCityDatabase();
})

afterAll(() => {
    clearCityDatabase();
})

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has san juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});