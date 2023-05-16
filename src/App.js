import { Add, AddAlarm, AddAlarmSharp, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';

import './App.css';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';
import Pin from './Components/Pin';
import Data from './Components/Data';

function App() {
     useEffect(()=>{
          const allIcon = document.querySelectorAll(".iconContainer");
          function setMenuActive(){
               allIcon.forEach(n => n.classList.remove("active"));
               this.classList.add("active");
               
          }

          allIcon.forEach(n => n.addEventListener('click', setMenuActive))
     }, []);


  return (
    <div className="App">
      <div className="menuContainer"> 
      <img src ="https://purepng.com/public/uploads/thumbnail/purepng.com-circled-pinterest-logologosiconsflat-designcircled-logoscircled-iconsiconflatminimalistlogo-design-31151993597321hgz.png" 
      alt="pin" className="logo"/> 

      <div className = "subMenu">
      <div>
           <MenuContainer icon={<Person/>}/>
           <MenuContainer icon={<Notifications/>}/>
           <MenuContainer icon={<Chat/>}/>
      </div>
      <div>
           <MenuContainer icon={<FavoriteRounded/>}/>
          
     </div>
          <div>
           <MenuContainer icon={<QuestionMark/>}/>
           <MenuContainer icon={<Add/>}/>
          </div> 
     </div>
      </div>

     <main>
       <div className="searchBox">
          <input type="text" placeholder="Search..."/>
          <div className="search">
          <img src ="https://png.pngtree.com/png-clipart/20220620/ourmid/pngtree-arrow-shape-black-simple-direction-png-image_5235840.png"alt="arrowphoto"/>
          </div>
       </div>

       <div className="mainContainer">

          {
               Data && Data.map((data) =>  <Pin key = {data.id} pinSize={data.size}/> )}
         
         
       </div>
     </main>
  </div>  
  )
}

export default App;
