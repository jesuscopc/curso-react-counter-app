import { getSaludo } from "../../base/02-template-string";

describe('Sui Test 02-Template String', () => {
  
  test('getSaludo debe retornar Hola Fernando!', () => {
    const nombre = 'Fernando'; 
    const res = getSaludo(nombre);
    expect(res).toBe(`Hola ${nombre}!`);  
  });

  test('getSaludo should be return Hola Carlos! if there is not name', () => {
    const res = getSaludo();
    expect(res).toBe(`Hola Carlos!`);
  })

})
