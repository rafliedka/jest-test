const sum = require('../src/sum');

test('add floating point numbers', () =>{
    expect(sum(1.5, 2.2)).toBeCloseTo(3.7)
})