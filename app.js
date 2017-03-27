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
