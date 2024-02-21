module.exports = {
    presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ["@babel/preset-react",{runtime : "automatic"}]
  ],
  };


/* 
When you're configuring Babel to target your current version of Node.js by creating a `babel.config.js` file in the root of your project, it means you're setting up Babel to transpile your JavaScript code so that it's compatible with the version of Node.js you're currently using to run your project.

Node.js supports various ECMAScript features depending on the version you're using. Newer versions of Node.js add support for newer JavaScript syntax and features. However, not all features may be supported in older versions of Node.js.

By configuring Babel to target your current version of Node.js, you ensure that your JavaScript code is transpiled to use only the features supported by the version of Node.js you're currently using. This allows you to write code using modern JavaScript syntax without worrying about compatibility issues when running your code on your current Node.js environment.

The configuration typically involves using the `@babel/preset-env` preset with specific options to target the Node.js version you're using. For example, `{targets: {node: 'current'}}` targets the current version of Node.js.

Creating a `babel.config.js` file in the root of your project and specifying your Babel configuration there allows you to have a centralized configuration that applies to all files in your project, ensuring consistent transpilation across your entire codebase.
*/