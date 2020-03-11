import React from 'react';
import {AddFood} from './AddFood';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

test('has a form', () => {
    let store = mockStore({});    
    const component  = renderer.create(
        <Provider store={store}>
            <AddFood/>
        </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})  
