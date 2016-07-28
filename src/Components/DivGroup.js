/**
 * Created by zhengquanbai on 16/7/28.
 */
import React, {Component} from 'react';
export default class DivGroup extends Component {
    render() {
        var divs = [];
        for(let i = 0; i < this.props.amount; i++) {
            divs.push(<div key={i}
                           className="div-group"
                           onClick={() => {
                                this.props.onClick(i);
                           }}></div>);
        }
        return (
            <div className="div-group-wrapper">
                {divs}
            </div>
        );
    }
}

DivGroup.propTypes = {
    amount: React.PropTypes.number,
    onClick: React.PropTypes.func
};
DivGroup.defaultProps = {
    amount: 1,
    onClick: () => {}
};