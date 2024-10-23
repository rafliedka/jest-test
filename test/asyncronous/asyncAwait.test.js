const fetchData = require('../../src/fetchData');

test(`the data is peanut butter`, async () => {
    const data = await fetchData(false); // Pass false to succeed
    expect(data).toBe('peanut butter');
});

test(`the fetch fails with an error`, async () => {
    expect.assertions(1);
    try {
        await fetchData(true); // Pass true to fail
    } catch (e) {
        expect(e).toMatch('Error: Data gagal diambil'); // Match the exact error message
    }
});