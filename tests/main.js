#!/usr/bin/env node

'use strict';

const { spawn, exec } = require('child_process');
const hrstart = process.hrtime();
const testFiles = ['./tests/basic-check.js'];
const express = require('express');
const app = express();

exec('npm run build', () => {
    let hrend = process.hrtime(hrstart);
    console.info('Build time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

    Promise.all(testFiles.map(runSingleTest))
        .then(() => {
            let hrend = process.hrtime(hrstart);
            console.info(
                'Tests finished (hr): %ds %dms',
                hrend[0],
                hrend[1] / 1000000
            );
            process.exit(1);
        })
        .catch(err => {
            console.log(err);
        });
});

app.use(express.static('./dist'));
app.listen(3000, () => {});

function runSingleTest(file) {
    return new Promise(resolve => {
        const child = spawn('node', [file]);
        child.on('close', resolve);
    });
}
