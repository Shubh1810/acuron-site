const { execSync } = require('child_process');

console.log('Building without ESLint...');
try {
  execSync('DISABLE_ESLINT_PLUGIN=true next build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 