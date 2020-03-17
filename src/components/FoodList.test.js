import React from 'react';
import FoodList, {mapStateToProps} from './FoodList';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import {applePotatoState, initialState} from '../testdata/storeState.js'
import {applePotato} from '../testdata/allFood.js'

const mockStore = configureStore([]);

describe('FoodList', () => {

    it('renders the list', () => {
        let store = mockStore(initialState);    

        const component  = renderer.create(
            <Provider store={store}><FoodList/></Provider>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })  

    it('renders the list with items', () => {
        let store = mockStore(applePotatoState);    
        const component  = renderer.create(
            <Provider store={store}><FoodList/></Provider>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    }); 
});
describe('mapStateToProps', () => {

    it('sets allFood', () => {
    expect(mapStateToProps(applePotatoState)).toEqual(applePotato);
    }); 
}); 