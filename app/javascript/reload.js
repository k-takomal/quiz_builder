window.onpageshow = function(event) {
  if (
         event.persisted
      || window.performance && window.performance.navigation.type == 2
  ) {
      window.location.reload();
      console.log("reload_ok");
  }
};
  // window.onpageshow = function(event) {
  //   if(event.persisted){
  //        window.location.reload();
  //        console.log("reload_ok");
  //       }
  // };
