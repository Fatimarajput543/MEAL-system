import dotenv from 'dotenv';

dotenv.config();

export interface Environment {
  // Server
  nodeEnv: 'development' | 'production' | 'test';
  port: number;
  apiPrefix: string;

  // Database
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    logging: boolean;
    synchronize: boolean;
  };

  // JWT
  jwt: {
    secret: string;
    expiry: string;
    refreshSecret: string;
    refreshExpiry: string;
  };

  // Azure AD
  azure: {
    tenantId: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    isConfigured: boolean;
  };

  // Redis
  redis: {
    host: string;
    port: number;
    password?: string;
    db: number;
  };

  // S3
  s3: {
    endpoint: string;
    accessKeyId: string;
    secretAccessKey: string;
    bucketName: string;
    region: string;
  };

  // Agresso ERP
  agresso: {
    apiUrl: string;
    apiKey: string;
    syncEnabled: boolean;
    syncInterval: number;
  };

  // Logging
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
    format: 'json' | 'pretty';
  };

  // CORS
  cors: {
    origin: string | string[];
  };
}

const getEnvironment = (): Environment => {
  return {
    nodeEnv: (process.env.NODE_ENV as any) || 'development',
    port: parseInt(process.env.PORT || '3000', 10),
    apiPrefix: process.env.API_PREFIX || '/api/v1',

    database: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'meal_user',
      password: process.env.DB_PASSWORD || 'secure_password',
      database: process.env.DB_DATABASE || 'meal_system',
      logging: process.env.DB_LOGGING === 'true',
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    },

    jwt: {
      secret: process.env.JWT_SECRET || 'dev-secret-change-in-production',
      expiry: process.env.JWT_EXPIRY || '24h',
      refreshSecret: process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret',
      refreshExpiry: process.env.JWT_REFRESH_EXPIRY || '7d',
    },

    azure: {
      tenantId: process.env.AZURE_TENANT_ID || '',
      clientId: process.env.AZURE_CLIENT_ID || '',
      clientSecret: process.env.AZURE_CLIENT_SECRET || '',
      redirectUri: process.env.AZURE_REDIRECT_URI || 'http://localhost:3000/auth/callback',
      isConfigured: !!(process.env.AZURE_TENANT_ID && process.env.AZURE_CLIENT_ID),
    },

    redis: {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
      password: process.env.REDIS_PASSWORD,
      db: parseInt(process.env.REDIS_DB || '0', 10),
    },

    s3: {
      endpoint: process.env.S3_ENDPOINT || 'https://s3.amazonaws.com',
      accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
      bucketName: process.env.S3_BUCKET_NAME || 'meal-system-bucket',
      region: process.env.S3_REGION || 'us-east-1',
    },

    agresso: {
      apiUrl: process.env.AGRESSO_API_URL || '',
      apiKey: process.env.AGRESSO_API_KEY || '',
      syncEnabled: process.env.AGRESSO_SYNC_ENABLED === 'true',
      syncInterval: parseInt(process.env.AGRESSO_SYNC_INTERVAL || '86400', 10),
    },

    logging: {
      level: (process.env.LOG_LEVEL as any) || 'info',
      format: (process.env.LOG_FORMAT as any) || 'json',
    },

    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
    },
  };
};

export const env = getEnvironment();
