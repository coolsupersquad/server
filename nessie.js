var request = require('superagent');

var newCust = 
{
    first_name : "",
    last_name : "",
    address : {
        street_number : "",
        street_name : "",
        city: "",
        state: "",
        zip: ""
    }
};



function createCustomer()
{
    request.get('http://api.reimaginebanking.com/customers?key=7e107b3e9f9368304927f930f444f6a3')
    .query(JSON.stringify(newCust))
    .end(function(res){
    console.log(res.body); 
    foo(res.status);
    bar(res.body); //do something
});



};

