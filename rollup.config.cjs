const babel = require("@rollup/plugin-babel");
const pkg = require("./package.json");
const { dts } = require("rollup-plugin-dts");

const external = Object.keys(pkg.dependencies || {}).concat(
    Object.keys(pkg.peerDependencies || {})
);

module.exports = [
    {
        input: './src/index.js',
        output: [
            {
                name: pkg.name,
                file: `dist/index.js`,
                format: 'cjs',
                sourcemap: true
            },
            {
                name: pkg.name,
                file: `dist/index.esm.js`,
                format: 'esm',
                sourcemap: true
            }
        ],
        external,
        plugins: [
            babel()
        ]
    },
    {
        input: 'src/index.d.ts',
        output: {
            file: 'dist/index.d.ts'
        },
        external,
        plugins: [dts()],
    }
];
