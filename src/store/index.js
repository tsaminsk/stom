import Vue from 'vue';
import Vuex from 'vuex';
import data from '../assets/data/data';

Vue.use(Vuex);

export const state = () => (data);

export const getters = {
    setHeader: state => state.header,

    setNavs: state => state.nav,

    setAppParamsButton: state => state.appParamsButton,

    setServicesParams: state => state.servicesParams,

    setAppParamsButton_2: state => state.appParamsButton_2,

    setPreferences: state => state.preferences,

    setAbout: state => state.about,

    setNumbers: state => state.numbers,

    setFooterInfo: state => state.footerInfo,
}

export const store = new Vuex.Store({
    state,
    getters
});

