

const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const ytdl = require("ytdl-core");
const bot = new Discord.Client();

//const client = new Discord.Client();
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) }});

const queue = new Map();

client.once("ready", () => {
  console.log("Ready!");
  notifier.notify(
    {
      appID : 'index.js',
      actions: 'aaa',
      timeout: 'wee',
      title: 'UselessBot',
      message: 'UselessBot is online!',
      icon: path.join(__dirname, 'Images/UselessBot.ico'), // Absolute path (doesn't work on balloons)
      sound: true, // Only Notification Center or Windows Toasters
      wait: true // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
    },
    function(err, response) {
      // Response is response from notification
    }
  );
});


require('events').EventEmitter.defaultMaxListeners = 150;



const activities_list = [
  "Type !help for help.", 
  "Beep boop, I'm a robot!",
  "Made by ***REMOVED***!",
  "I'm useless!",
  "Type !help for help."
  ]; // creates an arraylist containing phrases you want your bot to switch through.


  require('console-stamp')(console, 'HH:MM:ss');
client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
      //client.user.setPresence()
  }, 60000); // Runs this every 60 seconds.
});

//client.once('ready', ()=>{
  //activityStatus = fs.readFileSync("status.txt").toString()
  //client.user.setActivity(activityStatus, { type: 'PLAYING' }, {url: 'https://discord.useless-bot.com/'})
  //Default: Type !help for help.
//.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
//.catch(console.error);
//})

console.log('Node version: '+ process.version)



client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

const notifier = require('node-notifier');
const path = require('path');





client.on('shardError', error => {
  console.error('A websocket connection encountered an error:', error);
});



process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});



client.login(token); //LOGIN





client.on('message', msg=>{
  if(!fs.existsSync('User_Data/USER'+msg.author.id+'.txt')){
    fs.writeFileSync('User_Data/USER'+msg.author.id+'.txt', '100', function (err) {
      if (err) return console.log(err);
      console.log(err);
    })
  } //Create account
})




client.on('message', msg=>{
  //Recreate a shop template into a user's id
  if(fs.existsSync('UserJSON/USER'+msg.author.id+'.json')){
  }else{
    let template = fs.readFileSync('./UserJSON/datatemplate.json').toString()
    fs.writeFile(`./UserJSON/USER${msg.author.id}.json`, template, 'utf8', err => {
      if (err) throw err;
    });

  }
})





function createEmbed(color, name, desc){
  mainEmbed = new Discord.MessageEmbed()
  .setColor(color)
  .setTitle(name)
  .setDescription(desc)
  
}


  DmError = new Discord.MessageEmbed()
  .setColor("#E5453D")
  .setTitle("Error")
  .setDescription("This command doesn't work in DMs.")



  client.on('message', msg=>{
    if (msg.author.bot) return;
    if (msg.channel.type === 'dm') return;
    if(msg.content.toLowerCase().startsWith("!capsfilter")){
      if(msg.member.hasPermission('MANAGE_GUILD') && msg.member.hasPermission('MANAGE_MESSAGES')){
      if(msg.content.toLowerCase().startsWith("!caps ")){
  
      }else{
      let message = msg.content
      const args = message.split(' ');
       args.shift();
  
       if(args.join(' ').toLowerCase() === "true"){
        if(fs.existsSync('CapsFilter/SERVER'+msg.guild.id+'.txt')){
          createEmbed("#E5453D", "Error", "Caps Lock is already filtered.")
          msg.channel.send(mainEmbed) 
        }else{
      msg.react("👍")
  
      fs.writeFileSync('CapsFilter/SERVER'+msg.guild.id+'.txt', '1', function (err) {
        if (err) return console.log(err);
        console.log(err);
      })
    }
    }else{
  
      if(args.join(' ').toLowerCase() === "false"){
      if(fs.existsSync('CapsFilter/SERVER'+msg.guild.id+'.txt')){
      fs.unlinkSync("./CapsFilter/SERVER"+msg.guild.id+".txt");
      msg.react("👍")
      }else{
        createEmbed("#E5453D", "Error", "Caps Lock is not filtered.")
        msg.channel.send(mainEmbed) 
      }
    }else{
      createEmbed("#E5453D", "Error", "Please use the correct format: !capsfilter [true/false]")
      msg.channel.send(mainEmbed) 
    }
    }
    }
  }else{
    createEmbed("#E5453D", "Error", "You don't have permission to do that. You need: **MANAGE_SERVER, MANAGE_MESSAGES**")
    msg.channel.send(mainEmbed) 
  }
  }
  })
  
  
  client.on('message', msg=>{
    if (msg.channel.type === 'dm') return;
    if(msg.content.toUpperCase() === msg.content){
      if(msg.content.toLowerCase() != msg.content){
      if(fs.existsSync('CapsFilter/SERVER'+msg.guild.id+'.txt')){
        msg.delete()
        if (msg.author.bot) return;
        //msg.reply("sending messages in all caps is not allowed.")
      }
    }
    }
  })


//Member Join

const Canvas = require('canvas');
Canvas.registerFont('./Uni Sans Heavy.otf', { family: 'Uni Sans' })
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px Uni Sans`; //sans-serif
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};



client.on('guildMemberAdd', async member => {


  if(fs.existsSync('Channels/MemberLog/CHANNEL'+member.guild.id+'.txt')){
    channelID = fs.readFileSync('Channels/MemberLog/CHANNEL'+member.guild.id+'.txt').toString()
    welcomeChannel = member.guild.channels.cache.find(channel => channel.id === channelID)


	//const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channelID) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./Images/wallpaper2.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px Uni Sans';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

  welcomeChannel.send(`Welcome to the server, ${member}!`, attachment);
  }
});















client.on('guildMemberRemove', async member => {
  if(fs.existsSync('Channels/MemberLog/CHANNEL'+member.guild.id+'.txt')){
    channelID = fs.readFileSync('Channels/MemberLog/CHANNEL'+member.guild.id+'.txt').toString()
    welcomeChannel = member.guild.channels.cache.find(channel => channel.id === channelID)
	if (!channelID) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./Images/wallpaper2.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px Uni Sans';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Goodbye,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8); //2.5  1.8

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true); //	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200); //25 25 200 200

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'goodbye-image.png');

  welcomeChannel.send(`Goodbye, ${member}!`, attachment);
  }
});







//client.on('message', message => {
	//if (message.content === '!join') {
		//client.emit('guildMemberAdd', message.member);
	//}
//});





//
//
//
//MAIN
//
//
//

var roasts = ["your closest friend is Siri.", "for a second I thoght you were Troom Troom.", "I thought I smelt dog crap. I realized it was your body odor.","your body odor is so strong that showering 3 times a day won't make a difference.", "you are so ugly that your parents accused the nurse of a mix-up when you were leaving the hospital.", "you are so ugly that it became illegal for you to be in a relationship.", "the only milestone you will ever achieve is the milestone of still being ugly with makeup on.", "you are the painful Lego piece people step on.", "your parents hated you so much that they changed your initials to a bad word.", "your face is so hideous that even the mirror decided to commit suicide.", "you are the definition of stupidity.", "you are the reason people get depression.", "I don't think I have seen anything scarier than your face.", "you are so hideous that even you hate yourself.", "mirrors bring you depression.", "your life is basically April Fools day.", "you are so stupid that your parents were replaced with a robot look-alike to end the suffering.", "if a robot sees you, I'm 99% sure it wont recognise you as a human.", "ERROR 276: Face too ugly. Remove face to fix problem.", "your face... It scares me!", "if someone tells you that they love you, just know that that's a lie.", "I wouldn't be surprised if people thought think that you have the face of a serial killer.", "you will always win a staring contest because other people won't be able to look at your face.", "you know how people cry when they look at onions? Well, I like to imagine the onions as your face.", "did you fall into the ocean? You smell like dead fish.", "you do realize that the gym is across the street, right?", "you seem like the type of person who would get sponsored by Raid Shadow Legends.", "you should take a shower once in a while.", "where are your roasts from? Wikipedia?", "your parents lived a happy life. Then you came.", "why do I keep cringing around you?", "You know you've reached a low point in life when a bot can roast better than you."];

client.on('message', msg=>{
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('!roast')) {

      if (msg.mentions.users.size) {
          if (msg.mentions.users.first().id === '739251643425620019') {
              msg.reply('why would I even roast myself?')
          } else {
            roast = Math.floor(Math.random()*roasts.length)
              const taggedUser = msg.mentions.users.first();
              msg.channel.send(`${taggedUser.username}, ${(roasts[roast])}`);   
          }
      } else {
        createEmbed("#E5453D", "Error", "Please use the format: !roast @user")
        msg.channel.send(mainEmbed)
      }
  }
})


 

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!hack")){
      const taggedUser = msg.mentions.users.first();
      if (msg.mentions.users.size) {
      const UBE = client.emojis.cache.get("792658188183797760");
      
      msg.channel.send(`Hacking ${UBE}`)
      .then((msg)=> {
        setTimeout(function(){
          msg.edit(`:white_check_mark: ${taggedUser.username} has totally been hacked with this very real command. `);
        }, 3500)
      }); 
      } else {
        createEmbed("#E5453D", "Error", "Please use the correct format: !hack @user")
        msg.channel.send(mainEmbed) 
      }
  }
})

//01001000 01100001 01100011 01101011
//01001001 01101110
//01110000 01110010 01101111 01100111 01110010 01100101 01110011 01110011


//CurrencyBot:
MoneyVal = 0
Promotion = 0
RobValue = 0
QuarterVal = MoneyVal/4
RoundTest = Math.round(50/4)
Deposited = 0
TotalMoney = 0

  

var dances = [{files: ["./Images/Dance/001.gif"]}, {files: ["./Images/Dance/003.gif"]}, {files: ["./Images/Dance/004.gif"]}, {files: ["./Images/Dance/005.gif"]}, {files: ["./Images/Dance/006.gif"]}, {files: ["./Images/Dance/009.gif"]}]
var ducks = [{files: ["./Images/Ducks/002.jpg"]}, {files: ["./Images/Ducks/007.jpg"]}, {files: ["./Images/Ducks/008.gif"]}, {files: ["./Images/Ducks/010.gif"]}, {files: ["./Images/Ducks/011.gif"]}, {files: ["./Images/Ducks/012.gif"]}, {files: ["./Images/Ducks/013.gif"]}, {files: ["./Images/Ducks/014.gif"]}, {files: ["./Images/Ducks/015.gif"]}, {files: ["./Images/Ducks/016.gif"]}, {files: ["./Images/Ducks/017.gif"]}, {files: ["./Images/Ducks/018.gif"]}, {files: ["./Images/Ducks/019.gif"]}, {files: ["./Images/Ducks/020.gif"]}, {files: ["./Images/Ducks/021.gif"]}, {files: ["./Images/Ducks/022.gif"]}, ]
client.on('message', msg=>{
  if (msg.content.toLowerCase() === "!dance"){
    var dance = Math.floor(Math.random() * dances.length);
    msg.channel.send(dances[dance]);
  }
})


client.on('message', msg=>{
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === "!duck"){
    var duck = Math.floor(Math.random() * ducks.length);
    msg.channel.send(ducks[duck]).catch()
  }
})


//    const taggedUser2 = msg.mentions.users.first(); = tagged user

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!hey")){
     msg.channel.send({files: ["./Sounds/HEY.mp3"]})
     msg.react('🇭')
     msg.react('🇪')
     msg.react('🇾')
  }
})



client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!avatar")){
    if (msg.mentions.users.size) {
    const taggedUseravatar = msg.mentions.users.first();
    avatarurl = taggedUseravatar.avatarURL({dynamic:true}, { format: 'png', size: 512 })
    msg.channel.send(avatarurl)
    }else{
      createEmbed("#E5453D", "Error", "Please use the correct format: !avatar @user")
      msg.channel.send(mainEmbed) 
    }
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === "!yeah"){
    msg.channel.send({files: ['./Videos/Vine Crazy kid hit in the head with basketball.mp4']})
    msg.react('🇾')
    msg.react('🇪')
    msg.react('🇦')
    msg.react('🇭')
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === "!no"){
    msg.channel.send({files: ["./Videos/No.mp4"]})
    msg.react('🇳')
    msg.react('🇴')
  }
})


client.on('message', msg=>{
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === "!banana"){
    msg.channel.send({files: ["./Videos/BANANANA.mp4"]})
    msg.react('🍌')
  }
})


client.on('message', msg=>{
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === "!stonks"){
    msg.channel.send({files: ["./Images/stonks.jpg"]})
    msg.react('📈')
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!watermelon"){
    msg.channel.send({files: ["./Videos/WOTORMELONE.mp4"]})
    msg.react('🍉')
  }
})



//counterbot





//tictactoe

tictactoewin = 0
tictactoelost = 0
tictactoetied = 0

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('!rockpaperscissors')){
    var rps = ["rock", "paper", "scissors"]
    var rpschoice = Math.floor(Math.random() * rps.length);
    if(msg.content.toLowerCase() === "!rockpaperscissors rock"){

      if(rps[rpschoice] === "rock"){
        msg.reply("I chose rock. It's a tie.")
        tictactoetied = tictactoetied + 1
      }else if(rps[rpschoice] === "paper"){
        msg.reply("I chose paper. You lose.")
        tictactoelost = tictactoelost + 1
      }else{
        msg.reply("I chose scissors. You win!")
        tictactoewin = tictactoewin + 1
      }

    }else if(msg.content.toLowerCase() === "!rockpaperscissors paper"){

      if(rps[rpschoice] === "rock"){
        msg.reply("I chose rock. You win")
        tictactoewin = tictactoewin + 1
      }else if(rps[rpschoice] === "paper"){
        msg.reply("I chose paper. It's a tie.")
        tictactoetied = tictactoetied + 1
      }else{
        msg.reply("I chose scissors. You lose.")
        tictactoelost = tictactoelost + 1
      }


    }else if(msg.content.toLowerCase() === "!rockpaperscissors scissors"){

      if(rps[rpschoice] === "rock"){
        msg.reply("I chose rock. You lose.")
        tictactoelost = tictactoelost + 1
      }else if(rps[rpschoice] === "paper"){
        msg.reply("I chose paper. You win!")
        tictactoewin = tictactoewin + 1
      }else{
        msg.reply("I chose scissors. It's a tie.")
        tictactoetied = tictactoetied + 1
      }

    }else{
      createEmbed("#E5453D", "Error", "Please use the correct format: !rockpaperscissors {choice}")
      msg.channel.send(mainEmbed)

    }
  }
})


const fs = require('fs');
const { count, Console, log, info, time } = require("console");
const { parse, format, join } = require("path");
const { url } = require("inspector");
const { report, domain, connected } = require("process");
const { stringify } = require("querystring");
const { URL } = require("url");
const { isBuffer } = require("util");
const { Z_FIXED } = require("zlib");












client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!help"){
    const UBE = client.emojis.cache.get("789465915137327144");
    helpembed1 = new Discord.MessageEmbed()
    .setColor('#819AD4')
    .setTitle("Choose what commands you need help with:")
    .setDescription(`**
    :moneybag:  !help economy
    :smile:   !help fun
    :camera:  !help image
    :rofl:  !help meme⠀⠀ 
    🛡️  !help moderation  
    :toolbox:  !help utility 
    :telephone:  !help vc**`)
    msg.channel.send(helpembed1)
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!help meme"){
    helpList = fs.readFileSync('Help/meme.txt').toString()
    helpembed2 = new Discord.MessageEmbed()
    .setColor('#96C0EB')
    .setTitle("Here is a list of commands:")
    .setDescription(helpList)
    msg.channel.send(helpembed2)
  }
})







client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!help economy"){
    helpList = fs.readFileSync('Help/economy.txt').toString()
    helpembed3 = new Discord.MessageEmbed()
    .setColor('#96C0EB')
    .setTitle("Here is a list of commands:")
    .setDescription(helpList)
    msg.channel.send(helpembed3)
  }
})


client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!help image"){
    helpList = fs.readFileSync('Help/image.txt').toString()
    helpembed4 = new Discord.MessageEmbed()
    .setColor('#96C0EB')
    .setTitle("Here is a list of commands:")
    .setDescription(helpList)
    msg.channel.send(helpembed4)
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!help utility"){
    helpList = fs.readFileSync('Help/utility.txt').toString()
    helpembed5 = new Discord.MessageEmbed()
    .setColor('#96C0EB')
    .setTitle("Here is a list of commands:")
    .setDescription(helpList)
    msg.channel.send(helpembed5)
  }
})


client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!help vc"){
    helpList = fs.readFileSync('Help/vc.txt').toString()
    helpembed6 = new Discord.MessageEmbed()
    .setColor('#96C0EB')
    .setTitle("Here is a list of commands:")
    .setDescription(helpList)
    msg.channel.send(helpembed6)
  }
})





client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!help fun"){
    helpList = fs.readFileSync('Help/fun.txt').toString()
    helpembed7 = new Discord.MessageEmbed()
    .setColor('#96C0EB')
    .setTitle("Here is a list of commands:")
    .setDescription(helpList)
    msg.channel.send(helpembed7)
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!help moderation"){
    helpList = fs.readFileSync('Help/moderation.txt').toString()
    helpembed7 = new Discord.MessageEmbed()
    .setColor('#96C0EB')
    .setTitle("Here is a list of commands:")
    .setDescription(helpList)
    msg.channel.send(helpembed7)
  }
})





client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith("!clear")) {
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
    if (msg.member.hasPermission('MANAGE_MESSAGES')) {
      let message = msg.content
      const args = message.split(' ');
       args.shift();

       if(!isNaN(args.join(' '))){
         if(parseInt(args.join(' ')) < 101){
           if(parseInt(args.join(' ')) > 1)
      msg.channel.bulkDelete(parseInt(args.join(' ')));
         }else{
          createEmbed("#E5453D", "Error", "Please enter a number between 1 and 100.")
          msg.channel.send(mainEmbed)
         }
       }else{
        createEmbed("#E5453D", "Error", "Please enter a valid number.")
        msg.channel.send(mainEmbed)
       }
    }else{
      createEmbed("#E5453D", "Error", "You don't have permission to do that.")
      msg.channel.send(mainEmbed)
    }
      }
    }
})




    var cats = [{files:["./Images/CuteCats/001.jpg"]}, {files:["./Images/CuteCats/002.jpg"]}, {files:["./Images/CuteCats/003.jpg"]}, {files:["./Images/CuteCats/004.jpg"]}, {files:["./Images/CuteCats/005.jpg"]}, {files:["./Images/CuteCats/006.jpg"]}, {files:["./Images/CuteCats/007.jpg"]}, {files:["./Images/CuteCats/008.jpg"]}, {files:["./Images/CuteCats/009.jpg"]}, {files:["./Images/CuteCats/010.jpg"]}, {files:["./Images/CuteCats/011.jpg"]}, {files:["./Images/CuteCats/012.jpg"]}, {files:["./Images/CuteCats/013.jpg"]}, {files:["./Images/CuteCats/014.jpg"]}]
    var dogs = [{files:["./Images/CuteDogs/001.jpg"]}, {files:["./Images/CuteDogs/002.jpg"]}, {files:["./Images/CuteDogs/003.jpg"]}, {files:["./Images/CuteDogs/004.jpg"]}, {files:["./Images/CuteDogs/005.jpg"]}, {files:["./Images/CuteDogs/006.jpg"]}, {files:["./Images/CuteDogs/007.jpg"]}, {files:["./Images/CuteDogs/008.jpg"]}, {files:["./Images/CuteDogs/009.jpg"]}, {files:["./Images/CuteDogs/010.jpg"]}, {files:["./Images/CuteDogs/011.jpg"]}, {files:["./Images/CuteDogs/012.jpg"]}, {files:["./Images/CuteDogs/013.jpg"]}, {files:["./Images/CuteDogs/014.jpg"]}, {files:["./Images/CuteDogs/015.jpg"]}, {files:["./Images/CuteDogs/016.jpg"]}, {files:["./Images/CuteDogs/017.jpg"]}, {files:["./Images/CuteDogs/018.jpg"]}, {files:["./Images/CuteDogs/019.jpg"]}, {files:["./Images/CuteDogs/020.jpg"]}, {files:["./Images/CuteDogs/021.jpg"]}]

    client.on('message', msg=>{
      if (msg.author.bot) return;
      var dog = Math.floor(Math.random() * dogs.length);
      if(msg.content.toLowerCase() === "!dog"){
        msg.channel.send(dogs[dog])
      }
    })



    client.on('message', msg=>{
      if (msg.author.bot) return;
      var cat = Math.floor(Math.random() * cats.length);
      if(msg.content.toLowerCase() === "!cat"){
        msg.channel.send(cats[cat])
      }
    })










client.on('message', async msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('!birthday')){
    if(msg.mentions.users.size){
    const taggedUseravatarslap = msg.mentions.users.first();
    const canvas = Canvas.createCanvas(1200, 758);
    const ctx = canvas.getContext('2d');
  
    const background = await Canvas.loadImage('./Images/Birthday.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
  
  

  
    const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 450, 100, 300, 300); //25 25 200 200

    
    
  
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  
    msg.channel.send(`Happy birthday, ${taggedUseravatarslap.username}!`, attachment);
    msg.react('🎉')
  }else{
    createEmbed("#E5453D", "Error", "Please use the correct format: !birthday @user")
    msg.channel.send(mainEmbed)
  }
}
})

















client.on('message', async msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!slap")){
    if (msg.mentions.users.size) {
      const taggedUseravatarslap = msg.mentions.users.first();

      if(taggedUseravatarslap === msg.author){
        const canvas = Canvas.createCanvas(331, 238);
        const ctx = canvas.getContext('2d');
      
        const background = await Canvas.loadImage('./Images/SelfSlap.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
      
      
    
      
        const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 100, 30, 100, 100); //25 25 200 200
    
        
        
      
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
      
        msg.channel.send(`Stop slapping yourself!`, attachment);
      }else{

        if(taggedUseravatarslap.id === '729099412265107497')
        {
          msg.reply('SNOOPS SHALL NOT BE SLAPPED! THAT IS ANIMAL ABUSE! I SHALL SLAP YOU INSTEAD!')

          const canvas = Canvas.createCanvas(1340, 874);
          const ctx = canvas.getContext('2d');
        
          const background = await Canvas.loadImage('./Images/Slap.jpg');
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
        
        
      
        
          const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({ format: 'jpg' }));
          ctx.drawImage(avatar, 200, 300, 400, 400); //25 25 200 200
      
          
          
        
          const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        
          msg.channel.send(attachment);

          msg.member.kick('Slapping Snoops')
        }else{
  
    const canvas = Canvas.createCanvas(1340, 874);
    const ctx = canvas.getContext('2d');
  
    const background = await Canvas.loadImage('./Images/Slap.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
  
  

  
    const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 200, 300, 400, 400); //25 25 200 200

    
    
  
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  
    msg.channel.send(`Slapped ${taggedUseravatarslap.username}!`, attachment);
      }
    }



    }else{
      createEmbed("#E5453D", "Error", "Please use the correct format: !slap @user")
      msg.channel.send(mainEmbed)
    }
  }
})





































client.on('message', async msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!jail")){
    if (msg.mentions.users.size) {
      const taggedUseravatarslap = msg.mentions.users.first();

      if(taggedUseravatarslap === msg.author){
        const canvas = Canvas.createCanvas(200, 200);
        const ctx = canvas.getContext('2d');
        
        const background = await Canvas.loadImage("./Images/JailTST.png");

      
      
    
      
        const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({format: 'png'}));
        ctx.drawImage(avatar, 0, 0, 200, 200); //25 25 200 200
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
    
        
        
      
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jailed-image.png');
      
        msg.channel.send(`You're jailed now.`, attachment);
      }else{

        if(taggedUseravatarslap.id === '729099412265107497')
        {
          msg.reply('SNOOPS SHALL NOT BE JAILED! THAT IS ANIMAL ABUSE! I SHALL JAIL YOU INSTEAD!')

          const canvas = Canvas.createCanvas(200, 200);
          const ctx = canvas.getContext('2d');
          
          const background = await Canvas.loadImage("./Images/JailTST.png");
  
        
        
      
        
          const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({format: 'jpg'}));
          ctx.drawImage(avatar, 0, 0, 200, 200); //25 25 200 200
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
      
          
          
        
          const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jailed-image.png');
        
          msg.channel.send(attachment);
        }else{
  
          const canvas = Canvas.createCanvas(200, 200);
          const ctx = canvas.getContext('2d');
          
          const background = await Canvas.loadImage("./Images/JailTST.png");
  
        
        
      
        
          const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({format: 'jpg'}));
          ctx.drawImage(avatar, 0, 0, 200, 200); //25 25 200 200
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
      
          
          
        
          const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jailed-image.png');
        
          msg.channel.send(`You're jailed now.`, attachment);
      }
    }



    }else{
      createEmbed("#E5453D", "Error", "Please use the correct format: !jail @user")
      msg.channel.send(mainEmbed)
    }
  }
})







client.on('message', async msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!coffin")){
    if (msg.mentions.users.size) {
      const taggedUseravatarslap = msg.mentions.users.first();

      if(taggedUseravatarslap === msg.author){
        const canvas = Canvas.createCanvas(640, 360);
        const ctx = canvas.getContext('2d');
        
        const background = await Canvas.loadImage("./Images/dancing_coffin.jpg");

      
      
    
      
        const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({format: 'jpg'}));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
        ctx.drawImage(avatar, 100, 20, 200, 200); //25 25 200 200
    
        
        
      
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jailed-image.png');
      
        msg.channel.send(attachment);
      }else{

        if(taggedUseravatarslap.id === '729099412265107497')
        {
          msg.reply('SNOOPS SHALL NOT BE JAILED! THAT IS ANIMAL ABUSE! I SHALL JAIL YOU INSTEAD!')

          const canvas = Canvas.createCanvas(640, 360);
          const ctx = canvas.getContext('2d');
          
          const background = await Canvas.loadImage("./Images/dancing_coffin.jpg");
  
        
        
      
        
          const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({format: 'jpg'}));
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
          ctx.drawImage(avatar, 100, 20, 200, 200); //25 25 200 200
          
          
        
          const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jailed-image.png');
        
          msg.channel.send(attachment);
        }else{
  
          const canvas = Canvas.createCanvas(640, 360);
          const ctx = canvas.getContext('2d');
          
          const background = await Canvas.loadImage("./Images/dancing_coffin.jpg");
  
        
        
      
        
          const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({format: 'jpg'}));
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
          ctx.drawImage(avatar, 100, 20, 200, 200); //25 25 200 200
      
          
          
        
          const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jailed-image.png');
        
          msg.channel.send(attachment);
      }
    }



    }else{
      createEmbed("#E5453D", "Error", "Please use the correct format: !coffin @user")
      msg.channel.send(mainEmbed)
    }
  }
})



























client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith('!caps')){
    if(!msg.content.toLowerCase().startsWith("!capsfilter")){
    if (msg.author.bot) return;
    let message = msg.content
    const args = message.split(' ');
     args.shift();
     //if(args.join(' ').toLowerCase().includes("!caps") || args.join(' ').toLowerCase().includes("!lowercase")){
      // msg.reply("seems like you're trying to spam, but this won't work.")
     //}else{
      if(args.join(' ') === ""){
        createEmbed("#E5453D", "Error", "Please use the correct format: !caps [text]")
        msg.channel.send(mainEmbed) 
       }else{
      //msg.channel.send(args.join(' ').toUpperCase());
      msg.channel.send(args.join(' ').toUpperCase(), {"allowedMentions": { "users" : []}})
       }
     //}
  }
}
})




client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith('!lowercase')){
    if (msg.author.bot) return;
    let message = msg.content
    const args = message.split(' ');
     args.shift();

     //if(args.join(' ').toLowerCase().includes("!caps") || args.join(' ').toLowerCase().includes("!lowercase")){
      //msg.reply("seems like you're trying to spam, but this won't work.")
    //}else{
      if(args.join(' ') === ""){
        createEmbed("#E5453D", "Error", "Please use the correct format: !say [text]")
        msg.channel.send(mainEmbed) 
       }else{
     //msg.channel.send(args.join(' ').toLowerCase());
     msg.channel.send(args.join(' ').toLowerCase(), {"allowedMentions": { "users" : []}})
       }
    //}
  }
})
















client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!choose")){
    if (msg.author.bot) return;
    let message = msg.content
    const args = message.split(' ');
     args.shift();
     let decisions= [args.join().toString()]
      argschoice =  Math.floor(Math.random() * args.length);
      if(args.join(' ') === ""){
        createEmbed("#E5453D", "Error", "Please use the correct format: !choose [choice1] [choice2]...")
        msg.channel.send(mainEmbed)
      }else{
     //msg.channel.send(args[argschoice]);
     msg.channel.send(args[argschoice], {"allowedMentions": { "users" : []}})
      }
      
  }
})









client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!say")){
    if (msg.author.bot) return;
    //if(msg.content.toLowerCase().split("!say").length - 1 >= 2){
      //msg.reply("Seems like you're trying to spam, but this won't work :)")
    //}else{
    let message = msg.content
    const args = message.split(' ');
     args.shift();
     if(args.join(' ') === ""){
      createEmbed("#E5453D", "Error", "Please use the correct format: !say [text]")
      msg.channel.send(mainEmbed) 
     }else{
       filtered = args.join(' ').replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
     //msg.channel.send(filtered)
     msg.channel.send(args.join(' '), {"allowedMentions": { "users" : []}})
     }
    //}
  }
})


client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!pancake"){
    if (msg.author.bot) return;
    msg.channel.send({files: ["./Images/Pancake.jpg"]})
    msg.react('🥞')
  }
})









client.on('message', async msg=>{
  if(msg.content.toLowerCase().startsWith("!facepalm")){
    if (msg.author.bot) return;
    if(msg.mentions.users.size){
      const taggedUseravatarslap = msg.mentions.users.first();
        const canvas = Canvas.createCanvas(331, 238);
        const ctx = canvas.getContext('2d');
      
        const background = await Canvas.loadImage('./Images/Facepalm.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
      
      
    
      
        const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 65, 10, 125, 125); //25 25 200 200
    
        
        
      
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
      
        msg.channel.send(attachment);
      }else{
        createEmbed("#E5453D", "Error", "Please use the correct format: !facepalm @user")
        msg.channel.send(mainEmbed)
      }
    }
    })








    client.on('message', async msg=>{
      if(msg.content.toLowerCase().startsWith("!dollar")){
        if (msg.author.bot) return;
        if(msg.mentions.users.size){
          const taggedUseravatarslap = msg.mentions.users.first();
            const canvas = Canvas.createCanvas(725, 307);
            const ctx = canvas.getContext('2d');
          
            const background = await Canvas.loadImage('./Images/us_dollar_1.png');
            const greenscale = await Canvas.loadImage('./Images/GreenScale.png');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
          
          
        
          
            const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({ format: 'jpg' }));
            
            ctx.drawImage(avatar, 275, 80.5, 185, 185); //25 25 200 200
            ctx.drawImage(greenscale, 0, 0, 725, 307)
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
        
            
            
          
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
          
            msg.channel.send(attachment);
        }else{
          createEmbed("#E5453D", "Error", "Please use the correct format: !dollar @user")
          msg.channel.send(mainEmbed)
        }
          }
        })




        client.on('message', async msg=>{
          if(msg.content.toLowerCase().startsWith("!baby")){
            if (msg.author.bot) return;
            if(msg.mentions.users.size){
              const taggedUseravatarslap = msg.mentions.users.first();
                const canvas = Canvas.createCanvas(1080, 1080);
                const ctx = canvas.getContext('2d');
              

                const background = await Canvas.loadImage('./Images/Toddler.jpg');
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//0
              
              
            
              
                const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({ format: 'jpg' }));
                ctx.drawImage(avatar, 550, 25, 300, 300); //25 25 200 200
            
                
                
              
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
              
                msg.channel.send(attachment);
            }else{
              createEmbed("#E5453D", "Error", "Please use the correct format: !baby @user")
              msg.channel.send(mainEmbed)
            }
              }
            })








































client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!log")){
    console.log(msg.content+" --- Logged by --- "+msg.author.username)
  }
})



















































client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!cheese"){
    if (msg.author.bot) return;
    msg.channel.send({files: ["./Images/Cheese.jpg"]})
  }
})

client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!createaccount"){
    if (msg.author.bot) return;
    fs.writeFileSync('User_Data/USER'+msg.author.id+'.txt', '100', function (err) {
      if (err) return console.log(err);
      console.log(err);
    })
  }
})


const beggedRecently = new Set();
client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!beg"){
    if (msg.author.bot) return;


    if (beggedRecently.has(msg.author.id)) {
      createEmbed("#E5453D", "Error", "You are begging too much! Please wait before using the command again (Cooldown is 1 minute).")
      msg.channel.send(mainEmbed)
} else {

  UserMoney = fs.readFileSync('User_Data/USER'+msg.author.id+'.txt')

  donateammount = (Math.floor(Math.random()*100))
  createEmbed("#80FF80", "Economy - Beg", "You have recieved $"+donateammount+".")
  msg.channel.send(mainEmbed)
  
      fs.writeFileSync('User_Data/USER'+msg.author.id+'.txt', (donateammount+parseInt(UserMoney)).toString(), function (err) {
        if (err) return console.log(err);
        console.log(err);
      })

  // Adds the user to the set so that they can't talk for a minute
  beggedRecently.add(msg.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    beggedRecently.delete(msg.author.id);
  }, 60000);
}
  }
})

client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!bal") || msg.content.toLowerCase().startsWith("!balance")){
    if (msg.author.bot) return;
    if(!msg.mentions.users.size){
    if(fs.existsSync('User_Data/USER'+msg.author.id+'.txt')){
    msg.reply('your balance is $'+fs.readFileSync('User_Data/USER'+msg.author.id+'.txt').toString())
    }else{
      msg.reply('please create an account by entering !createaccount')
    }


  }else{
    mentioneduser = msg.mentions.users.first()

    if(fs.existsSync('User_Data/USER'+mentioneduser.id+'.txt')){
      msg.reply(mentioneduser.username+"s balance is $"+fs.readFileSync('User_Data/USER'+mentioneduser.id+'.txt').toString())
      }else{
        createEmbed("#E5453D", "Error", "That person doesn't have an account. They must send a message for an account to be automatically created.")
        msg.channel.send(mainEmbed)
      }


  }


  }
})



client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!give")){
    if (msg.author.bot) return;
    if(msg.content.toLowerCase().startsWith("!give ")){
    
    let message = msg.content
    const args = message.split(' ');
     args.shift();


    if(fs.existsSync('User_Data/USER'+msg.author.id+'.txt')){





      if(isNaN(args.join(' ')) || args.join(' ') < 1){
        createEmbed("#E5453D", "Error", "Please enter a valid number.")
        msg.channel.send(mainEmbed)
      }else{
        UserMoney = fs.readFileSync('User_Data/USER'+msg.author.id+'.txt')
        if(parseInt(args.join(' ')) > UserMoney){
          createEmbed("#E5453D", "Error", "You don't have enough money. You need $"+parseInt(args.join(' ')-UserMoney)+" more to give that much.")
          msg.channel.send(mainEmbed)
          //msg.reply("You don't have enough money! You need $"+parseInt(args.join(' ')-UserMoney))
        }else{
        sendamount = parseInt(args.join(' '))





        msg.reply('who would you like to donate to?')
        const filter = m => m.author.id ===  msg.author.id;
        msg.channel.awaitMessages(filter, {
        time: 10000, // leave this the same
        max: 1
           }).then(async(collected) => {
            if(collected.first().content == '!cancel'){
            message.reply('command cancelled.')
        } 
        //console.log('collected :' + collected.first().content)
        
        if(collected.first().mentions.users.size){
          if(fs.existsSync('User_Data/USER'+msg.author.id+'.txt')){
            if(fs.existsSync('User_Data/USER'+collected.first().mentions.users.first().id+'.txt')){
          const taggedUser = collected.first().mentions.users.first();

          fs.writeFileSync('User_Data/USER'+msg.author.id+'.txt', (parseInt(UserMoney-sendamount)).toString(), function (err) {
            if (err) return console.log(err);
            console.log(err);
          })

          msg.reply('your balance is now $'+fs.readFileSync('User_Data/USER'+msg.author.id+'.txt').toString())

          
          console.log(taggedUser.username)
          User2Bal = parseInt(fs.readFileSync('User_Data/USER'+taggedUser.id+'.txt'))

          fs.writeFileSync('User_Data/USER'+taggedUser.id+'.txt', (parseInt(User2Bal+sendamount)).toString(), function (err) {
            if (err) return console.log(err);
            console.log(err);
          })
        }else{
          msg.reply("that person doesn't have an account!")
        }
        }else{
          msg.reply("you don't have an account! Create one with !createaccount")
        }
        }else{
          msg.reply('please enter a valid person! The donation has been cancelled.')
        }
        }).catch(() => {
            // what to do if a user takes too long goes here 
        
        msg.reply('the donation was cancelled.') 
        });
      }
      }
    }else{
      msg.reply('Please create an account by entering !createaccount')
    }
  }else{
    msg.reply('please enter a valid number! Make sure you did !give [amount] and not give[amount]!')
  }
} 
})


const robbedRecently = new Set();
client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!rob")){
    if (msg.author.bot) return;
    if(fs.existsSync('User_Data/USER'+msg.author.id+'.txt')){
    if(msg.mentions.users.size){



      if (robbedRecently.has(msg.author.id)) {
        createEmbed("#E5453D", "Error", "You're robbing too much! Please wait before robbing again. (Cooldown is 10 minutes).")
        msg.channel.send(mainEmbed)
} else {

  taggedUser = msg.mentions.users.first()
  if(fs.existsSync('User_Data/USER'+taggedUser+'.txt')){
  msgauthoracc = parseInt(fs.readFileSync('User_Data/USER'+msg.author.id+'.txt'))
  stealperson = parseInt(fs.readFileSync('User_Data/USER'+taggedUser.id+'.txt'))
  cansteal = Math.floor(Math.random()*3)

  if(stealperson < 500){
    createEmbed("#E5453D", "Error", "That person has less than $500. You cannot rob them.")
    msg.channel.send(mainEmbed)
  }else{
    if(cansteal === 2){
      msg.reply('you were caught! You bribed the cops to let you free, so you lost $'+Math.floor(msgauthoracc/5))
      fs.writeFileSync('User_Data/USER'+msg.author.id+'.txt', (parseInt(msgauthoracc-(msgauthoracc/5))).toString(), function (err) {
        if (err) return console.log(err);
        console.log(err);
      })

    }else{
      lostmoney = Math.floor(Math.random()*(stealperson/5))

      fs.writeFileSync('User_Data/USER'+msg.author.id+'.txt', (parseInt(msgauthoracc+lostmoney)).toString(), function (err) {
        if (err) return console.log(err);
        console.log(err);
      })

      fs.writeFileSync('User_Data/USER'+taggedUser.id+'.txt', (parseInt(stealperson-lostmoney)).toString(), function (err) {
        if (err) return console.log(err);
        console.log(err);
      })

      msg.reply("you have stolen $"+lostmoney)
    }
  
  }
  }else{
    createEmbed("#E5453D", "Error", "That person doesn't have an account. They must send a message to create one automatically.")
    msg.channel.send(mainEmbed)
  }

    // Adds the user to the set so that they can't talk for a minute
    robbedRecently.add(msg.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      robbedRecently.delete(msg.author.id);
    }, 600000);
}






      





    }else{
      msg.reply('please enter a valid person!')
    }
  }else{
    msg.reply('you must create an account first! Use !createaccount.')
  }
  
}
})









const talkedRecently = new Set();
client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!ring")){
    if(msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{

      if(!msg.member.voice.channel){
        createEmbed("#E5453D", "Error", "You must be in a voice channel to ring!")
        msg.channel.send(mainEmbed) 
      }else{
        if(!fs.existsSync('Blocked_Data/HardBlock/USER'+msg.author.id+'.txt')){
  
      //let userVoiceChannel = msg.member.voice.channel.name
      //taggedUser = msg.mentions.users.first()
      //client.users.cache.get(taggedUser.id).send(msg.author.username+" wants you to join a voice chat in "+msg.guild.name+",in the "+userVoiceChannel+" channel!");
      

      if(msg.mentions.users.size){


        
        let userVoiceChannel = msg.member.voice.channel.name
      taggedUser = msg.mentions.users.first()
      
      if(taggedUser != msg.author){
      if (!fs.existsSync("./Blocked_Data/UserBlock/"+taggedUser.id+"/"+msg.author.id+".txt")) {
        if(!fs.existsSync('Blocked_Data/HardBlock/USER'+taggedUser.id+'.txt')){


      


      msg.member.voice.channel.createInvite({unique: false})
      .then(invite => {

        if (talkedRecently.has(msg.author.id)) {
          createEmbed("#E5453D", "Error", "Please wait before ringing that user (Cooldown is 15 seconds).")
          msg.channel.send(mainEmbed)
    } else {
      msg.react("👍")
      ringEmbed = new Discord.MessageEmbed()
      .setTitle(msg.author.username+" wants you to join a voice chat in "+msg.guild.name+", in the "+userVoiceChannel+" channel!")
      .setDescription("Click on the link to join the voice channel.")
      .setThumbnail(msg.guild.iconURL({dynamic: true}))
      .setURL("https://discord.gg/"+invite.code)
      .setAuthor(taggedUser.tag+",")
      .addField('\u200b', '\u200b')
      .setFooter("Invitation sent by "+msg.member.user.tag, msg.author.displayAvatarURL({dynamic: true}))
      .setColor("#EB5E34")

      client.users.cache.get(taggedUser.id).send(ringEmbed).catch(error=>{
        console.log("Blocked.")
      })
      client.users.cache.get(taggedUser.id).send("https://discord.gg/"+invite.code).catch(error=>{
        createEmbed("#E5453D", "Error", "There was an error inviting that person. They could have blocked me or disabled DMs.")
        msg.channel.send(mainEmbed) 
      })
      talkedRecently.add(msg.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(msg.author.id);
      }, 15000);

    
    }

      

    })

  }else{
    createEmbed("#E5453D", "Error", "That user has hardblock enabled.")
    msg.channel.send(mainEmbed)
  }
  }else{
    createEmbed("#E5453D", "Error", "That user has blocked you.")
    msg.channel.send(mainEmbed) 
  }
}else{
  createEmbed("#E5453D", "Error", "You can't ring yourself.")
  msg.channel.send(mainEmbed) 
}
      }else{
        createEmbed("#E5453D", "Error", "Please enter a valid user!")
        msg.channel.send(mainEmbed)
      }
    }else{
      createEmbed("#E5453D", "Error", "HardBlock is enabled. You cannot ring users.")
      msg.channel.send(mainEmbed)
    }
    }
    }
  }
})



var http = require('http');

client.on('message', async message => {
  if (message.author.bot) return;
	if (message.content.toLowerCase().startsWith('!play') | message.content.toLowerCase().startsWith('!p ')) {
    if (message.channel.type === 'dm') return;
    let msgurl = message.content
    const args = msgurl.split(' ');
     args.shift();
if(args.join(' ') === "") return
     const yts = require( 'yt-search' )
const r = await yts(args.join(' '))
const videos = r.videos.slice( 0, 1 )
videos.forEach( function ( v ) {
	const views = String( v.views ).padStart( 10, ' ' )
  const idr = v.url
  const idrtitle = v.title
  const idrauthor = v.author
  const idricon = v.image
     isValid = true
      var getYouTubeID = require('get-youtube-id');
      var YTid = getYouTubeID(idr);
      if(YTid === null){
        isValid = false
      }
      if(isValid === true){
		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) {
      createEmbed("#E5453D", "Error", "Please join a voice channel first.")
      message.channel.send(mainEmbed)
			return
		}
UserAvatarURL = message.author.displayAvatarURL()
var getYoutubeTitle = require('get-youtube-title')
const getVideoId = require('get-video-id');
vidid=getVideoId(idr).id;
getYoutubeTitle(vidid, function (err, title) {
  const vidtitle=title
YT_KEY = "***REMOVED***"
let authorUrl = v.author.url
if(authorUrl.startsWith("https://youtube.com/user/")){
  var cArgs = authorUrl.replace('https://youtube.com/user/','');
  CHANNEL_ID = cArgs
  userPFP = `https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${CHANNEL_ID}&fields=items%2Fsnippet%2Fthumbnails&key=${YT_KEY}`
}else{
  var cArgs = authorUrl.replace('https://youtube.com/channel/','');
  CHANNEL_ID = cArgs
  userPFP = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&fields=items%2Fsnippet%2Fthumbnails&key=${YT_KEY}`
}
const fetch = require('node-fetch');
let settings = { method: "Get" };
fetch(userPFP, settings)
    .then(res => res.json())
    .then((json) => {
      AuthorImage = json["items"][0]["snippet"]["thumbnails"]["high"]["url"]
  SongEmbed = new Discord.MessageEmbed()
  .setAuthor(v.author.name, AuthorImage)
  .setThumbnail(idricon)
  .setTitle(idrtitle)
  .setColor("#819AD4")
  .setURL(idr)
  .setDescription(`Now playing ${idrtitle} in ${voiceChannel.name}.`)
  .setFooter(message.member.user.tag, message.author.displayAvatarURL({dynamic: true}))
  .addFields(
		{ name: 'Duration:', value: v.duration, inline: false },
    { name: 'Released:', value: v.ago, inline: true },
		{ name: 'ID:', value: v.videoId, inline: true},
		{ name: 'Views:', value: v.views, inline: true},
  )
  .setTimestamp()
    message.channel.send(SongEmbed)
    voiceChannel.join().then(connection => {
      const stream = ytdl(idr, { filter: 'audioonly', quality: "highest" })
      const dispatcher = connection.play(stream)
      dispatcher.on("finish",()=>voiceChannel.leave())
      dispatcher.on('error', msg=>{
        
          createEmbed("#E5453D", "Error", "An unknown error has occured.")
          message.channel.send(mainEmbed)
          voiceChannel.leave()
          console.log(`!play Error: Term ${args.join(' ')}, URL: ${idr}, Error: ${err}`)
      })
  });
})
  })
}else{
  createEmbed("#E5453D", "Error", "There was an error while playing the song. (Link not valid.)")
  message.channel.send(mainEmbed)
}
  })
  }
});


client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!stop"){
    if (msg.author.bot) return;
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
    const voiceChannel = msg.member.voice.channel;
    if(!voiceChannel){
      createEmbed("#E5453D", "Error", "You must join a voice channel first.")
      message.channel.send(mainEmbed)
    }else{
      voiceChannel.leave()
    }
  }
}
})



client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!stats"){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{

      if(!fs.existsSync('UserLevels/USER'+msg.author.id+'.txt')){
        var UserMSG = 1
      }else{
        var UserMSG = 1 + parseInt(fs.readFileSync('UserLevels/USER'+msg.author.id+'.txt').toString())
      }

    Age = msg.member.user.createdAt

    const txtChannels = msg.guild.channels.cache.filter(channel => channel.type === "text").size
    
    const vcChannels = msg.guild.channels.cache.filter(channel => channel.type === "voice").size

    BotVersion = fs.readFileSync('Botvs.txt')

    statembed = new Discord.MessageEmbed()
    .setColor("#007777")
    .setTitle("___Stats___")
    .setDescription(`____${msg.member.user.tag}'s Stats____

    
    Cash: $${fs.readFileSync('User_Data/USER'+msg.author.id+'.txt').toString()}
    Created on: ${Age.getUTCMonth()+1}/${Age.getUTCDate()}/${Age.getFullYear()} at ${Age.getUTCHours()}:${Age.getUTCMinutes()} 
    ID: ${msg.author.id}
    Total messages sent: ${UserMSG}


    ____${msg.guild.name}____


    Members: ${msg.guild.memberCount}
    Text channels: ${txtChannels}
    Voice channels: ${vcChannels}
    
    
    ____UselessBot Stats____
    

    Servers: ${client.guilds.cache.size}
    Node version: ${process.version}
    UselessBot version: ${BotVersion}
    `)
    msg.channel.send(statembed)
  }
}
})










const yts = require( 'yt-search' )









client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!invite"){
    if(msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{

    msg.channel.createInvite({unique: false})
    .then(invite => {


    client.users.cache.get(msg.author.id).send(`Invite for ${msg.guild.name}: <https://discord.gg/${invite.code}> 
Invite me to a server: <https://discord.useless-bot.com>`).catch(error=>{
        msg.reply('there was an error sending a message. Make sure that your DMs are enabled, then try again.')
      })


    })
  }
  }
})








client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!changelog"){
    Changelog = fs.readFileSync('Changelog.txt')
    C_embed = new Discord.MessageEmbed()
    .setTitle("Changelog")
    .setDescription(Changelog)
    msg.channel.send(C_embed)
  }
})




client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!poll")){
    // Import the discord.js-pagination package
const pollEmbed = require('discord.js-poll-embed');
if (msg.channel instanceof Discord.DMChannel){
  msg.reply(DmError)
}else{


let message = msg.content
const args = message.split(' ');
 args.shift();
 args.shift()
 let PollVal= [args.join().toString()]

 const time = message.split(' ');




// Call the pollEmbed method, first three arguments are required
// title is the poll title
// options is an array of strings, which contains the poll options
// timeout is the time in seconds for which users can vote for. 0 makes it infinite and default value is 30 seconds
// emojiList is the list of emojis used for voting. Defaults to 10 simple digit emojis. Which also limits the no of options you can give by default to 10. While using custom emojis be careful that discord doesnt support some emojis.
// forceEndPollEmoji is the emoji which can be voted by the poll author to force close voting. Default value is a green check box.
if(!isNaN(time[1]) && time[1] > -1){
pollEmbed(msg, "Created by "+msg.author.username, args, time[1]);
}else{
  msg.reply("please enter a valid time for the poll to last. (Leave it as 0 if you don't want it to end.)")
}
// There you go, now you have poll embeds


  }
}
})

const discordTTS=require("discord-tts");
const { getInstalledVoices } = require("say");


client.on("message",msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!vcsay")){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{

    let message = msg.content
    const args = message.split(' ');
     args.shift();

      const voiceChannel = msg.member.voice.channel;

      if(!voiceChannel){
        msg.reply('please join a voice channel to use this command.')
      }else{
        if(args.join(' ') != ""){
      voiceChannel.join().then(connection => {
          const stream = discordTTS.getVoiceStream(args.join(' '))//.catch((err) => {
            //console.error(err);
            //msg.reply('there was an error using the command.')
        //});

          const dispatcher = connection.play(stream)
          dispatcher.on("finish",()=>voiceChannel.leave())

          dispatcher.on('error', msg=>{
            
              msg.reply('there was a problem with the command. Please try using it again.')
              console.log('VCSAY error. Tried using text: '+args.join(' '))
          })
      });
    }else{
      msg.reply("please enter some text for me to read.")
    }
    }
  }
}
});



var figlet = require('figlet');
const { EventEmitter } = require("events");
const { sign } = require("crypto");
const { arch } = require("os");
const { getInfo } = require("ytdl-core");
const { now, min } = require("moment-timezone");

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!ascii")){

    let message = msg.content
    const args = message.split(' ');
     args.shift();
    
    asciifinal=figlet.textSync(args.join(' '), {font: 'Roman',horizontalLayout: 'default',verticalLayout: 'default',width: 80,whitespaceBreak: true})
    msg.channel.send("```"+asciifinal+"```")
    
  }
})







suicidekey=["suicide", "kill myself", "want to die"]

function detsui(value) {
  var prohibited = ['banana', 'apple'];

  for (var i = 0; i < suicidekey.length; i++) {
    if (value.indexOf(suicidekey[i]) > -1) {
      return false;
    }
  }
  return true;
}


client.on('message', msg=>{

  if(detsui(msg.content.toLowerCase()) === false){
    if (msg.author.bot) return;
    if(msg.author.id==="739251643425620019"){
    }else{
    msg.reply("If you are feeling suicidal, please call a suicide hotline! You are an amazing person and there are people who care about you! http://www.suicide.org/international-suicide-hotlines.html https://suicidepreventionlifeline.org")
  }
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!report")){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
      if(fs.existsSync('Channels/Reports/CHANNEL'+msg.guild.id+'.txt')){
    channelID = fs.readFileSync('Channels/Reports/CHANNEL'+msg.guild.id+'.txt').toString()
    reportsChannel = msg.guild.channels.cache.find(channel => channel.id === channelID)
    if(msg.guild.channels.cache.get(channelID) != undefined)  { 
    let message = msg.content
    const args = message.split(' ');
     args.shift();

     if(msg.mentions.users.size){
      Reason = args.shift(' ')

      filtered = args.join(' ').replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
      if(args.join(' ') != ""){
        if(msg.member.nickname){
          filtered2 = msg.member.nickname.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
        reportsChannel.send(msg.member.user.tag + " (Also known as "+ filtered2 + ")" + " reported " + msg.mentions.users.first().tag + " || Reason: " + filtered)
        }else{
        reportsChannel.send(msg.member.user.tag + " reported " + msg.mentions.users.first().tag + " || Reason: " + filtered)
        }
      }else{
        if(msg.member.nickname){
          filtered2 = msg.member.nickname.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
        reportsChannel.send(msg.member.user.tag + " (Also known as "+ filtered2 + ")" + " reported " + msg.mentions.users.first().tag + " || Reason: Unspecified")
        }else{
        reportsChannel.send(msg.member.user.tag + " reported " + msg.mentions.users.first().tag + " || Reason: Unspecified")
        }
      }
     }else{
       //msg.reply("please use the command correctly: !report @user [reason]")
       createEmbed("#E5453D", "Error", "Please use the command correctly: !report @user [reason]")
       msg.channel.send(mainEmbed)
     }
  }else{
    createEmbed("#E5453D", "Error", "The reports channel for this server was deleted.")
    msg.channel.send(mainEmbed)
    //msg.reply("the reports channel for this server has been deleted.")
  }
}else{
  createEmbed("#E5453D", "Error", "This server doesn't have a reporting channel. If you are an admin, please use the !setreport command in the channel you want to report in.")
  msg.channel.send(mainEmbed)
}
}
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!kick")){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
    if (msg.member.hasPermission('KICK_MEMBERS')) {
      if(msg.mentions.users.size){

        let message = msg.content
        const args = message.split(' ');
        args.shift();
        args.shift()



      msg.mentions.members.first().kick(args.join(' ')).catch(error=>{
        createEmbed("#E5453D", "Error", "There was an error with the command. I might not have permission to kick, or that user has a higher ranked role than me.")
        msg.channel.send(mainEmbed)
      })
      msg.react('👍')
    }else{
      msg.reply('please ping the user you want to kick.')
    }
    }else{
      createEmbed("#E5453D", "Error", "You don't have permission to kick members.")
      msg.channel.send(mainEmbed)
    }
  }
}
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!ban")){
    if(msg.content.toLowerCase().startsWith("!banana")){
    }else{
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
    if (msg.member.hasPermission('BAN_MEMBERS')) {
      if(msg.mentions.users.size){

        let message = msg.content
        const args = message.split(' ');
        args.shift();
        args.shift()


      msg.mentions.members.first().ban({reason: args.join(' ')}).catch(error=>{
        createEmbed("#E5453D", "Error", "There was an error with the command. I might not have permission to ban, or that user has a higher ranked role than me.")
        msg.channel.send(mainEmbed)
      })
      msg.react('👍')
    }else{
      msg.reply('please ping the user you want to ban.')
    }
    }else{
      createEmbed("#E5453D", "Error", "You don't have permission to ban members.")
      msg.channel.send(mainEmbed)
    }
  }
}
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!mute")){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
   if(msg.member.hasPermission('MUTE_MEMBERS')){
     if(msg.mentions.users.size){
       msg.mentions.members.first().voice.setMute(true).catch(error=>{
        createEmbed("#E5453D", "Error", "There was an error with the command. I might not have permission to mute, or that user isn't in a voice channel.")
        msg.channel.send(mainEmbed)
      })
     }
   }else{
    createEmbed("#E5453D", "Error", "You don't have permission to mute members.")
    msg.channel.send(mainEmbed)
   }
  }
}
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!unmute")){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
   if(msg.member.hasPermission('MUTE_MEMBERS')){
     if(msg.mentions.users.size){
       msg.mentions.members.first().voice.setMute(false).catch(error=>{
        createEmbed("#E5453D", "Error", "There was an error with the command. I might not have permission to unmute, or that user isn't in a voice channel.")
        msg.channel.send(mainEmbed)
      })
     }
   }else{
    createEmbed("#E5453D", "Error", "You don't have permission to unmute members.")
    msg.channel.send(mainEmbed)
   }
  }
}
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!deafen")){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
   if(msg.member.hasPermission('DEAFEN_MEMBERS')){
     if(msg.mentions.users.size){
       msg.mentions.members.first().voice.setDeaf(true).catch(error=>{
        createEmbed("#E5453D", "Error", "There was an error with the command. I might not have permission to deafen, or that user isn't in a voice channel.")
        msg.channel.send(mainEmbed)
      })
     }
   }else{
    createEmbed("#E5453D", "Error", "You don't have permission to deafen members.")
    msg.channel.send(mainEmbed)
   }
  }
}
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!undeafen")){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
   if(msg.member.hasPermission('DEAFEN_MEMBERS')){
     if(msg.mentions.users.size){
       msg.mentions.members.first().voice.setDeaf(false).catch(error=>{
        createEmbed("#E5453D", "Error", "There was an error with the command. I might not have permission to undeafen, or that user isn't in a voice channel.")
        msg.channel.send(mainEmbed)
      })
     }
   }else{
    createEmbed("#E5453D", "Error", "You don't have permission to undeafen members.")
    msg.channel.send(mainEmbed)
   }
  }
}
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!disconnect")){
    if (msg.channel instanceof Discord.DMChannel){
      msg.reply(DmError)
    }else{
   if(msg.member.hasPermission('MOVE_MEMBERS')){
     if(msg.mentions.users.size){
       msg.mentions.members.first().voice.setChannel(null).catch(error=>{
        createEmbed("#E5453D", "Error", "There was an error with the command. I might not have permission to disconnect, or that user isn't in a voice channel.")
        msg.channel.send(mainEmbed)
      })
     }
   }else{
    createEmbed("#E5453D", "Error", "You don't have permission to disconnect members.")
    msg.channel.send(mainEmbed)
   }
  }
}
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!setreports"){
    if (msg.channel.type === 'dm') return;
    if(msg.member.hasPermission('MANAGE_GUILD')){
    fs.writeFileSync('Channels/Reports/CHANNEL'+msg.guild.id+'.txt', msg.channel.id, function (err) {
      if (err) return console.log(err);
      console.log(err);

      createEmbed("#E5453D", "Error", "Failed to create a reports channel")
      msg.channel.send(mainEmbed)
    })
    createEmbed("#80FF80", "Moderation - Reports", "Reports channel set.")
    msg.channel.send(mainEmbed)
  }else{
    createEmbed("#E5453D", "Error", "You don't have permission to manage this server.")
    msg.channel.send(mainEmbed)
  }
  }


})



client.on('message', msg=>{
  if (msg.author.bot) return;
  if(!fs.existsSync('UserLevels/USER'+msg.author.id+'.txt')){
    fs.writeFileSync('UserLevels/USER'+msg.author.id+'.txt', '1', function (err) {
      if (err) return console.log(err);
      console.log(err);
    })
  }else{

    var UserMSG = parseInt(fs.readFileSync('UserLevels/USER'+msg.author.id+'.txt').toString())
    var UserWrite = UserMSG+1
    UserWriteStr = UserWrite.toString()
  fs.writeFileSync('UserLevels/USER'+msg.author.id+'.txt', UserWriteStr, function (err) {
    if (err) return console.log(err);
      console.log(err);
    })
  }
})

const workedRecently = new Set();
client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!work"){


    

    function work(){

    if (workedRecently.has(msg.author.id)) {

      let userInventory = JSON.parse(fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`))
  let b1 = parseInt(userInventory["computer"])
  let b2 = parseInt(userInventory["phone"])
  let b3 = parseInt(userInventory["taxpass"])
  let b4 = parseInt(userInventory["robot"])


  if(b1 > 0){
    b1 = b1*1.5
      }else{
    b1 = 1
      }
    
      if(b2 > 0){
        b2=b2*1.1
          }else{
        b2 = 1
          }
    
          if(b3> 0){
            b3=b3*2
              }else{
            b3 = 1
              }
    
              if(b4> 0){
                b4=b4*5
                  }else{
                b4 = 1
                  }


      createEmbed("#E5453D", "Error", `You are working too much! Please wait before using the command again (Cooldown is ${Math.floor(60000/(b2*b1))/1000} seconds).`)
      msg.channel.send(mainEmbed)
} else {

  let userInventory = JSON.parse(fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`))
  let b1 = parseInt(userInventory["computer"])
  let b2 = parseInt(userInventory["phone"])
  let b3 = parseInt(userInventory["taxpass"])
  let b4 = parseInt(userInventory["robot"])


  if(b1 > 0){
b1 = b1*1.5
  }else{
b1 = 1
  }

  if(b2 > 0){
    b2=b2*1.1
      }else{
    b2 = 1
      }

      if(b3> 0){
        b3=b3*2
          }else{
        b3 = 1
          }

          if(b4> 0){
            b4=b4*5
              }else{
            b4 = 1
              }
  var addBal = 1*b3*b4*5

  UserMoney = fs.readFileSync('User_Data/USER'+msg.author.id+'.txt')
  
  createEmbed("#80FF80", "Economy - Work", "You have received $"+addBal)
  msg.channel.send(mainEmbed)
  
      fs.writeFileSync('User_Data/USER'+msg.author.id+'.txt', (addBal+parseInt(UserMoney)).toString(), function (err) {
        if (err) return console.log(err);
        console.log(err);
      })


  workedRecently.add(msg.author.id);
  setTimeout(() => {
    workedRecently.delete(msg.author.id);
  }, Math.floor(60000/(b2*b1)));
}


    }


    setTimeout(() => {
      work()
    }, 3000);

  }
})





client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!icon")){
    if (msg.channel instanceof Discord.DMChannel){
    msg.reply(DmError)
    }else

    msg.channel.send(msg.guild.iconURL({dynamic: true}))
  }
})




function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}




client.on('message', msg=>{
  if (msg.author.bot) return;
  let message = msg.content
  const args = message.split(' ');
   args.shift();
  if(msg.content.toLowerCase().startsWith("!reverse")){
    if(args.join(' ') != ""){
    createEmbed("#224477", "Reversed message", reverseString(args.join(' ')))
    msg.channel.send(mainEmbed)
    }else{
      createEmbed("#E5453D", "Error", "Please enter some text to reverse. [!reverse (Text)]")
      msg.channel.send(mainEmbed)
    }
    //msg.reply("the reversed message is "+reverseString(args.join(' ')))
  }
})

client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('!embed')){
    let message = msg.content
    const args = message.split(' ');
     args.shift();
    args2 = args.join(' ').split(",")

    if(args2.length == 3){
      createEmbed(args2[0], args2[1], args2[2])
      msg.channel.send(mainEmbed)
    }else{
      createEmbed("#E5453D", "Error", "Please use the command correctly (!embed [HEX Color], [Title], [Description]).")
      msg.channel.send(mainEmbed)
    }
  }
})


client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!block")){
    if(msg.mentions.users.size){
      const taggedUser = msg.mentions.users.first();
      if(taggedUser === msg.author){
        createEmbed("#E5453D", "Error", "You can't block yourself.")
        msg.channel.send(mainEmbed) 
      }else{
      var dir = './'+msg.author.id;


      fs.mkdir(path.join(__dirname+"/Blocked_Data/UserBlock", msg.author.id), (err) => { 
            if (err) { 
                return console.error(err); 
            } 

        msg.react("👍")
            //console.log('Directory created successfully!'); 
        }); 

        fs.writeFileSync('Blocked_Data/UserBlock/'+msg.author.id+'/'+taggedUser+".txt", "Blocked", function (err) {
          if (err) return console.log(err);
          console.log(err);
        })

      }
    }else{
        createEmbed("#E5453D", "Error", "Please use the correct format: !block @user")
        msg.channel.send(mainEmbed) 
    }
  }
})

client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!unblock")){
    if(msg.mentions.users.size){
      const taggedUser = msg.mentions.users.first()
        if (fs.existsSync("./Blocked_Data/UserBlock/"+msg.author.id+"/"+taggedUser.id+".txt")) {
          fs.unlinkSync("./Blocked_Data/UserBlock/"+msg.author.id+"/"+taggedUser.id+".txt");

          msg.react("👍")
        }else{
          createEmbed("#E5453D", "Error", "That user isn't blocked.")
          msg.channel.send(mainEmbed) 
        }
    }else{
      createEmbed("#E5453D", "Error", "Please use the correct format: !unblock @user")
      msg.channel.send(mainEmbed) 
    }
  }
})



//var youtubesearchapi=require('youtube-search-api');




client.on("error", () => { client.login(token) });

//process.on('unhandledRejection', (reason, promise) => {
  //console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
//})



client.on('message', msg=>{
  if (msg.author.bot) return;
  if (msg.channel.type === 'dm') return;
  if(msg.content.toLowerCase().startsWith("!antilink")){
    if(msg.member.hasPermission('MANAGE_GUILD') && msg.member.hasPermission('MANAGE_MESSAGES')){
    if(msg.content.toLowerCase().startsWith("!caps ")){

    }else{
    let message = msg.content
    const args = message.split(' ');
     args.shift();

     if(args.join(' ').toLowerCase() === "true"){
      if(fs.existsSync('LinkFilter/SERVER'+msg.guild.id+'.txt')){
        createEmbed("#E5453D", "Error", "Link filtering is already enabled.")
        msg.channel.send(mainEmbed) 
      }else{
    msg.react("👍")

    fs.writeFileSync('LinkFilter/SERVER'+msg.guild.id+'.txt', '1', function (err) {
      if (err) return console.log(err);
      console.log(err);
    })
  }
  }else{

    if(args.join(' ').toLowerCase() === "false"){
    if(fs.existsSync('LinkFilter/SERVER'+msg.guild.id+'.txt')){
    fs.unlinkSync("./LinkFilter/SERVER"+msg.guild.id+".txt");
    msg.react("👍")
    }else{
      createEmbed("#E5453D", "Error", "Link filtering is not enabled.")
      msg.channel.send(mainEmbed) 
    }
  }else{
    createEmbed("#E5453D", "Error", "Please use the correct format: !antilink [true/false]")
    msg.channel.send(mainEmbed) 
  }
  }
  }
}else{
  createEmbed("#E5453D", "Error", "You don't have permission to do that. You need: **MANAGE_SERVER, MANAGE_MESSAGES**")
  msg.channel.send(mainEmbed) 
}
}
})  






client.on('message', msg => { //whenever a message is sent
  if (msg.channel.type === 'dm') return;
  if (msg.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
    if(fs.existsSync('LinkFilter/SERVER'+msg.guild.id+'.txt')){
    msg.delete() //delete the message
      .then(msg.channel.send("**Invite links aren't allowed on this server.**"))
    }
  }
})


client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!clap")){
    let message = msg.content
    let args = message.split(' ')
    args.shift()
    if(args.length > 1){
    //filtered = args.join(' 👏 ').replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    msg.channel.send(args.join(' 👏 '), {"allowedMentions": { "users" : []}})
    }else{
      createEmbed("#E5453D", "Error", "Please enter at least two words to clap. (!clap Word1 Word2)")
      msg.channel.send(mainEmbed) 
    }
  }
})

client.on('message', msg=>{
  if (msg.channel.type === 'dm') return;
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!hardblock")){
  if(msg.content.toLowerCase() === "!hardblock true"){

    if(fs.existsSync('Blocked_Data/HardBlock/USER'+msg.author.id+'.txt')){
      createEmbed("#E5453D", "Error", "You already have hardblock enabled.")
      msg.channel.send(mainEmbed) 
    }else{
      fs.writeFileSync('Blocked_Data/HardBlock/USER'+msg.author.id+'.txt', '1', function (err) {
        if (err) return console.log(err);
        console.log(err);
      })
      msg.react("👍")
    }

  }else{
    if(msg.content.toLowerCase() === "!hardblock false"){
      if(fs.existsSync('Blocked_Data/HardBlock/USER'+msg.author.id+'.txt')){
        fs.unlinkSync("./Blocked_Data/HardBlock/USER"+msg.author.id+".txt");
        msg.react("👍")
      }else{
        createEmbed("#E5453D", "Error", "Hardblock is not enabled.")
        msg.channel.send(mainEmbed) 
      }
    }else{
      createEmbed("#E5453D", "Error", "Please use the correct format: !hardblock [true/false]")
      msg.channel.send(mainEmbed) 
    }
  }
  }
})





//client.on('message', msg=>{
  //if(msg.content.toLowerCase() === "!sru"){
    //const usersCollection = msg.guild.members.cache;
    //const randomUser = usersCollection.random();
    //const userInfo = randomUser["user"]
    //msg.channel.send(userInfo["username"]+"#"+userInfo["discriminator"])
  //}
//})

client.on('message', msg=>{
  if (msg.channel.type === 'dm') return;
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!sru"){
    const randomUser = msg.guild.members.cache.random();
    msg.channel.send(`${randomUser.user.username}#${randomUser.user.discriminator}`);
  }
})







client.on('message', msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase() === "!setwelcome"){
    if (msg.channel.type === 'dm') return;
    if(msg.member.hasPermission('MANAGE_GUILD')){
    fs.writeFileSync('Channels/MemberLog/CHANNEL'+msg.guild.id+'.txt', msg.channel.id, function (err) {
      if (err) return console.log(err);
      console.log(err);

      createEmbed("#E5453D", "Error", "Failed to create a welcoming channel.")
      msg.channel.send(mainEmbed)
    })
    createEmbed("#80FF80", "Moderation - Reports", "Welcoming channel set.")
    msg.channel.send(mainEmbed)
  }else{
    createEmbed("#E5453D", "Error", "You don't have permission to manage this server.")
    msg.channel.send(mainEmbed)
  }
  }


})

client.on('message', msg=>{
  if (msg.channel.type === 'dm') return;
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith("!setmute")){
    if(msg.member.hasPermission('MANAGE_GUILD') && msg.member.hasPermission('MANAGE_ROLES')){
      if(msg.mentions.roles.size){
        var mRole = msg.mentions.roles.first()


        fs.writeFileSync('MuteData/ROLE'+msg.guild.id+'.txt', mRole.id, function (err) {
          if (err) return console.log(err);
          console.log(err);
          createEmbed("#E5453D", "Error", "There was an unknown error with the command.")
          msg.channel.send(mainEmbed)
        })
        msg.react("👍")
      }else{
        //Mention a role
        createEmbed("#E5453D", "Error", "Please use the command correctly: !setmute @role")
        msg.channel.send(mainEmbed)
      }
    }else{
      //You don't have permission
      createEmbed("#E5453D", "Error", "You don't have permission to do that. You need: **MANAGE_SERVER**, **MANAGE_ROLES**")
      msg.channel.send(mainEmbed)
    }
  }
})


client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!chmute")){
    if(msg.member.hasPermission('MANAGE_ROLES')){
      if(msg.guild.me.hasPermission('MANAGE_ROLES')){
      if(msg.mentions.users.size){
        if(fs.existsSync('MuteData/ROLE'+msg.guild.id+'.txt')){
          let roleID = fs.readFileSync('MuteData/ROLE'+msg.guild.id+'.txt').toString()
          let roleAssign = msg.guild.roles.cache.get(roleID);
          let taggedUser = msg.mentions.members.first()
          taggedUser.roles.add(roleAssign).catch(err => console.log(err));
          msg.react("👍")
        }else{
          //Role doesn't exist
          createEmbed("#E5453D", "Error", "This server doesn't have a mute role. Set a mute role by using !setmute.")
          msg.channel.send(mainEmbed)
        }
      }else{
        //No mentions
        createEmbed("#E5453D", "Error", "Please use the command correctly: !chmute @user")
        msg.channel.send(mainEmbed)
      }
    }else{
      //No permission - Bot
      createEmbed("#E5453D", "Error", "I don't have permission to do that. I need: **MANAGE_ROLES**")
      msg.channel.send(mainEmbed)
    }
    }else{
      //No permission
      createEmbed("#E5453D", "Error", "You don't have permission to do that. You need: **MANAGE_ROLES**")
      msg.channel.send(mainEmbed)
    }
  }
})

client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!chunmute")){
    if(msg.member.hasPermission('MANAGE_ROLES')){
      if(msg.guild.me.hasPermission('MANAGE_ROLES')){
      if(msg.mentions.users.size){
        if(fs.existsSync('MuteData/ROLE'+msg.guild.id+'.txt')){
          let roleID = fs.readFileSync('MuteData/ROLE'+msg.guild.id+'.txt').toString()
          let roleAssign = msg.guild.roles.cache.get(roleID);
          let taggedUser = msg.mentions.members.first()
          taggedUser.roles.remove(roleAssign).catch(err => console.log(err));
          msg.react("👍")
        }else{
          //Role doesn't exist
          createEmbed("#E5453D", "Error", "This server doesn't have a mute role. Set a mute role by using !setmute.")
          msg.channel.send(mainEmbed)
        }
      }else{
        //No mentions
        createEmbed("#E5453D", "Error", "Please use the command correctly: !chunmute @user")
        msg.channel.send(mainEmbed)
      }
    }else{
      //No permission - Bot
      createEmbed("#E5453D", "Error", "I don't have permission to do that. I need: **MANAGE_ROLES**")
      msg.channel.send(mainEmbed)
    }
    }else{
      //No permission
      createEmbed("#E5453D", "Error", "You don't have permission to do that. You need: **MANAGE_ROLES**")
      msg.channel.send(mainEmbed)
    }
  }
})



client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!kill")){
    if(msg.mentions.users.size){
      var taggedUser = msg.mentions.users.first()
      var killMsgs = ["accidentally tripped over a rock and fell into a hole as deep as their failures. The hole didn't have an end.", "was roasted so hard that they became an edible chicken.", "killed their Minecraft dog. I'm not going to explain the rest to keep it PG.", "slapped a fish. The fish was a shark. The shark was hungry.", 'said a bad word in front of their teacher. At a parent-teacher meeting.', "was given ice by the nurse, it wasn't enough to stop the heart attack.", 'accidentally called the teacher "Mom".', "was so ugly that they were mistaken for a cow. The burgers tasted different that day.", "took a second vitamin gummy.", "said that Covid-19 wasn't real. They got it by attending an anti-vaccine protest.", "mistook the mirror for a sleep paralysis demon, and tried to kill it.", "made a clickbait video.", "subscribed to Morgz."]
      var randomKill = Math.floor(Math.random()*killMsgs.length)

      msg.channel.send(`${taggedUser.username} ${killMsgs[randomKill]}`)
    }
  }
})




client.on('message', async msg=>{
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('!crown')){
    if(msg.mentions.users.size){
    const taggedUseravatarslap = msg.mentions.users.first();
    const canvas = Canvas.createCanvas(100, 150);
    const ctx = canvas.getContext('2d');
  

    const avatar = await Canvas.loadImage(taggedUseravatarslap.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 0, 50, 100, 100); //25 25 200 200

    const background = await Canvas.loadImage('./Images/Crown.png');
    ctx.drawImage(background, 22, 25, 59, 47);//0

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'crown.png');
  
    msg.channel.send(attachment);
  }else{
    createEmbed("#E5453D", "Error", "Please use the correct format: !crown @user")
    msg.channel.send(mainEmbed)
  }
}
})







client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!use")){
  let message = msg.content
  let args = message.split(' ');
  args.shift();
  su = args.join(' ').toLowerCase()
  if(su != "crate"){
    createEmbed("#E5453D", "Error", `Unknown item. Please use the command with an item with the tag: **Consumable**.`)
    msg.channel.send(mainEmbed)
  }
}
})



function writeSync(directory, value){
  fs.writeFileSync(directory, value, function (err) {
    if (err) return console.log(err);
    console.log(err);
  })
}

client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!use crate"){
    function useCrate(){
    if(fs.existsSync('UserJSON/USER'+msg.author.id+'.json')){
      let cratejson = JSON.parse(fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`))
      let cratecount = parseInt(cratejson["crate"])
        if(cratecount > 0){
          var newVal = parseInt(cratecount) - 1


        let types = ["Common", "Common", "Common", "Common", "Common", "Common", "Common", "Common", "Common", "Common", "Common", "Common", "Common", "Common", "Common", "Uncommon", "Uncommon", "Uncommon", "Uncommon", "Uncommon", "Uncommon", "Uncommon", "Uncommon", "Uncommon", "Uncommon", "Rare", "Rare", "Rare", "Rare", "Rare", "Ultra Rare", "Ultra Rare", "Legendary"]
        let type = Math.floor(Math.random()*types.length)

        if(types[type] === "Common"){
        var items = ["phone", "shoe", "textbook", "rock", ""]
        }else if(types[type] === "Uncommon"){
        var items = ["computer"]
        }else if(types[type] === "Rare"){
        var items = ["wallet"]
        }else if(types[type] === "Ultra Rare"){
        var items = ["bitcoin"]
        }else if(types[type] === "Legendary"){
        var items = ["gold", "taxpass", "Discord bot", ]
        }
        //console.log(items)
        let item = Math.floor(Math.random()*items.length)
        //console.log(items[item])

        let key = items[item]

        let userInventory = fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`).toString()
        let data0= fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`)
        let data = JSON.parse(data0)
        let keyVal = parseInt(data[key]) + 1
        let crateVal = parseInt(data["crate"]) - 1
        data["crate"] = crateVal
        data[key] = keyVal
        writeSync(`UserJSON/USER${msg.author.id}.json`, JSON.stringify(data) )
        

        preEmbed = new Discord.MessageEmbed()
        .setTitle("Opening a crate...")
        .setColor("#80FF80")
        .setDescription("Opening a random crate...")
        .setImage("https://media1.tenor.com/images/bd030a7745e1ae72a6c27e13a23fbfdf/tenor.gif?itemid=14870978")
        
        

        embed = new Discord.MessageEmbed()
        .setTitle(`Crate - ${types[type]}`)
        .setColor("#80FF80")
        .setDescription(`You have received one **${key}**.`)
        .setImage("https://media1.tenor.com/images/bd030a7745e1ae72a6c27e13a23fbfdf/tenor.gif?itemid=14870978")

        //createEmbed("#80FF80", `Crate - ${types[type]}`, `You have received one **${items[item]}**.`)
        msg.channel.send(preEmbed).then(msg=>{
          setTimeout(function(){          
          msg.edit(embed)
          }, 3000)
        })
        
      }else{
        createEmbed("#E5453D", "Error", `You do not have any crates.`)
        msg.channel.send(mainEmbed)
      }
    }else{
      createEmbed("#E5453D", "Error", `You do not have any crates.`)
      msg.channel.send(mainEmbed)
    }
  }

  setTimeout(function() {
    useCrate()
  }, 2000);
  }
})

client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!sell")){
    function sell(){
    let args = msg.content.split(' ')
    args.shift()
    let key = args.join(' ').toLowerCase()

    const sellShop = require("./sell.json")

    if(key in sellShop){
      let userInv = JSON.parse(fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`))
      if(userInv[key] > 0){


        let userInventory = fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`).toString()
        let data0= fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`)
        let data = JSON.parse(data0)
        let keyVal = parseInt(data[key]) - 1
        data[key] = keyVal
        writeSync(`UserJSON/USER${msg.author.id}.json`, JSON.stringify(data) )

        userBal = parseInt(fs.readFileSync(`User_Data/USER${msg.author.id}.txt`))
        writeSync(`User_Data/USER${msg.author.id}.txt`, (userBal+sellShop[key]).toString())

        msg.channel.send(`Sold one **${key}** for $${sellShop[key]}.`)
      }else{
        msg.reply(`You don't have any **${key}s**.`)
      }
    }else{
      msg.reply("Error - That item either cannot be sold or it doesn't exist. Use **!shop** to see what you can sell.")
    }
  }

  setTimeout(function() {
    sell()
  }, 2000);

  }
})

client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!shop"){
    shopHelp = fs.readFileSync('Shop.txt').toString()
    embed = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setURL("https://discord.useless-bot.com/shop/")
    .setDescription(shopHelp)
    .setFooter("Click on the title to go to the website.")
    .setColor('#80FF80')
    msg.channel.send(embed)
  }
})

client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!buy")){

    function buy(){
    const shop = require("./Shop.json")
    const args = msg.content.toLowerCase().split(' ')
    args.shift()
    let key = args.join(' ')
    if(key in shop){
      let balance = fs.readFileSync('User_Data/USER'+msg.author.id+'.txt').toString()
      if(parseInt(shop[key])-1 < parseInt(balance)){
        let friendlyName = key.split('')
        friendlyName[0].toString().toUpperCase()
        createEmbed("#80FF80", "Error", `You have purchased 1 ${friendlyName.join('')} for $${shop[key]}`)
        msg.channel.send(mainEmbed)
        writeSync(`User_Data/USER${msg.author.id}.txt`, (balance-shop[key]).toString())
        let data0= fs.readFileSync(`./UserJSON/USER${msg.author.id}.json`)
        let data = JSON.parse(data0)
        let newVal = parseInt(data[key]) + 1
        data[key] = newVal
        //console.log(data)
        //console.log(data["phone"])
        writeSync(`UserJSON/USER${msg.author.id}.json`, JSON.stringify(data) )

      }else{
        createEmbed("#E5453D", "Error", `You don't have enough money to buy that. You need **$${shop[key]-balance}** more`)
        msg.channel.send(mainEmbed)
      }
    }else{
      createEmbed("#E5453D", "Error", `That item doesn't exist. Please use **!shop** to see what you can buy.`)
      msg.channel.send(mainEmbed)
    }
  }

  setTimeout(function() {
    buy()
  }, 2000);

  }
})


client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!time"){
    var datetime = new Date()

    let moment = require("moment-timezone")

    let currentDate = datetime.toISOString()
    var dateNow = moment(currentDate)



    let TimeZones = `    
    ${dateNow.tz("Pacific/Honolulu").format('h:mma - **z**') /* HST */}
    ${dateNow.tz('America/Anchorage').format('h:mma - **z**') /* AKST */}
    ${dateNow.tz('America/Los_Angeles').format('h:mma - **z**') /* PST */}
    ${dateNow.tz('America/Phoenix').format('h:mma - **z**') /* MST */}
    ${dateNow.tz('America/Menominee').format('h:mma - **z**') /* CST */}
    ${dateNow.tz('America/New_York').format('h:mma - **z**') /* EST */}
    ${dateNow.tz('Atlantic/Bermuda').format('h:mma - **z**') /* AST */} 
    ${dateNow.tz('America/Argentina/Buenos_Aires').format('h:mma - ') /* ART */} **ART**
    ${dateNow.tz('Atlantic/South_Georgia').format('h:mma - ') /* AT */}**AT** 
    ${dateNow.tz('Africa/Abidjan').format('h:mma - **z**') /* GMT */}
    ${dateNow.tz('Africa/Lagos').format('h:mma - **z') /* WAT */}/CET**
    ${dateNow.tz('Asia/Nicosia').format('h:mma - **z**') /* EET */}
    ${dateNow.tz('Europe/Moscow').format('h:mma - **z**') /* MSK */} 
    ${dateNow.tz('Asia/Muscat').format('h:mma') /* AMT */} - **AMT**
    ${dateNow.tz('Asia/Karachi').format('h:mma - **z**') /* PKT */} 
    ${dateNow.tz('Asia/Almaty').format('h:mma - ') /* OMSK */}**OMSK** 
    ${dateNow.tz('Asia/Krasnoyarsk').format('h:mma - ') /* KRAT */}**KRAT** 
    ${dateNow.tz('Asia/Shanghai').format('h:mma - **z**') /* CST */}
    ${dateNow.tz('Asia/Tokyo').format('h:mma - **z**') /* JST */}
    ${dateNow.tz('Australia/Brisbane').format('h:mma - **z**') /* AEST */} 
    ${dateNow.tz('Australia/Sydney').format('h:mma - **z**') /* AEDT */} 
    ${dateNow.tz('Asia/Sakhalin').format('h:mma - ') /* SAKT */}**SAKT** 
    ${dateNow.tz('Pacific/Auckland').format('h:mma - **z**') /* NZST */} `

    //console.log(`${hours}:${minutes}`)
    embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setDescription(TimeZones)
    //.setThumbnail("https://i.pinimg.com/originals/3f/82/40/3f8240fa1d16d0de6d4e7510b43b37ba.gif")
    //.setImage("https://media1.tenor.com/images/bd030a7745e1ae72a6c27e13a23fbfdf/tenor.gif?itemid=14870978") //COOL RAINBOW
    .setTitle("____Here are all the time zones:____")
    .setColor("#C0C0C0")

    msg.channel.send(embed)
  }
})


client.on('message', msg=>{
  if(msg.content.toLowerCase() === "!credits"){
    embed = new Discord.MessageEmbed()
    .setTitle("UselessBot Credits")
    .setDescription(`
    ____Developers____
    -***REMOVED***
    -Efe Mertek

    ____Artists____
    -BingøPlus

    ____Idea Team____
    -Ryan Doesn't Animate
    -The Random Boi
    -JoshyAnimates

    ____Honorable Mentions____
    -BryanAnimates
    -Cheezymations
    -Mark Animations
    `)
    .setFooter("Mainly developed by ***REMOVED***.", "https://cdn.discordapp.com/avatars/472119139708829725/406b88d92b5d49bc929687c8b086dd1c.webp")

    .setColor("RANDOM")
    .setURL("https://discord.useless-bot.com/credits/")

    msg.channel.send(embed)
  }
})


client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!inv")){
    if(msg.mentions.users.size){
      var taggedUser = msg.mentions.users.first()
    }else{
      var taggedUser = msg.author
    }

    if(fs.existsSync(`./UserJSON/USER${taggedUser.id}.json`)){
    let js = JSON.parse(fs.readFileSync(`./UserJSON/USER${taggedUser.id}.json`))

    embed = new Discord.MessageEmbed()
    .setTitle(`____${taggedUser.username}'s inventory____`)
    .setDescription(`

    ____Consumables____

    Crates: ${js["crate"]}


    ____Boosts____

    Computers: ${js["computer"]}
    Phones: ${js["phone"]}
    Robots: ${js["robot"]}
    Taxpasses: ${js["taxpass"]}


    ____Collectables____

    Bitcoin: ${js["bitcoin"]}
    Gold: ${js["gold"]}
    Rocks: ${js["rock"]}
    Shoes: ${js["shoe"]}
    Textbooks: ${js["textbook"]}
    Wallets: ${js["wallet"]}


    ____Flexing____

    Bronze - ${js["bronze"]}
    Siver - ${js["silver"]}
    Platinum - ${js["platinum"]}
    Ruby - ${js["ruby"]}
    Diamond - ${js["diamond"]}
    Emerald - ${js["emerald"]}
    UselessStone - ${js["uselessstone"]}
    `)

    msg.channel.send(embed)
    }else{
      embed = new Discord.MessageEmbed()
      .setTitle(`____${taggedUser.username}'s inventory____`)
      .setDescription(`

    ____Consumables____

    Crates: 0


    ____Boosts____

    Computers: 0
    Phones: 0
    Robots: 0
    Taxpasses: 0


    ____Collectables____
    
    Bitcoin: 0
    Gold: 0
    Rocks: 0
    Shoes: 0
    Textbooks: 0
    Wallets: 0


    ____Flexing____

    Bronze - 0
    Siver - 0
    Platinum - 0
    Ruby - 0
    Diamond - 0
    Emerald - 0
    UselessStone - 0
    `)

      msg.channel.send(embed)
    }
  }
})


client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!autorole")){
    if(msg.member.hasPermission('MANAGE_ROLES')){
    if(msg.mentions.roles.size){
      var mRole = msg.mentions.roles.first()

      writeSync(`./AutoRole/${msg.guild.id}.txt`, mRole.id)

      createEmbed("#2B547E", "Autorole", `Successfully set role ${mRole.name} for autorole.`)
      msg.channel.send(mainEmbed)
    }else{
      createEmbed("#E5453D", "Error", `Please enter a valid role for autorole.`)
      msg.channel.send(mainEmbed)
    }
  }else{
    createEmbed("#E5453D", "Error", `You don't have permission to do that. You need: **MANAGE_ROLES**`)
    msg.channel.send(mainEmbed)
  }
}
})

client.on('guildMemberAdd', msg=>{
  if(fs.existsSync(`./AutoRole/${msg.guild.id}.txt`)){
    let autorole = fs.readFileSync(`./AutoRole/${msg.guild.id}.txt`).toString()
    mRole = msg.guild.roles.cache.find(r => r.id === autorole)
    msg.roles.add(mRole).catch(error=>{
      console.log("Role deleted.")
    })
    
  }
})

client.on('message', msg => {
	if (msg.content === '!join') {
    if(msg.author.id === "472119139708829725"){
		client.emit('guildMemberAdd', msg.member);
    }
	}
});

client.on('message', msg => {
	if (msg.content === '!leave') {
    if(msg.author.id === "472119139708829725"){
		client.emit('guildMemberRemove', msg.member);
    }
	}
});