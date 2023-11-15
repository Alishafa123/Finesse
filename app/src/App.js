import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Header from './components/header';
import Home  from './components/home';
import Footer  from './components/Footer';



import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';




function App() {
  return (
   <>
   <Router>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer></Footer>
   </Router>
   
   
   </>
  );
}

export default App;
