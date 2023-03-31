import React from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';



// useEffect(() => {
//   function disableRightClick(event) {
//     event.preventDefault();
//   }
//   window.addEventListener('contextmenu', disableRightClick);
//   return () => {
//     window.removeEventListener('contextmenu', disableRightClick);
//   };
// }, []);


const App = () => {

  

  return (
    <div className='App'>
 <Header></Header>
 <Content></Content>
    </div>
  );
};

export default App;