import Vue from 'vue';
import Header from "./sections/Header";
import Nav from "./sections/Nav";
import Slider from "./sections/Slider";
import Services from "./sections/Services";
import Preferences from "./sections/Preferences";
import About from "./sections/About";
import Numbers from "./sections/Numbers";
import Partners from "./sections/Partners";
import Contacts from "./sections/Contacts";
import Footer from "./sections/Footer";
import Button from "./blocks/Button";

const components = {
            Header,
            Nav,
            Slider,
            Services,
            Preferences,
            About,
            Numbers,
            Partners,
            Contacts,
            Footer,
            Button
        }

Object.keys(сomponents).forEach(key => {
    Vue.component(key, components[key])
})
