const compileAndoidCode = require('../src/compileAndoidCode');

test('throws an error', () => {
    expect(compileAndoidCode).toThrow();
    expect(compileAndoidCode).toThrow(Error);
})

test('use a sting that must contain with error message', () => {
    expect(compileAndoidCode).toThrow(`u are using the wrong JDK!`);
    expect(compileAndoidCode).toThrow(/JDK/);
})

test('Or you can match an exact error message using a regexp like below', () => {
    expect(compileAndoidCode).toThrow(/u are using the wrong JDK$/); //should be error
    expect(compileAndoidCode).toThrow(/u are using the wrong JDK!$/); // should be pass
})