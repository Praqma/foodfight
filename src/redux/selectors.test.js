import { getAllFood, getFoodByStorage, addEmptyFood } from './selectors';
import {applePotatoState, initialState} from '../testdata/storeState.js'
import {applePotato as applePotatoAll} from '../testdata/allFood.js'
import {applePotato as applePotatoByStorage} from '../testdata/byStorage'

describe('getAllFood', () => {

  it('gives you all food', ()=>{
    expect(getAllFood(applePotatoState)).toEqual(applePotatoAll);
  });
});
describe('getFoodByStorage', () => {

  it('addsEmptyList to storages', ()=>{
    expect(addEmptyFood({'1':{name:'stuff'}})).toEqual({'1':{name:'stuff', food: []}})
  });
  it('dont crash ', ()=>{
    expect(addEmptyFood({})).toEqual({})
  });

  it('can deal with empty state', ()=>{
    expect(getFoodByStorage(initialState)).toEqual({});
  });
  it('getFoodByStorage divides the food by storage', ()=>{
    expect(getFoodByStorage(applePotatoState)).toEqual(applePotatoByStorage);
  });
  
});