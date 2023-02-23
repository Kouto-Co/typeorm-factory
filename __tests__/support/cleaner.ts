import { DataSource } from 'typeorm';

export const clean = (datasource: DataSource) => {
  const names = ['comment', 'post', 'author'];
  return datasource.query(names.map(name => `DELETE FROM ${name};`).join('\n'));
};
