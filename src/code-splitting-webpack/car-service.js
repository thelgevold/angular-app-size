import { LoggerService } from './logger-service';

export class CarService {

  constructor() {
    this.logger = new LoggerService();
  }

  getCar() {
    this.logger.logMessage('getting car');
    return 'BMW';
  }
}