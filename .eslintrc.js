module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": [
        ".eslintrc.js",
        "tsconfig.json",
        "tailwind.config.js",
        "build/**/*",
        "src/react-app-env.d.ts",
    ],
    "rules": {
        "prettier/prettier": "error",
    }
}
