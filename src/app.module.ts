import { ClickHouseModule } from '@depyronick/nestjs-clickhouse';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClickHouseModule.register([
      {
        name: 'ANALYTICS_SERVER',
        host: 'localhost',
        port: 8123,
        database: 'default',
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
