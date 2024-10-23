const fetchData = require("../../src/fetchData")

test(`the data is peanut butter`, async () => {
    await expect(fetchData(false)).resolves.toBe('peanut butter');
});

test(`the fetch fails with an error`, async () => {
    await expect(fetchData(true)).rejects.toMatch('Error: Data gagal diambil');
});

