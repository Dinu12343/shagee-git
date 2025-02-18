
const { cmd } = require('../command') // Make sure the path is correct
const { fetchJson } = require('../lib/functions') // Make sure the path is correct

const apilink = 'https://www.dark-yasiya-api.site/' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "xvideo",
    alias: ["xvdl", "xvdown"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    use: '.xvideo <text>',
    filename: __filename
},
async(conn, mek, m, { from, quoted, reply, q }) => {
try {
    if (!q) return await reply("𝖯𝗅𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝗆𝖾 𝖥𝖾𝗐 𝖶𝗈𝗋𝖽 !");

    const xv_list = await fetchJson(`${apilink}/search/xvideo?text=${q}`);
    if (xv_list.result.length < 1) return await reply("No results found!");

    const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`);

    // Prepare the message
    const msg = `
        *🫣 _𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃 𝐗 𝐃𝐎𝐖𝐍𝐋𝐎𝐃𝐄𝐑_ 🫣* 

        ♱ *𝐓𝐈𝐓𝐄𝐋* - ${xv_info.result.title}
        
        ♱ *𝐕𝐢𝐞𝐰𝐬* - ${xv_info.result.views}
        
        ♱ *𝐋𝐢𝐤𝐞* - ${xv_info.result.like}
        
        ♱ *𝐃𝐞𝐬𝐥𝐢𝐤𝐞* - ${xv_info.result.deslike}
        
        ♱ *𝐒𝐢𝐳𝐞* - ${xv_info.result.size}
        
        🫣 _𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃 𝐗 𝐃𝐎𝐖𝐍𝐋𝐎𝐃𝐄𝐑_ 🫣

         > 🔐𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 -: ©𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃 𝐕1 💚

`;

    // Sending the message with details
    const sentMsg = await conn.sendMessage(from, {
        text: msg,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: 'ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ',
                newsletterJid: "120363343196447945@newsletter",
            },
            externalAdReply: {
                title: `𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃 𝐗𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐃𝐄𝐑`,
                body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
                thumbnailUrl: xv_info.result.image,
                sourceUrl: ``,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: mek });

    
await conn.sendMessage(from, { video: { url: xv_info.result.dl_link }, caption: xv_info.result.title }, { quoted: mek });

} catch (error) {
    console.error(error);
    reply('An error occurred while processing your request. Please try again later.');
}
});
