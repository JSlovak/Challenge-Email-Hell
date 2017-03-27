var emailLog = require("./email_log.json").emails;

var emailedDuplicate = (function(){

  var customersToService = [];
  console.log(customersToService);

  for (var i = 1; i < emailLog.length; i++) {
    var currEmail = emailLog[i];
    var prevEmail = emailLog[i -1];


    if(currEmail.email === prevEmail.email && currEmail.sent === prevEmail.sent){
      customersToService.push(currEmail.email);
    }
  // Eliminate duplicates in email
    for(var j = 0; j < customersToService.length; j++){
      var custEmail = customersToService[i];
      var duplicate = customersToService[i +1];

      if (custEmail === duplicate) {
        // var wheresDuplicate = customersToService.indexOf(duplicate);
        // console.log(wheresDuplicate);
        // var stop = customersToService.indexOf(duplicate) + 1;
        // console.log(stop);

        // var deletedDupes = customersToService.slice(wheresDuplicate, stop);
        // console.log(deletedDupes);
      }


    }
  }
  //console.log(customersToService);
  return customersToService;

})();


// Need to split up into more files:
// Each module should have it's own file,
//  1 Module should parse the emails that are repeated into it's array
// 2 Module should count that how many times that email appears in that affected array (was affected in that array)
// final module should be a few lines of code, pulling from the the other files and functions created.