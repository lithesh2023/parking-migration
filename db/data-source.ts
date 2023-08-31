import {DataSource, DataSourceOptions } from 'typeorm'
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    migrationsTableName: "public.migrations"
}

const dataSource = new DataSource (dataSourceOptions);

export default dataSource;