import React from 'react';
import AddFood from './AddFood';
import renderer from 'react-test-renderer';

test('has a add button', () => {
    const component  = renderer.create(
        <AddFood></AddFood>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})