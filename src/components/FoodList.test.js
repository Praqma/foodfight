import React from 'react';
import FoodList from './FoodList';
import renderer, { create } from 'react-test-renderer';
import createStore from '../redux/store.js'
import { Provider } from 'react-redux'

test('renders the list', () => {

    const component  = renderer.create(
        <Provider store={createStore}><FoodList/></Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})  