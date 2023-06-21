const delay = require('./delay');

describe('delay',  () => {
  it('Корректное значение', async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  })

  it('Корректное значение', () => {
    delay(() => 5 + 5, 1000).then(data => {
      expect(sum).toBe(10);
    })
  })
}) 