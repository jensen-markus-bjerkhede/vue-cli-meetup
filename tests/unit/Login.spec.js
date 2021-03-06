import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue';

describe('Login.vue', () => {
    it('Should show login form', () => {
        const wrapper = shallowMount(Login, {

        });
        expect(wrapper.find('.login-form').exists()).toBe(true);
    });
    it('Should show login view when user has logged in', async () => {
        const wrapper = shallowMount(Login, {

        });
        expect(wrapper.find('.login-view').exists()).toBe(false);
        const expected = "Markus";
        wrapper.find(".login-form").find("input").setValue(expected);
        await wrapper.find(".login-button").trigger('click');

        const actual = wrapper.find(".login-name").text();
        expect(wrapper.find('.login-view').exists()).toBe(true);
        expect(actual).toMatch(expected);
    });
});
//if time check if displays logged in name when logged in