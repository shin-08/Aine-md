let fs = require('fs') 
let chalk = require('chalk')

global.owner = [
  ['6283148375193'],
  ['6283148375193'],
  ['6283148375193', 'Shinz-ルミネ', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  zeks: 'https://api.zeks.me',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apikeyaine',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Shinz'
  var sticker_author = 'ルミネ'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
global.packname = sticker_name
global.author = sticker_author

// Watermark
global.wm = 'Shinz-ルミネ'
global.wm2 = '「 Lumine-md あ⁩ 」'

// Thumbnail 
global.thumb = 'https://telegra.ph/file/c301f7c1d91305d8d3b5b.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

// Link 
global.gc = 'https://chat.whatsapp.com/JQt8UkAG4FjATRNRVqoFb2'
global.web = 'shinz-06.github.io'
global.youtube = 'https://youtube.com/channel/UC_ief-NaAtqbY1J6BIlrqBQ'

// donasi
global.gopay = '083148375193'
global.dana = '083148375193'
global.pulsa = '083148375193'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
