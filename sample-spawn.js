const { spawn } = require('child_process')

const result = spawn('git', ['branch']);

result.stdout.on('data', (data) => {
 console.log(`stdout: ${data}`);
});

