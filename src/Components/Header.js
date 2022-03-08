import React from "react";


function Header() {
    return (
        <header>
            <div className="header">
                <h1 className="header--welcome">Welcome.</h1>
                <h1 className="header--intro">I am Mersharch Demenya, a front-end developer.</h1>
                <h3 className="header--sub_title">Fell free to explore my portfolio and to get in touch if need be</h3>
                
            </div>
            
            <img src="https://images.unsplash.com/photo-1576481564650-61d2ed81f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2VsZWJyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          
        </header>
    );
}
  
export default Header;