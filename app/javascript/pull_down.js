(()=>{

   function pullDown(){

    const pullDownButton = document.getElementById("list");
    const pullDownParents = document.getElementById("pull_down");

    //マウスを載せるとプルダウンメニュー表示
    pullDownButton.addEventListener("mouseover",function(){
        pullDownParents.setAttribute("style","display:block;")
      });
    pullDownParents.addEventListener("mouseover",function(){
        pullDownParents.setAttribute("style","display:block;")
      });


    //マウスを載せるとプルダウンメニュー非表示
    pullDownButton.addEventListener("mouseout",function(){
      pullDownParents.setAttribute("style","display:none;")
    });
    pullDownParents.addEventListener("mouseout",function(){
      pullDownParents.setAttribute("style","display:none;")
    });


  //クリックするとプルダウンメニュー表示・非表示
    pullDownButton.addEventListener("click",function(){

      if(pullDownParents.getAttribute("Style")=="display:none;"){
        pullDownParents.setAttribute("style","display:block;")
      }else{pullDownParents.setAttribute("style","display:none;")}

      
    });
  };
  setInterval(pullDown,500);
  // window.addEventListener("load",pullDown);
})();