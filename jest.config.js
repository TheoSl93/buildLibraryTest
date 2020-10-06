module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
            importHelpers: true
        }
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    transform: {
        '\\.tsx?$': 'ts-jest',
        '\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/'
      ],
    testMatch: [
        '**/test/**/*.spec.(js)'
    ],
    verbose: true,
    collectCoverage: true,
    coverageDirectory: '<rootDir>/test/coverage',
    testEnvironment: 'node',
    coverageReporters: [
        'html',
        'text-summary'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@mocks/(.*)$': '<rootDir>/test/__mocks__/$1'
    },
    collectCoverageFrom: [
        '!**/node_modules/**',
        '!src/App.ts',
        '!src/Server.ts',
        'src/**/*.{js,ts}'
    ]
}
