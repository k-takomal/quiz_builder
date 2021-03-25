(()=>{
   function pullDown(){

    const pullDownButton = document.getElementById("list");
    const pullDownParents = document.getElementById("pull_down");

    
    pullDownButton.addEventListener("click",function(){

      if(pullDownParents.getAttribute("Style")=="display:none;"){
        pullDownParents.setAttribute("style","display:block;")
      }else{pullDownParents.setAttribute("style","display:none;")}

      
    });
  };
  // window.addEventListener("load",pullDown);
  setInterval(pullDown,500);
})();