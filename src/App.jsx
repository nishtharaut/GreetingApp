import React from "react";
function App() {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = "";
    const cssStyle = {};

    if (curDate >= 1 && curDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "green";
    } else if (curDate >= 12 && curDate < 17) {
        greeting = "Good Afternoon";
        cssStyle.color = "blue";
    } else if (curDate >= 17 && curDate < 19) {
        greeting = "Good Evening";
        cssStyle.color = "orange";
    } else {
        greeting = "Good night "
        cssStyle.color = "black";
    };

return(
    <>
    <div className='center'>
  <h1>Hello ma'am,<span style={cssStyle}>{greeting}</span></h1>
   </div>
   </>
);

}
export default App;