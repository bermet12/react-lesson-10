const fetchData = require('./promiseFunc');

test('promise testing', async () => {
    const data = await fetchData();
    expect(data).toBe('hello');
})
