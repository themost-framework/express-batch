import babelParser from "@babel/eslint-parser";
import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
	{
		ignores: [
			"**/dist/",
			"rollup.config.cjs",
			"jest.config.cjs"
		],
	},
	{
		files: ["src/**/*.js"],
		languageOptions: {
			parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					babelrc: false,
					configFile: false,
					presets: ["@babel/preset-env"],
				},
			},
		},
	},
	{
		files: ["src/**/*.ts"],
		plugins: [typescriptEslint],
		languageOptions: {
			globals: {
				...globals.node,
			},
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: "module",
			parserOptions: {
				project: "tsconfig.json",
			},
		}
	},
]);