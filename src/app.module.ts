import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ClientController } from './client/client.controller';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ProductsModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
