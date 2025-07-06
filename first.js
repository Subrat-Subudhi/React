const ele = React.createElement("h1" , {id:"first" , className:"head" , style:{backgroundColor:"blue" , color:"whitesmoke" , fontSize:"30px"}} , "hello coders");
const reactroot = ReactDOM.createRoot(document.getElementById("root"));
// reactroot.render(ele);
const ele2 = React.createElement("h2" , {id:"first" , className:"head" , style:{backgroundColor:"green" , color:"whitesmoke" , fontSize:"20px"}} , "hello coders");
// reactroot.render(ele2);
const divv = React.createElement("div" , {} , [ele , ele2]);
reactroot.render(divv);
