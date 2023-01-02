module.exports = {
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix', 'prettier --write'],
  './pages/**/*.+(ts|tsx)': [() => 'yarn tscheck'],
  './components/**/*.+(ts|tsx)': [() => 'yarn tscheck']
}
