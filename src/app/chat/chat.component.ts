import { Component } from '@angular/core';

import RiveScript from 'rivescript'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})



export class ChatComponent {

  firstreply: string = "Wie kann ich Ihnen helfen?"; //initial bot string
  
  /**
   * empty constructor
   */

  constructor() {     
  }

 //chat UI array

  messages: any[] = [
    {
      text: this.firstreply,
      date: new Date(),
      reply: false,
    },
  ];

  /**
   * receiving user message submit event, sending use message to chat UI
   * @param event 
   */

  sendUserMessage(event) {

  var chatMessage : string;
  chatMessage = event.message;
  this.sendBotMessage(chatMessage);
     
  console.log("Nachricht>", chatMessage);
  this.messages.push({
    text: chatMessage,
    date: new Date(),
    reply: true,

  });
    }

  /**
   * generating and sending bot message to chat UI
   * @param chatMessage 
   */

  sendBotMessage(chatMessage) {

    var bot = new RiveScript({utf8: true}); // initializing bot, incl. UTF 
    bot.unicodePunctuation = new RegExp(/[.,!?;:]/g);
    bot.errors.objectNotFound = "Oh, das ist etwas schief gelaufen.";

    bot.loadFile('/assets/brain/test.rive').then(loading_done); // loading bot brain

    function loading_done() {
      console.log("Formfux Chatbot erfolgreich initialisiert!"); 
      bot.sortReplies(); //sorting replies 
    
      let username = "user";
      var testOutsideString : string;  
   
      bot.reply(username, chatMessage).then(function(answer) { //generating answer inside Promise
        console.log("Inside Promise: " + answer);
 
        testOutsideString = answer;
        console.log("Inside Promise testOutsideString: " + testOutsideString);
        
        //pushing bot answer into screen does not work (it's a promise function, not a single string)
        this.messages.push({
          text: answer,
          date: new Date(),
          reply: false,
        });
      });    
     
      console.log("Outside Promise testOutsideString>", testOutsideString); //test whether answer is received outside
      }
  
  }
  }
