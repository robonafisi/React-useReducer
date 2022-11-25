import {useState, useMemo} from 'react';
import './App.css';

 function App() {
    const [numbers] = useState([10,20,30]);

    const total = useMemo(() => numbers.reduce((acc, number) => acc + numbers, 0),
    [numbers]
    );

    const [names] = useState(["John","Paul","George","Ringo"]);

    const sortNames = [...names].sort();

   return(
    <div>
       Total: {total}<br></br>
       {names}<br></br>
       {sortNames}<br></br>
    </div>
   );
 }

 export default App;