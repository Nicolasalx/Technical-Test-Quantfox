import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
]);
