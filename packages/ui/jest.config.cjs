module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native(-community)?|@rn-primitives|react-native-reanimated|@react-navigation|react-native-svg)/'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^react-native-svg$': '<rootDir>/__mocks__/react-native-svg.js',
    '^react$': require.resolve('react'),
    'react-native/node_modules/react$': require.resolve('react')
  },
  globals: {
    __DEV__: true
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.test.cjs' }]
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules/react-native/Libraries/vendor/']
};
