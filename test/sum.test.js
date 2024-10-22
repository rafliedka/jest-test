const sum = require('../src/sum');

test ('adds a + b to equal right number', () => {
    expect(sum(1, 2)) //expectation objext
    .toBe(3); //this tobe is the matcher
})