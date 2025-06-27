import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginTs } from "@kubb/plugin-ts";

export default defineConfig(() => {
	return {
		root: ".",
		input: {
			path: "https://processador-arquivos.sendvers.pro/openapi.json",
		},
		output: {
			clean: true,
			path: "./src/http/generated",
		},
		plugins: [
			pluginOas(),
			pluginTs(),
			pluginReactQuery({
				client: {
					baseURL: "https://processador-arquivos.sendvers.pro",
				},
			}),
		],
	};
});
