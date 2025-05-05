import React from 'react';
import Header from './components/Header';
import './App.css';
import Herosection from './components/Herosection.jsx';
import TopBarOptions from './components/TopBarOptions.jsx';
import Footer from './components/footer.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
     
      <div className='main'>
        <TopBarOptions/>
      </div>
      <Footer/>
    </div>
    

  );
}

export default App;
