import { retornaArreglo } from "../../base/07-deses-arr"

describe('Sui test 07-des-arr', () => {
  test('should test Arr destructuration', () => {
    const [letras, numeros] = retornaArreglo();
    expect(letras).toBe('ABC')
    expect(typeof letras).toBe('string')
    expect(numeros).toBe(123)
    expect(typeof numeros).toBe('number')
  })
  
})