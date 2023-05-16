import React from 'react';

function Pin({pinSize}) {
  return <div className={`pin ${pinSize}`}>
    <img className="mainPic" src = "https://images.pexels.com/photos/16199050/pexels-photo-16199050.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
  
   <div className="content">
      <h3>Sample Name</h3>

      <div className="search">
               <img src="https://img.freepik.com/free-icon/rotated-right-arrow_318-80497.jpg?size=626&ext=jpg&ga=GA1.1.100535258.1680435002&semt=robertav1_2_sidr" alt="--"/>
          </div>
   </div>
  </div>;
  
}

export default Pin;