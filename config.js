import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285786539008', 'FAHRUL', true],
  ['6285786539008'], 
  ['6285786539008'],
  ['6281548514255']
] //Numeros de owner 

global.mods = ['6285786539008'] 
global.prems = ['6285786539008', '6285786539008', '6281548514255']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Sticker By' 
global.author = '@fahrul' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/fahrul_mt\n' 
global.dygp = '-'
global.fgsc = 'https://github.com/Rakrohaku8534' 
global.fgyt = 'http://fahrul.me/'
global.fgpyp = 'https://saweria.co/fahrul'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})