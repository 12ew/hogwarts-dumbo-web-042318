import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigList from './PigList';

// name: 'Mudblood',
// specialty: 'Mediocre magic',
// greased: false,
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
// 'highest medal achieved': 'bronze'
class App extends Component {
  render() {
    // console.log(hogs);
    
    return (
      <div className="App">
          < Nav />
          {/* <Filter /> */}
          <PigList hogs={hogs} />
      </div>
    )
  }
}

export default App;
