import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe('Suit - test <PrimeraApp/>>', () => {
  // test('Debe mostrar el mensaje "Hola. soy Goku', () => {
  //   const saludo = 'Hola, soy Goku';
  //   const wrapper = render(<PrimeraApp  saludo={saludo}/>);
  //   expect(wrapper.getByText(saludo)).toBeInTheDocument();
  // }) 

  test('should be show <PrimeraApp/> correctly', () => {
    const saludo = 'Hola, soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
    expect(wrapper).toMatchSnapshot();
  })
  
  test('should be render a custom subtitle', () => {
    const saludo = 'Hola, soy Goku';
    const subtitulo = 'Hi I am Subtitle';
    const wrapper = shallow(
      <PrimeraApp 
        saludo={saludo}
        subtitulo={subtitulo}
      />)
    const textoP = wrapper.find('p').text();
    expect(textoP).toBe(subtitulo); 
  })
  
})
