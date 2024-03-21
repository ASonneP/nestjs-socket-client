import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:9001');
  }

  onModuleInit() {
    this.registerConsumerEvents();
  }

  private registerConsumerEvents() {
    // this.socketClient.emit('newMessage', { msg: 'Hi there!' }); //Emitting a 'newMessage' event to the server with the message 'Hi there!' as its payload.
    this.socketClient.on('connect', () => {
      console.log('Connected to Gateway');
    });
    this.socketClient.on('onMessage', (payload: any) => {
      console.log('Socket Client Class!!!');
      console.log(payload);
    });
  }
}
