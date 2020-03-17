import { addFood } from "./actions";
import expect from 'expect';
import { ADD_FOOD } from './actionTypes';

describe('addFood', () => {
    it('creates the correct action' , ()=>{
    const addAction = {
        type: ADD_FOOD,
        payload: {name:'potato'}
      };
      expect(addFood({name:'potato'})).toEqual(addAction);
    })
})