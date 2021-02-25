const translate = require('@vitalets/google-translate-api');
const { ar } = require("@vitalets/google-translate-api/languages");







client.on('message', msg=>{
  if(msg.content.toLowerCase().startsWith("!translate-tr")){

    const opts = {
      to: translate.languages.getCode("turkish"), // Get code of language.
      from: "auto", // Defaults to "auto" which auto detects the language.
  };


    let msgurl = msg.content
    const args = msgurl.split(' ');
     args.shift();

     translate(args.join(' '), opts)
    .then(response => {
        msg.reply(response.text); // Translated text...
        msg.reply(response.from.language.iso); // Translated from...
      if(response.from.text.value === ""){

      }else{
        msg.reply("You have made a typo: "+response.from.text.value); // Return auto-corrected source text highlighting the issue.
      }
    })
    .catch(console.error);


//     msg.channel.send(translate(args.join(' ')))
  }
})