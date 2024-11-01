// @ts-check
import * as path from 'node:path';
import { HtmlRspackPlugin } from '@rspack/core';

const __dirname = import.meta.dirname;

/** @type import('@rspack/cli').Configuration */
const config = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }, plugins: [new HtmlRspackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })]
}

export default config;