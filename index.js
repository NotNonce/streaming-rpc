const server = require('./server.js')

let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require('discordrpcgenerator')
var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16))

require('dotenv').config()

let client = new discord.Client()
client.login(process.env.TOKEN)

// https://discord.com/developers/applications
async function CustomRPC() {
  const ApplicationID = 'ApplicationID'
  let Image = 'LargeImageName'
  Image = await rpcGenerator.getRpcImage(ApplicationID, Image)

  return new rpcGenerator.Rpc()
    .setName('Name')
    .setDetails('Name') // same as Name
    .setState('State')
    .setParty({ size: [1, 4], id: uuid() }) // Party size: [current, max]
    .setAssetsLargeText('Image Text')
    .setUrl('https://twitch.tv/something')
    .setType('STREAMING')
    .setApplicationId(ApplicationID)
    .setAssetsLargeImage(Image.id)
}


client.on('ready', async () => {
  console.log('Client is ready!')
  console.log('Building presence!')
  let presence = await CustomRPC()
  client.user.setPresence(presence)

  console.log('Go check your new presence!')
  server()
})
