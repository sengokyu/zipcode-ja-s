# Zipcode-ja spliter

## Preface

The zipcode-ja package provide simple useful very huge object which includes all postal codes in Japan.

This program makes the huge object split into many JSON files.


## Installation

~~~
$ npm install zipcode-ja-s
~~~

## Usage

~~~
$ mkdir tmpdest
$ ./node_modules/bin/split-zipcode-ja tmpdest
~~~

So, you will get many JSON files.

~~~
$ ls tmpdest
001.json  099.json  214.json  319.json  414.json  513.json  612.json  711.json
002.json  100.json  215.json  320.json  415.json  514.json  613.json  712.json
003.json  101.json  216.json  321.json  416.json  515.json  614.json  713.json
...
..
.
~~~

