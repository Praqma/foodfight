import React from 'react';
import Food from './Food';
import renderer from 'react-test-renderer';

test('renders the name', () => {
    const component  = renderer.create(
        <Food name='Potato'/>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})  