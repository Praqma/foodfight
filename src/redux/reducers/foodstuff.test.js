import reducer from './foodstuff';
import expect from 'expect';
import {initial, applePotato, apple} from '../../testdata/allFood'
import {addPotato} from '../../testdata/actions'
describe('foodstuff reducer', () => {
  it('should return the initial state', ()=>{
    expect(reducer(undefined, {})).toEqual(initial);
  });

  it('should handle ADD_FOOD',()=>{
   expect(reducer(apple, addPotato)).toEqual(applePotato);
  });
});