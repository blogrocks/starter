/**
 * Created by zhengquanbai on 16/7/28.
 */
import React, {Component} from 'react';

export default class TabList extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { active: 0 };
    }

    onClick(i, event) {
        this.setState({active: i});
        this.props.clickHandler(this.props.elements[i], i, event);
    }
    render() {
        var tabs = [], className;
        for (let i = 0; i < this.props.elements.length; i++) {
            if (i == this.state.active) {
                className = "excited";
            } else {
                className = "neutral";
            }

            tabs.push(
                <div key={i}
                   className={className + " tab-list-wrapper-div"}
                   href="#"
                   onClick={((i, event) => {
                       this.onClick(i, event);
                   }).bind(this, i)}>
                    {this.props.elements[i]}
                </div>
            );
        }

        return (
            <div className="list">
                {tabs}
            </div>
        );
    }
}

TabList.propTypes = {
    elements: React.PropTypes.arrayOf(React.PropTypes.string),
    clickHandler: React.PropTypes.func
};
TabList.defaultProps = {
    elements: ["List 1", "List 2", "List 3"],
    clickHandler: () => {}
};