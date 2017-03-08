import { LoggerService } from './logger-service';

export class PersonService {

  constructor() {
    this.logger = new LoggerService();
  }

  getPerson() {
    this.logger.logMessage('getting person');
    return 'Joe Smith';
  }
}