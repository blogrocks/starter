/**
 * Created by zhengquanbai on 16/7/28.
 */
import React, {Component} from 'react';
import TabList from './TabList';

export default class CountriesAndCities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCountry: this.props.countries[0]
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (country, index, event) {
        this.setState({currentCountry: country});
        event.preventDefault();
    }
    render() {
        let countries = this.props.countries
            ,cities = this.props.citiesPerCountry[this.state.currentCountry];

        return (
          <div>
              <div>
                  <TabList key="countriesList" elements={countries} clickHandler={this.handleClick} />
              </div>
              <div>
                  <TabList key={this.state.currentCountry}
                           elements={cities}
                           clickHandler={(city, index, event) => {
                                               event.preventDefault();
                                        }} />
              </div>
          </div>
        );
    }
}

CountriesAndCities.propTypes = {
    countries: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    citiesPerCountry: React.PropTypes.objectOf(React.PropTypes.arrayOf(React.PropTypes.string)).isRequired
};