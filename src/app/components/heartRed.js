import React, { useState } from 'react';

const HeartComponent = () => {
     const [clicked, setClicked] = useState(false);

     const handleClick = () => {
          setClicked(!clicked);
     };

     return (
          <div>
               <i
                    className={`fa${clicked ? 's' : 'r'} fa-heart`}
                    style={{ color: clicked ? 'red' : 'black', cursor: 'pointer' }}
                    onClick={handleClick}
               ></i>
          </div>
     );
};

export default HeartComponent;
