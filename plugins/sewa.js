let handler = async (m, { conn }) => {
  let fetch = require('node-fetch')
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
Kamu Cina Baik Hati, Sini Saya Belikan Es Krim
`,
  buttonText: 'Harga Bisa Dh Pas',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order es krim',
  products:[{productId:'7868294886577103'}]}],
  headerImage: { productId: '7868294886577103', 
  jpegThumbnail: d },
  businessOwnerJid: `${owner[0]}@s.whatsapp.net`
  },
  footerText: 'https://github.com/RexxinOfficial',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
}
handler.help = ['sewa' , 'premium']
handler.tags = ['main']
handler.command = /^(sewa|rent(this)?(bot)?)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
