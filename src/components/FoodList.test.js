import React from 'react';
import FoodList, {mapStateToProps} from './FoodList';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('FoodList', () => {

    it('renders the list', () => {
        let store = mockStore({foodstuff:{allFood: []}});    

        const component  = renderer.create(
            <Provider store={store}><FoodList/></Provider>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })  

    it('renders the list with items', () => {
        let props = {allFood: ['apple','potato']}
        let store = mockStore({foodstuff: props});    
        const component  = renderer.create(
            <Provider store={store}><FoodList/></Provider>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    }); 
});
describe('mapStateToProps', () => {

    it('sets allFood', () => {
    let state = {foodstuff:{allFood: ['apple','potato']}};
    expect(mapStateToProps(state)).toEqual({allFood: ['apple','potato']});
    }); 
}); 