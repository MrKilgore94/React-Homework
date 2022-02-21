import { useState } from "react";
import './containerstyle.css';

const MainContainer = (props) => {
 
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="main-container">
      <div>
        <h1>{props.header}</h1>
        <button class='button1' onClick={() => setShowContent(!showContent)}>
            {showContent ? 'hide' : 'show'}
        </button>
      </div>
    
      {showContent && props.children}
    </div>
  );
};
export default MainContainer;