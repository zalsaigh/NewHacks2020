var year = document.getElementById("year").value
var make = document.getElementById("makes").value
var mil = document.getElementsById("mileage").value
var prc = document.getElementById('price').value

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.parsehub.com/api/v2/projects/ttPuhXkthMpz/run',
  'headers': {
    'Content-Type': 'multipart/form-data; boundary=--------------------------210849898701710228467662'
  },
  formData: {
    'api_key': 'tQY-a5ytQULq',
    'start_url': 'https://www.kijijiautos.ca/',
    'send_email': '1',
    'start_value_override': '{"data":[\n{"make": "' + make + '", \n"model":"", \n"year":"' + year + '",\n"mileage":"' + mil + '",\n"price":"' + price + '"}]\n}'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
  var result = JSON.stringify(response.body["run_token"]);
  return result;
});


await new Promise(r => setTimeout(r, 30000));

var request = require('request');

request({
  uri: 'https://www.parsehub.com/api/v2/projects/'+ret+'/last_ready_run/data',
  method: 'GET',
  gzip: true,
  qs: {
    api_key: "tQY-a5ytQULq",
    format: "json"
  }
}, function(err, resp, body) {
  var datatext = body;
});
