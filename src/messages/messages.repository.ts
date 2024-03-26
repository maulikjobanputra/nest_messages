import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile(`${__dirname}/../../messages.json`, 'utf8');
    const { messages } = JSON.parse(content);
    const message = messages.find((message) => message.id === id);
    if (!message) {
      throw new NotFoundException(`No message found with id ${id}!`);
    }
    return message;
  }

  async find() {
    const content = await readFile(`${__dirname}/../../messages.json`, 'utf8');
    const { messages } = JSON.parse(content);
    return messages;
  }

  async create(data: string) {
    const content = await readFile(`${__dirname}/../../messages.json`, 'utf8');
    const { messages } = JSON.parse(content);
    const message = {
      id: String(Math.floor(Math.random() * 999)),
      message: data
    };
    messages.push(message);
    await writeFile(`${__dirname}/../../messages.json`, JSON.stringify({ messages }));
    return message;
  }
}
