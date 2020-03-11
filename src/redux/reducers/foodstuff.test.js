
import reducer from './foodstuff';
import * as types from '../actions';
import expect from 'expect';
import { ADD_FOOD } from '../actionTypes';

describe('foodstuff reducer', () => {
  it('should return the initial state', ()=>{
    expect(reducer(undefined, {})).toEqual({allFood: []});
  });

  it('should handle ADD_FOOD',()=>{
    const addAction = {
        type: ADD_FOOD,
        payload: {name:'potato'}
      };
   expect(reducer({allFood: ['apple']}, addAction )).toEqual({allFood: ['apple','potato']});
  });
});