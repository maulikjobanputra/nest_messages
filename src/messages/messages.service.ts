import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {}
  find() {
    return this.messageRepo.find();
  }
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  create(data: string) {
    return this.messageRepo.create(data);
  }
}
