import React from 'react';
import {AddFood} from './AddFood';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15';
import {configure } from 'enzyme';


test('has a form', () => {
    configure({ adapter: new Adapter() })
    const component  = renderer.create(
        <AddFood store={'store'}></AddFood>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})  