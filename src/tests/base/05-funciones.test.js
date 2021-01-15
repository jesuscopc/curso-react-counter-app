import { getUser, getUsuarioActivo } from '../../base/05-funciones';
describe('Suit Test 05-funciones', () => {

  test('get user should return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };  
    const user = getUser();
    expect(user).toEqual(userTest);
  })

  test('getUsuarioActivo should return an object with a param sended', () => {
    const name = 'Jesus'
    const userActiveTest = {
      uid: 'ABC567',
      username: name
    }
    const user = getUsuarioActivo(name);
    expect(user).toEqual(userActiveTest);
  })
  
})
