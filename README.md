# compiler-api
 A node package to compile your code which supports multiple programming languages using G4G's api. Available on [NPMJS](https://www.npmjs.com/package/compiler-api) also.

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
  lang: 'language',
  code: 'code',
  input: 'stdin input'
} 

compiler.compilerApi(data, (result) => {
  console.log(result);
});
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
  lang: 'python3',
  code: 'print(\"Hello\")',
  input: ''
}

compiler.compilerApi(data, (result) => {
  console.log(result);
});
```

Response
```javascript
{
   "valid":"1",
   "output":"hello\n",
   "time":"0.02",
   "compResult":"S",
   "memory":"0.125",
   "hash":"7fb0b8e425e3957ebf11a1f25ad71c31_Tester_U16",
   "status":"SUCCESS"
}
```

Response when there is compile time error in code
```javascript
{
   "valid":"1",
   "time":"0",
   "compResult":"F", //compileResult is F (Fail)
   "cmpError":"\nprog.java:1: error: class, interface, or enum expected\nprint(\"hello\")\n^\n1 error", //compile time error in detail
   "hash":"aaca8ef7202655f51baedeed8542215e_Tester_U16",
   "status":"SUCCESS"
}
```

Response when there is run time error in code
```javascript
{
   "valid":"1",
   "time":"0",
   "compResult":"S",
   "memory":"0.125",
   "hash":"65bb79500056c00244df5b1a0b81399e_Tester_U16",
   "rntError":"Traceback(most recent call last):\n File \"\/home\/65bb79500056c00244df5b1a0b81399e.py\", line 2, in <module>\n print(y)\nNameError: name 'y' is not defined\n", //run time error in detail
   "status":"SUCCESS"
}
```

## About Me

<a href="https://www.linkedin.com/in/het-delwadiya/" target="_blank">Het Delwadiya</a>
