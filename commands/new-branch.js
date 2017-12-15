#!/usr/bin/env node

require('colors');
const shell = require('shelljs');
const readLineSync = require('readline-sync');

const baseBranch = 'master';

const argv = process.argv.slice(2);
const [branchName] = argv;

if (branchName === undefined) {
    console.log("Please pass a branch: nb OPS-123".red);
    process.exit(0);
}

// Checkout to base branch
shell.exec(`git checkout ${baseBranch}`);

// Making sure we have the latest changes
shell.exec(`git pull origin ${baseBranch}`);

// Create a new branch
shell.exec(`git checkout -b ${branchName}`);