import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';




const App = () => {

  return (
    <div className='App'>
 <Header></Header>
 <Content></Content>
    </div>
  );
};

export default App;