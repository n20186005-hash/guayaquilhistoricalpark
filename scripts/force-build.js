const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Administrator\\Documents\\GitHub\\厄瓜多尔\\guayaquil-historical-park';

// Force-remove out/ and .next/
[root, '.next'].forEach(dir => {
  const p = path.join(root, dir);
  if (fs.existsSync(p)) {
    console.log(`Removing ${dir}...`);
    try { fs.rmSync(p, { recursive: true, force: true }); console.log(`Removed ${dir}`); }
    catch (e) { console.log(`Could not remove ${dir}: ${e.message}`); }
  }
});

console.log('Running build...');
try {
  const out = execSync('npm run build', { cwd: root, encoding: 'utf8', timeout: 180000, stdio: 'pipe' });
  console.log(out);
} catch (e) {
  if (e.stdout) console.log('STDOUT:', e.stdout.slice(-3000));
  if (e.stderr) console.log('STDERR:', e.stderr.slice(-3000));
  console.log('Exit code:', e.status);
}
