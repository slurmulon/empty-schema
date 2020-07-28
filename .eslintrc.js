module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: 'eslint:recommended',
    plugins: ['mocha-no-only'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module'
    },
    rules: {},
    overrides: [
        {
            files: [
                'test/*.js',
            ],
            env: {
                mocha: true,
            },
            rules: {
                'mocha-no-only/mocha-no-only': ['error']
            }
        }
    ]
};
