import { addFood } from "./actions";
import expect from 'expect';
import { addPotato } from '../testdata/actions';
import {potato} from '../testdata/food';

describe('addFood', () => {
    it('creates the correct action' , ()=>{
      expect(addFood(potato)).toEqual(addPotato);
    })
})