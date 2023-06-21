const square = require('./square');

// jest.spyOn(object, methodName) - Создает фиктивную функцию, похожую на jest.fn, но также отслеживающую вызовы object[methodName]. Возвращает фиктивную функцию Jest

describe('square', () => {
  let mockValue;

  beforeEach(() => {}) // Перед каждым тестом

  beforeAll(() => {}) // Один раз перед всеми тестами

  it('Корректное значение', () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5); // меньше чем 5
    // expect(square(2)).toBeGreaterThan(3); // больше чем 3
    // expect(square(2)).not.toBeUndefined(); // не равно Undefined
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    // toBeCalledTimes - количество вызовов метода 'pow'
    expect(spyMathPow).toBeCalledTimes(1);
  })

  it('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  })

  // После каждым тестом
  afterEach(() => {
    jest.clearAllMocks() // Очищает свойства mock.calls, mock.instances, mock.contexts и mock.results всех моков. Эквивалентно вызову .mockClear() для каждой имитируемой функции.
  })

  // Один раз после всеми тестами
  afterAll(() => {})
})