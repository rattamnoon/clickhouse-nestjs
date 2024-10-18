import { ClickHouseClient } from '@depyronick/nestjs-clickhouse';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTICS_SERVER')
    private analyticsServer: ClickHouseClient,
  ) {}

  async getHello(): Promise<string> {
    const result = await this.analyticsServer.queryPromise(
      'SELECT marital AS marital, COUNT(*) AS count FROM employee GROUP BY marital',
    );

    console.log(result);
    // return result.rows[0][0];

    return JSON.stringify(result, null, 2);
  }
}
