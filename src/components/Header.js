// import React from "react";

// function Header(name){
//     return (
//         <div>
//             <Header>
//                 <h1>{name.name}</h1>
//             </Header>
//         </div>
        
//     )
// }


// export default Header



import React from "react";

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
