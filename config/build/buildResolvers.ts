import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions:[".tsx", ".ts", ".js"],
        preferAbsolute: true,
        mainFiles: ['index'],
        modules: [options.paths.src, "node_modules"],
        alias: {}
    }
}