const fetchData = require("../src/fetchData")

test(`the data is peanut butter`, () => {
    return expect(fetchData(false)).resolves.toBe('peanut butter');
});

test(`the fetch fails with an error`, () => {
    return expect(fetchData(true)).rejects.toMatch('Error: Data gagal diambil');
});