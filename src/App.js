import {useState, useMemo} from 'react';
import './App.css';

 function App() {
  const [numbers] = useState([10,20,30]);

  const total = numbers.reduce((acc, number) => acc + number, 0);

   return(
     <div>
     Total: {total}
     </div>
   );
 }

 export default App;