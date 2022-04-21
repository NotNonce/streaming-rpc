---
<h3 align="center">StreamingRPC</h3>
<p align="center">Change your discord status to streaming without streaming</p>

---
#### How to use:
1. Go to https://discord.com/developers/applications and create an app
2. Go to "Rich Presence" and add an asset
3. Edit the function `CustomRPC` in index.js, replace ApplicationID, ImageName...
4. `node .`

```js
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
```
