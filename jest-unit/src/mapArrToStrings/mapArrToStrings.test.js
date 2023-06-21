const mapArrToStrings = require('./mapArrToStrings');

// toEqual - рекурсивно проверяет каждое поле объекта или массива

describe('mapArrToStrings', () => {
  it('Корректное значение', () => {
    expect(mapArrToStrings([1, 2 ,3])).toEqual(['1', '2', '3']);
  })
  it('Мешанина', () => {
    expect(mapArrToStrings([1, 2 ,3, null, undefined, 'asfasf'])).toEqual( ['1', '2', '3']);
  })
  it('Пустой массив', () => {
    expect(mapArrToStrings([])).toEqual([]);
  })
  it('Отрицание', () => {
    expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3,4]);
  })
})