import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';


describe('Has textarea is ', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = mount(<CommentBox />);
        wrapper.find('textarea').simulate('change', { target: { value: 'new comment'}});
        wrapper.update();
    });
    
    afterEach( () => {
        wrapper.unmount();
    });

    it('Has a textarea and a button', () => {
        expect(wrapper.find('textarea').length).toEqual(1);
        expect(wrapper.find('button').length).toEqual(1);
    });

    it('Has a textwrap where use can type', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    });

    it('Textarea got empty when form submit happen', () => {
        wrapper.find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('')
    });

});