const { shallow } = require("enzyme");
import CounterApp from '../CounterApp'

describe('Sui Test <CounterApp/>', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('should be render Co(unterApp with sanpshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be render 100 counterApp by default', () => {
    const counter = 100;
    const wrapper = shallow(<CounterApp value={counter}/>);
    const textCounter = wrapper.find('h2').text();
    expect(textCounter).toBe(`${counter}`);
  });
  
  test('should be increment with button +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const textCounter = wrapper.find('h2').text();
    expect(textCounter).toBe('11');
  });

  test('should be increment with button -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const textCounter = wrapper.find('h2').text();
    expect(textCounter).toBe('9');
  });
  
  test('should be reset the default value to when btn reset', () => {
    const wrapper = shallow(<CounterApp value={105}/>);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const textCounter = wrapper.find('h2').text();
    expect(textCounter).toBe('105');

  })
  
  
})
