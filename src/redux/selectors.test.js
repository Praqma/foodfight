import { getAllFood } from './selectors';
import {applePotatoState} from '../testdata/storeState.js'
import {applePotato} from '../testdata/allFood.js'

describe('selectors', () => {

  it('getAllFood gives you all food', ()=>{
    expect(getAllFood(applePotatoState)).toEqual(applePotato);
  });
});