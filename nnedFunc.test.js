const nned = require('./nnedFunc');

describe('nned', () => {
    test('Корректоное значение', () => {
        expect(nned([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Лишнее', () => {
        expect(nned([1, 2, undefined, null, 3])).toEqual(['1', '2', '3'])
    })
    test('Пустой массив', () => {
        expect(nned([])).toEqual([])
    })
})