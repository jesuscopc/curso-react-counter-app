import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../base/data/heroes";

describe('Sui Test 08-imp-exp', () => {
  test('deb retirnar el hero por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroBYId = heroes.find( e => e.id === id);
    expect(heroe).toEqual(heroBYId); 
  })

  test('debe traer los heroes por owner', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const heroesTest = heroes.filter( e => e.owner === owner);
    expect(heroes).toEqual(heroesTest);
    expect(heroes.length).toBe(heroesTest.length);
  })  
  
})
