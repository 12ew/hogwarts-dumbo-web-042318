// name: 'Mudblood',
// specialty: 'Mediocre magic',
// greased: false,
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
// 'highest medal achieved': 'bronze'
import React, { Component } from 'react';
import Pig from './Pig'

class PigList extends Component {
    constructor (props) {
        super(props)
    }
  
    render() {
        // console.log(this.props.hogs);
        
        const hogsArr = this.props.hogs
        console.log(hogsArr);


        return (
            <div>
                {hogsArr.map((hog) => {return <Pig hog={hog} /> })}
            </div>
        );
    }
}

export default PigList;
