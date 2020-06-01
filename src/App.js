import React from "react";
// import { BasicData } from "./components/BasicData";
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Chart from './components/Chart';
var Component = React.Component;




const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'Graphs',
    label: 'Graphs',
  },
  {
    name: 'Facts',
    label: 'Facts',
    
  },

  {
    name: 'More Information',
    label: 'More Information',
    
  },
]

class App extends Component {
  render() {
     return (
      <div>
       <Sidebar items={items} />
       <Welcome/>
     
       </div>
     );
   }
 }
 export default App;

  