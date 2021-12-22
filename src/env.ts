import * as dotenv from 'dotenv';

import { Env } from './types';

dotenv.config();

export const env: Env = {
    dbPort: parseInt(process.env.DB_PORT || '3306', 10),
    dbHost: process.env.DB_HOST || '',
    dbConnector: process.env.DB_CONNECTOR || 'mysql',
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbDatabase: process.env.DB_DATABASE,
    dbPoolMin: parseInt(process.env.DB_POOL_MIN || '1', 10),
    dbPoolMax: parseInt(process.env.DB_POOL_MAX || '1', 10),
    dbDebug: process.env.DB_DEBUG === 'true',
};