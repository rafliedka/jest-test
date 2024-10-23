function fetchData(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject('Error: Data gagal diambil'); // Jika kondisi gagal, panggil reject
            } else {
                resolve('peanut butter'); // Jika sukses, panggil resolve
            }
        }, 1000);
    });
}

module.exports = fetchData;