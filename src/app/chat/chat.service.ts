import { Injectable } from '@angular/core';
import RiveScript from 'rivescript';

import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  conversation = new BehaviorSubject<Message[]>([]);
  

  constructor() {
    this.update(new Message("Wie kann ich Ihnen helfen?", 'bot'));
   }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    var bot = new RiveScript({utf8: true}); // initializing bot

    bot.loadFile('/assets/brain/formfux.rive').then(this.loadingDone(bot, msg).bind(this)); // loading bot brain
  }

  loadingDone(bot, msg) {
    return () => {
    const that = this;
  
    console.log("Chatbot initialized!"); 
    bot.sortReplies();  //sorting replies 
  
    let username = "user";
    
    return bot.reply(username, msg).then(answer => { //getting chatbot answer
      console.log("User: " + msg);
      console.log("Chatbot: " + answer);
      const result = answer; 
      (async () => { 
        // Do something before delay
        console.log('before delay')

        await this.delay(1000);
        const botMessage = new Message(result, 'bot');  
      this.update(botMessage);
        // Do something after
        console.log('after delay')
    })();

      
    });
  } 
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  
}