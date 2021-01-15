import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../base/data/heroes";

describe('Suit Test Promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe async', ( done ) => {
    const id = 1;
    getHeroeByIdAsync(id)
    .then((res) => {
      expect(res).toEqual(heroes[0]);
      done();
    });
  });

  test('manda error en caso de que no encuentre un heroe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
    .catch( err => {
      expect(err).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
  
});