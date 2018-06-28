// name: 'Mudblood',
// specialty: 'Mediocre magic',
// greased: false,
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
// 'highest medal achieved': 'bronze'
import React from 'react';


class Pig extends React.Component {
    constructor (props) {
        super(props)
    }
    


    render () {
        console.log(this.props.hog);
        const weight = this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
        const prize = this.props.hog["highest medal achieved"]
        const { name, specialty, greased} = this.props.hog
        // console.log(prizes);
        // console.log(specialty);
        
        
        return (
            <div> 
                <img src={'../hog-imgs/augustus_gloop.jpg'} alt=""/>
                <h3>Name: {name}</h3>
                <h4>Specialty: {specialty}</h4>
                <h4>greased: {greased ? "greased up" : "clean"}</h4>
                <h4>weight: {weight}</h4>
                <h4>Prize: {prize}</h4>
                <br />
                <hr />
            </div> 
        );

    }
}

export default Pig;