var request = require('superagent');

var res = {
    
}

request.get('http://api.reimaginebanking.com/atms?key=7e107b3e9f9368304927f930f444f6a3').end(function(res){
    foo(res.status);
    bar(res.body); //do something
});

