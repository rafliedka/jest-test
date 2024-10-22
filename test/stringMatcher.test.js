test(`there is no 'i' in team`, () => {
    expect(`team`).not.toMatch(/i/);
});

test(`but there is a 'stop' in cristopher`, () => {
    expect(`cristopher`).toMatch(/stop/);
});