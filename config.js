const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94741897654";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "null";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "null"
global.save_status = process.env.AUTO_SAVE_STATUS || "null"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_47_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyZEROQVZDSUU5TW1oYnl1NzczVWR3Wm1HOW9MOVNFKy9kYTg2bXFMNDZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQxODk3NjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2M0EwMDIwRERDRDNGMjcwN0FFQTg5MzQzODQzRTRBOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzNTEyNjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaTlROHRWUW5RUk9oSlNKeWkwYUR3QVwiLFxuICBcInBob25lSWRcIjogXCIxMTA4NTlhYS1jYWJlLTQxNTktODkwYy02NzhhYjAxOTc0NGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAxODIsXG4gICAgICA2NSxcbiAgICAgIDMsXG4gICAgICAxODEsXG4gICAgICAzMixcbiAgICAgIDE4OSxcbiAgICAgIDIwOSxcbiAgICAgIDE4MCxcbiAgICAgIDMyLFxuICAgICAgMTEwLFxuICAgICAgNDcsXG4gICAgICAyMzQsXG4gICAgICA5OSxcbiAgICAgIDMsXG4gICAgICA3OCxcbiAgICAgIDI0MixcbiAgICAgIDIwMyxcbiAgICAgIDE4OSxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMCxcbiAgICAgIDE3MCxcbiAgICAgIDEyNCxcbiAgICAgIDE4MSxcbiAgICAgIDE3MCxcbiAgICAgIDEyNSxcbiAgICAgIDQyLFxuICAgICAgMjQzLFxuICAgICAgMTY2LFxuICAgICAgOTksXG4gICAgICAyNDgsXG4gICAgICAxOTQsXG4gICAgICAzNSxcbiAgICAgIDIxOSxcbiAgICAgIDE0NCxcbiAgICAgIDIzMSxcbiAgICAgIDE3MCxcbiAgICAgIDE2NSxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kzaW5NNERFSnJycjdNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiei9uVUZzamZhZ2N0TlB0YnRnQytueERHYlFpOFRSb3JBdnJzMUM1RW8xcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrSEw1d2I3VTM3MFgvQlo4Tmh5QUQ4UmxDL2FyOXZIeWVXMTZ5eFduaFdJNTk2MzJJaXkxQTd3OFVvZ1FUS0txVHNnamMzZnRMZk9FTlRhTEZid3dCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnSVB5b2dnMERSalBuRW9uOHFTckY2aTVwWithbWZBczY2Z0s2L0s0WGVZL0xVT1UxenY5NTlmVWNiMkgzRHpvTXpKK2F3aE9HeU8yUWo3eVJIVGVBZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQxODk3NjU0OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiLT4+8J2QjC7wnZCRfHwg8J2QkfCdkITwnZCD8J2QiPCdkJjwnZCAPDwtXCIsXG4gICAgXCJsaWRcIjogXCIxNTk0NTEwNjM1NDE4NjI6NDZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MTg5NzY1NDo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MzUxMjYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3FRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLcVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXSit2Rng3NDBjL3AxQ2dqUGRZdDh1ZDRjbkRWanpHM2tLN0Zmd1VLblBVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk2OTM1NTUzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4Mjc5MzI3NTA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || ".", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "M.R|Bot",
  botname : process.env.BOT_NAME  || "M.R|Bot",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
