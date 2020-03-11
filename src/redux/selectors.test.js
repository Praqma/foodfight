import { getAllFood } from './selectors';

describe('selectors', () => {

  it('allFood gives you all food', ()=>{
      let state = {foodstuff:{allFood: ['apple','potato']}};

    expect(getAllFood(state)).toEqual({allFood: ['apple','potato']});
  });

  
});