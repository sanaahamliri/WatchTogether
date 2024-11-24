import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class RoomsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@MessageBody() data: { roomId: string, userId: string }, client: Socket) {
    client.join(data.roomId);
    this.server.to(data.roomId).emit('userJoined', data.userId);
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(@MessageBody() data: { roomId: string, userId: string }, client: Socket) {
    client.leave(data.roomId);
    this.server.to(data.roomId).emit('userLeft', data.userId);
  }

  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() data: { roomId: string, message: string }, client: Socket) {
    this.server.to(data.roomId).emit('message', data.message);
  }
}
