                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      //by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
  if (!text) throw `Masukan Judul Anime nya dan pastikan tidak typo`
  let json = await require("../lib/scrape").otakudesu(text)
  let bilek = pickRandom(json)
  
  conn.sendButtonImg(m.chat, bilek.thumbnail, `Judul : ${bilek.judul}`, `${bilek.link}`, `Next`, `${ usedPrefix + command }`, fkontak)
}

handler.help = ['otakudesu <text>']
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i

handler.register = true
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}