import type { Options } from 'tsup';
import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV;

export const tsup: Options = {
    splitting: true,
    clean: true,
    dts: true,
    format: ['cjs'],
    minify: env === 'production',
    bundle: env === 'production',
    skipNodeModulesBundle: false,
    entryPoints: ['src/index.ts'],
    watch: env === 'development',
    target: 'es2020',
    outDir: env === 'production' ? 'dist' : 'lib',
    entry: ['src/**/*.ts', '!src/**/*.test.ts']
};
