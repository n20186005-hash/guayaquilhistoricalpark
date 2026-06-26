const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = 'c:\\Users\\Administrator\\Documents\\GitHub\\厄瓜多尔\\guayaquil-historical-park';
const outPath = path.join(root, 'out');
const tempPath = path.join(root, 'out_old');

// Try to rename out/ to out_old/ using Windows move command
// First try: use cmd's move command which sometimes bypasses locks
console.log('Trying to move out/ to out_old/...');
try {
  // Use fs.rename which is atomic
  if (fs.existsSync(outPath)) {
    if (fs.existsSync(tempPath)) {
      fs.rmSync(tempPath, { recursive: true, force: true });
    }
    fs.renameSync(outPath, tempPath);
    console.log('Successfully renamed out/ to out_old/');
  } else {
    console.log('out/ does not exist, proceeding to build');
  }
} catch (e) {
  console.log('Could not rename out/: ' + e.message);
  console.log('Trying alternative approach...');
  // Try to build anyway - maybe the lock will be released
}

// Now run the build
console.log('\nRunning npm run build...');
try {
  const output = execSync('npm run build', {
    cwd: root,
    encoding: 'utf8',
    timeout: 180000,
    stdio: ['pipe', 'pipe', 'pipe']
  });
  console.log(output);
} catch (e) {
  // Print last 5000 chars of stdout/stderr
  if (e.stdout) console.log('STDOUT (last 3000 chars):\n' + e.stdout.slice(-3000));
  if (e.stderr) console.log('STDERR:\n' + e.stderr.slice(-3000));
  console.log('Build failed with exit code:', e.status);
}
