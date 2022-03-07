const request = require('request');

exports.compilerApi = (data, callback) => {
       
       var options = {
              'method': 'POST',
              'url': 'https://ide.geeksforgeeks.org/main.php',
              'headers': {
                     'Accept': 'application/json',
                     'Content-Type': 'application/x-www-form-urlencoded'
              },
              form: {
                     'lang': data.lang,
                     'code': data.code,
                     'input': data.input,
                     'save': 'false'
              }
       };
       request(options, function (error, response) {
              if (error) throw new Error(error); 
                     const d = JSON.parse(response.body)
                     if(d.status=="SUCCESS") {
                            fetchResult(d.sid);
                     }
       });

       const fetchResult = (sid) => {
              var options = {
                     'method': 'POST',
                     'url': 'https://ide.geeksforgeeks.org/submissionResult.php',
                     'headers': {
                            'Accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded'
                     },
                     form: {
                            'requestType': 'fetchResults',
                            'sid': sid
                     }
              };
              request(options, function (error, response) {
                     if (error) throw new Error(error);
                            const r = JSON.parse(response.body)
                            if (r.status=="SUCCESS") {
                                   callback(r)
                            } else if (r.status=="IN-QUEUE") {
                                   fetchResult(sid)
                            }
              });
       }
}

