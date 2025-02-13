import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import fs from "fs"

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"))
const banner = `/**
 * @module ${pkg.name}
 * @version ${pkg.version}
 * @file ${pkg.description}
 * @copyright ${pkg.author.name} ${new Date().getFullYear()}
 * @license ${pkg.license}
 * @see [Github]{@link ${pkg.homepage}}
*/`
const name = pkg.name.substr(1).replace(/[-/]./g, (x: string) => x.toUpperCase()[1])

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.iife,
            name,
            format: "iife",
            globals: { axios: "axios" },
            banner
        },
        {
            file: pkg.unpkg,
            name,
            format: "iife",
            globals: { axios: "axios" },
            plugins: [terser({ output: { preamble: banner } })]
        },
        { file: pkg.exports.require, format: "cjs", banner, exports: "auto" },
        { file: pkg.exports.import, format: "es", banner }
    ],
    external: Object.keys(pkg.dependencies),
    plugins: [typescript({ tsconfig: "./build.tsconfig.json" }), nodeResolve()]
}
