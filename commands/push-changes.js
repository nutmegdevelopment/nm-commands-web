#!/usr/bin/env node

require('colors');
const shell = require('shelljs');
const readLineSync = require('readline-sync');

const argv = process.argv.slice(2);
const [message] = argv;

if (message === undefined) {
    console.log("'Please pass a message: push 'I am making this change'".red);
    process.exit(0);
}

const currentBranch = shell.exec("git symbolic-ref --short HEAD", {silent: true}).stdout.trim();

// Stage changes
shell.exec(`git add -A`);

// commit with message
shell.exec(`git commit -m "${message}"`);

// push changes
shell.exec(`git push origin ${currentBranch}`);