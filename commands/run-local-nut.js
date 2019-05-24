#!/usr/bin/env node

const shell = require('shelljs');
const { spawn } = require('child_process');
const process = require('process');

// Start up nut
shell.cd('~/nutmeg/nut/front-end/client');

let args = [
    'ACTIVE_FEATURES=show_mifid_intercept:false',
    'PUMA_WORKERS=1',
];

const frontendProcess = spawn(`${args.join(' ')} puma`, ['-C config/puma.rb'], { shell: true, stdio: 'inherit' });
shell.exec('open http://0.0.0.0:3010');

process.on('exit', function(e) {
    frontendProcess.kill();
});

