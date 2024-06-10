const fs = require('fs');
const path = require('path');

// Resolve the absolute path to the tsconfig.json file
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');

// Read the tsconfig.json file
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));

// Modify the "module" field to "commonjs"
tsconfig.compilerOptions.module = 'commonjs';

// Write the modified tsconfig.json file
fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2), 'utf8');

// Execute the "npx hardhat compile" command
const { spawnSync } = require('child_process');
spawnSync('npx', ['hardhat', 'compile'], { stdio: 'inherit' });