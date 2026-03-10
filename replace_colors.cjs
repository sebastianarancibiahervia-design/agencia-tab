const fs = require('fs');
const files = [
  'tailwind.config.js',
  'src/index.css',
  'src/App.tsx',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/Features.tsx',
  'src/components/Philosophy.tsx',
  'src/components/Protocol.tsx',
  'src/components/Footer.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/plasma/g, 'neon');
  content = content.replace(/Plasma/g, 'Neon');
  content = content.replace(/#7B61FF/gi, '#B9FF00'); // Slightly brighter neon green
  content = content.replace(/rgba\(123,97,255/g, 'rgba(185,255,0'); // RGB for #B9FF00
  fs.writeFileSync(f, content);
});

console.log('Replaced colors successfully.');
