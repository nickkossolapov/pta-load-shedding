import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

export default class DropDown extends Component {
  constructor(props) {
    super(props);

    this.type = props.type;
    this.typeArray = [...Array(parseInt(props.size)).keys()];
    this.typeName = this.capitalizeFirstLetter(props.type);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <DropdownButton id={this.type+"Dropdown"} title={this.typeName}>
        {this.typeArray.map(item => {
          return (
            <MenuItem
              key={item}
              eventKey={item+1}
              onSelect={(key) => this.props.onChange(key.toString())}
              active={(item+1).toString() === this.props[this.type]}>
                {item+1}
            </MenuItem>
          )
        })}
      </DropdownButton>
    );
  }
}
