# RS-School-NodeJS-course---Task-1
https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md
# Caesar cipher CLI tool

# Prerequisites
 - Git - Download & Install Git.
 - Node.js - Download & Install Node.js and the npm package manager.

# Downloading
>git clone {repository URL}

# Installing NPM modules
>npm install

# Running application
>node main -a encode/decode -s shift -i input file -o output file

# CLI tool 4 options(arguments):
 - -s,  a shift
 - -i,  an input file
 - -o,  an output file
 - -a,  an action encode/decode

# Usage example:

  - $ node main -a encode -s 7 -i "./input.txt" -o "./output.txt"  
  - $ node main --action encode --shift 7 --input plain.txt --output encoded.txt
  - If the input file input.txt is on desktop
  - node main -a encode -s 7 -i ../../../input.txt -o ./output.txt  
  - If the output file output.txt is on desktop
  - node main -a encode -s 7 -i ./input.txt -o ../../../output.txt   
  - If the input file is missed - use stdin as an input source
  - $ node main -a encode -s 7  -o "./output.txt"
  - If the output file is missed - use stdout as an output destination.
  - $ node main -a encode -s 7 -i "./input.txt"
