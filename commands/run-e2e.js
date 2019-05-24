#!/usr/bin/env node

const shell = require('shelljs');
const { spawn } = require('child_process');
const process = require('process');

const args = process.argv.slice(2);
const suite = args[0] || '';

// Start up nut
shell.cd('~/nutmeg/nut');

const frontendProcess = spawn(`docker run --rm -it -p 5900:5900 -v front-end/client/features:/app/features:rw -v screenshots:/app/screenshots:rw --add-host=NUTMEG_HOST:192.168.65.1 registry.nutmeg.co.uk:8443/cucumber-base:latest ${suite}`, [], { shell: true, stdio: 'inherit' });

process.on('exit', function(e) {
    frontendProcess.kill();
});
