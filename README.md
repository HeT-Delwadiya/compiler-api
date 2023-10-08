# compiler-api
 An api to compile your code which supports multiple programming languages using G4G's api.

## Installation
Install using npm:
```sh
npm install compiler-api
```

## Usage
Require library
```javascript
const compiler = require('compiler-api');
```
```javascript
//specify programming language, code and input if any else put empty string
var data = {
  language: 'language',
  code: 'code',
  input: 'stdin input'
}

const result = await compiler.compilerApi(data);
```
Pass the 'data' object as a parameter to this function. Define keys lang, code and input. If your code don't have any input then put an empty string. Refer below available programming languages for lang keywords.

## Available programming languages with keyword-
 - Java - java
 - Python - python
 - Python3 - python3
 - C - c
 - C++ - cpp
 - C++14 - cpp14
 - C# - Csharp
 - Perl - perl
 - PHP - php 
 - Scala - scala

### Example Code Snippet
```javascript
var data = {
  language: 'python3',
  code: 'print(\"Hello\")',
  input: ''
}

const result = await compiler.compilerApi(data);
```

Response
```javascript
{
  id: 'f178db80-702c-4e54-9343-904ba700b52d',
  submission_id: 'f178db80-702c-4e54-9343-904ba700b52d',
  language: 'python3',
  status: 'SUCCESS',
  compResult: 'S',
  time: '0.014',
  memory: '7.05859375',
  output: 'hi\n',
  rntError: '',
  errorCode: '',
  save: 'false',
  code: 'print("hi")',
  input: '',
  timestamp: '2022-11-06 16:45:41'
}
```

Response when there is compile time error in code
```javascript
{
  id: 'bea36a74-f6d6-43f6-910c-576472693e1d',
  submission_id: 'bea36a74-f6d6-43f6-910c-576472693e1d',
  status: 'success'
}
{
  status: 'SUCCESS',
  id: 'bea36a74-f6d6-43f6-910c-576472693e1d',
  submission_id: 'bea36a74-f6d6-43f6-910c-576472693e1d',
  language: 'java',
  compResult: 'F', //compile result is F (Fail)
  errorCode: 'CE',
  cmpError: './GFG.java:1: error: class, interface, or enum expected\n' +
    'print("hi")\n' +
    '^\n' +
    '1 error\n',
  save: 'false',
  code: 'print("hi")',
  input: '',
  timestamp: '2022-11-06 16:49:14'
}
```

Response when there is run time error in code
```javascript
{
  id: '27bab3e6-d092-4339-b1b3-2429f07b1ce1',
  submission_id: '27bab3e6-d092-4339-b1b3-2429f07b1ce1',
  language: 'python3',
  status: 'SUCCESS',
  compResult: 'S',
  time: '0.017',
  memory: '7.32421875',
  output: '',
  rntError: 'Traceback (most recent call last):\n' + //run time error details
    '  File "27bab3e6-d092-4339-b1b3-2429f07b1ce1.py", line 1, in <module>\n' +
    '    prints("hi")\n' +
    "NameError: name 'prints' is not defined\n" +
    ' ',
  errorCode: 'RTE',
  save: 'false',
  code: 'prints("hi")',
  input: '',
  timestamp: '2022-11-06 16:47:30'
}
```
Response when lang param is not valid
```javascript
{ message: 'Invalid language' }
```

## About Me

<a href="https://hetdelwadiya.dev" target="_blank">Het Delwadiya</a>
