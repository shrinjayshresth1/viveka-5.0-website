const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function convertToWebP(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await convertToWebP(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        try {
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`✓ Converted: ${file} -> ${path.basename(outputPath)}`);
        } catch (err) {
          console.error(`✗ Failed: ${file} - ${err.message}`);
        }
      }
    }
  }
}

console.log('Starting WebP conversion...\n');
convertToWebP(publicDir).then(() => {
  console.log('\n✅ Conversion complete!');
});
