import { getImagen } from "../../base/11-async-await"

describe('Sui Test 11-async-await', () => {
  test('debe retornar el url de la imagen', async() => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  })
  
})
