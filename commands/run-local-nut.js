#!/usr/bin/env node

const shell = require('shelljs');
const { spawn } = require('child_process');
const process = require('process');

// Start up services
shell.cd('~/nutmeg/nutmeg-services');
const servicesProcess = spawn('bash', ['start-min-services.sh'], { shell: true, stdio: 'inherit' });

// Start up nut
shell.cd('~/nutmeg/nut/front-end/client');
const frontendProcess = spawn('ACTIVE_FEATURES=show_mifid_intercept:false puma', ['-C config/puma.rb'], { shell: true, stdio: 'inherit' });
shell.exec('open http://0.0.0.0:3010');

process.on('exit', function(e) {
    console.log('killing processes');
    servicesProcess.kill();
    frontendProcess.kill();
});

