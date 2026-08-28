import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 375, height: 700 } })
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })
await page.screenshot({ path: 'tmp-mobile.png', clip: { x: 0, y: 0, width: 375, height: 700 } })
const errors = []
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text())
})
await page.waitForTimeout(200)
console.log('ERRORS:', JSON.stringify(errors))
await browser.close()
