module.exports = (api) => {
  api.cache(true);
  const plugins = [];

  plugins.push([
    "module-resolver",
    {
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {
        "@showcase": "./",
        "@showcase/*": "./*",
        "@registry": "../../packages/registry/src",
        "@registry/*": "../../packages/registry/src/*",
      },
    },
  ]);
  plugins.push("react-native-worklets/plugin");

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins,
  };
};
