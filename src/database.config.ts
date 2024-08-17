import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/user.entity';

export const databaseConfig = async (
  configService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [User],
  synchronize: true,
});
