/**
 * Created by zhengquanbai on 16/7/27.
 */
import React, {Component} from 'react';
import TabList from './TabList';
import CountriesAndCities from './CountriesAndCities';

export default class Root extends Component {
    onDivGroupClick(nth) {
        alert(nth);
    }
    render() {
        let countries = ["China", "USA", "Japan"];
        let citiesPerCountry = {
            "China": ["Shanghai", "Beijing", "Tianjin"],
            "USA": ["New York", "Washington"],
            "Japan": ["Tokyo", "大阪"]
        };
        return (
            <CountriesAndCities countries={countries} citiesPerCountry={citiesPerCountry} />
        );
    }
}