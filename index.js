const request = require('request');

exports.compilerApi = (data, callback) => {
       
       var options = {
              'method': 'POST',
              'url': 'https://codejudge.geeksforgeeks.org/submit-request',
              'headers': {
                     'Accept': '*/*',
                     'Content-Type': 'application/json; charset=utf-8',
              },
              'body': JSON.stringify({
                     'language': data.lang,
                     'code': data.code,
                     'input': data.input,
                     'save': 'false'
              })
       };
       request(options, function (error, response) {
              if (error) throw new Error(error); 
                     const d = JSON.parse(response.body)
                     if(d.status=="success") {
                            fetchResult(d.id);
                     } else {
                            callback(d);
                     }
       });

       const fetchResult = (id) => {
              var options = {
                     'method': 'GET',
                     'url': `https://codejudge.geeksforgeeks.org/get-status/${id}`,
                     'headers': {
                            'Accept': '*/*',
                     }
              };
              request(options, function (error, response) {
                     if (error) throw new Error(error);
                            const r = JSON.parse(response.body)
                            if (r.status=="SUCCESS") {
                                   callback(r)
                            } else if (r.status=="in-queue") {
                                   fetchResult(id)
                            }
              });
       }
}

