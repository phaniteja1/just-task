const { spawn } = require('child_process');

['', 'preset'].forEach(pkg => {
  const name = ['just', 'task', ...(pkg ? [pkg] : [])];

  const cp = spawn('tsc', ['-p', `packages/${name.join('-')}`, '-w', '--preserveWatchOutput'], { stdio: 'pipe' });
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);
});
