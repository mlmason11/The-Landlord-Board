import Heading from './Heading'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Heading />
      <Outlet />
    </div>
  );
}

export default App;
