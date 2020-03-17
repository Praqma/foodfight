import { addFood } from "./actions";
import expect from 'expect';
import { addPotato } from '../testdata/actions';

describe('addFood', () => {
    it('creates the correct action' , ()=>{
      expect(addFood({name:'potato'})).toEqual(addPotato);
    })
})