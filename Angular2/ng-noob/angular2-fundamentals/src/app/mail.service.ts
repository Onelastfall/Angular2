import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages =
    [
      'You\'re now friends with John',
      'john liked your tweet',
      'You\'never believe what John said!'
    ];

  constructor() { }

}
