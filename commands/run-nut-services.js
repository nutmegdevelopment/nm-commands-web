#!/usr/bin/env node

const shell = require('shelljs');
const { spawn } = require('child_process');
const process = require('process');

// Start up services
shell.cd('~/nutmeg/nutmeg-services');
const servicesProcess = spawn('bash', ['start-min-services.sh -f front'], { shell: true, stdio: 'inherit' });
