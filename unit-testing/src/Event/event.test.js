import React from 'react';
import {shallow} from 'enzyme';

import Event from './event';

describe('<Event />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Event onClick={()=>console.log('Click')}/>);
        wrapper.find('button').simulate('click');
    });
});