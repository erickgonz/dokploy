import {
	type DomainSchema,
	type Schema,
	type Template,
	generateRandomDomain,
} from "../utils";

export function generate(schema: Schema): Template {
	const randomDomain = generateRandomDomain(schema);

	const domains: DomainSchema[] = [
		{
			host: randomDomain,
			port: 8080,
			serviceName: "open-webui",
		},
	];
	const envs = ["OLLAMA_DOCKER_TAG=0.5.1", "WEBUI_DOCKER_TAG=0.4.8"];

	return {
		envs,
		domains,
	};
}
