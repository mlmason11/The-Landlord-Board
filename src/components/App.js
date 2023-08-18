import Heading from './Heading'
import Footer from './Footer';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Heading />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
