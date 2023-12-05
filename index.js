function prepareIngredients(callback) {
    setTimeout(() => {
      callback("Ingredients are prepared.");
     }, 2000); 
  
    assembleSandwhich((message1) => {
      console.log(message1);
    });
  }
  
  function assembleSandwhich(callback) {
    setTimeout(() => {
      callback("Sandwhich is assembled.");
     }, 2500); 
  
    serveSandwhich((message1) => {
      console.log(message1);
    });
  };
  
  function serveSandwhich(callback) {
    setTimeout(() => {
      callback("Sanwhich is served.");
     }, 3000);
  };
  
  function makeSandwich() {
    prepareIngredients((message1) => {
      console.log(message1);
    });
  };
  
  // Test the sandwich-making process
  makeSandwich();