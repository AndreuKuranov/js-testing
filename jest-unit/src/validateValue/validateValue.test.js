const validateValue = require('./validateValue');

test('Валидация значения', () => {
  expect(validateValue(50)).toBe(true);
})

describe('validateValue', () => {
  it('Корректное значение', () => {
    expect(validateValue(50)).toBe(true);
  })
  it('Меньше корректного', () => {
    expect(validateValue(-1)).toBe(false);
  })
  it('Больше корректного', () => {
    expect(validateValue(101)).toBe(false);
  })
  it('Пограничное значение снизу', () => {
    expect(validateValue(0)).toBe(true);
  })
  it('Пограничное значение сверху', () => {
    expect(validateValue(100)).toBe(false);
  })
})