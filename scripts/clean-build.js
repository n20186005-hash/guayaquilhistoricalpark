const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Administrator\\Documents\\GitHub\\厄瓜多尔\\guayaquil-historical-park';

// Try to remove .next and out folders
const dirsToRemove = ['.next', 'out'];
dirsToRemove.forEach(dir => {
  const fullPath = path.join(projectRoot, dir);
  if (fs.existsSync(fullPath)) {
    console.log(`Removing ${dir}...`);
    try {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`Removed ${dir}`);
    } catch (e) {
      console.log(`Could not remove ${dir}: ${e.message}`);
    }
  }
});

// Now run the build
console.log('Starting build...');
try {
  const output = execSync('npm run build', {
    cwd: projectRoot,
    encoding: 'utf8',
    timeout: 120000, // 2 minute timeout
    stdio: 'pipe'
  });
  console.log(output);
} catch (e) {
  console.log('STDOUT:', e.stdout);
  console.log('STDERR:', e.stderr);
  console.log('Exit code:', e.status);
}
