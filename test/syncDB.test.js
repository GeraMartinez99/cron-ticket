const { syncDB } = require("../task/sync-db")

describe('Pruebas', () => {
    test('Debe ejecutar el proceso dos veces', () => {
        syncDB();
        const times = syncDB();

        expect(times).toBe(2);
    })
})