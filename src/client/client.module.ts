import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { AppService } from '../app.service'

@Module({
  controllers:  [ClientController],
  providers: [ClientService, AppService]
})
export class ClientModule {}
