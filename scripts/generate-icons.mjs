/**
 * generate-icons.mjs
 * Converts public/icons/icon.svg → icon-192x192.png & icon-512x512.png
 *
 * Requires:  sharp   (already in devDependencies)
 * Run with:  npm run generate-icons
 */

import sharp from 'sharp'
import { readFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const iconsDir = join(__dir, '..', 'public', 'icons')
const svgPath  = join(iconsDir, 'icon.svg')

mkdirSync(iconsDir, { recursive: true })

const svgBuffer = readFileSync(svgPath)

const sizes = [192, 512]

for (const size of sizes) {
  const outPath = join(iconsDir, `icon-${size}x${size}.png`)
  await sharp(svgBuffer)
    .resize(size, size)
    .png({ quality: 90 })
    .toFile(outPath)
  console.log(`✅  Generated  icon-${size}x${size}.png`)
}

console.log('\n🎉  PWA icons ready in public/icons/')
