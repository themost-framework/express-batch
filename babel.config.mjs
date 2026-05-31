export default function (api) {
    api.cache(false);
    return {
        "sourceMaps": true,
        "retainLines": true,
        "presets": [
            [
                "@babel/preset-env",
                {
                    targets: {
                        node: "current"
                    }
                }
            ]
        ],
        "ignore":  [
            /\/node_modules/
        ],
        "plugins": [
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ]
        ]
    };
};
