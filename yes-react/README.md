# ESLint + Prettier (supports React)

Here are some steps to follow to add ESLint and Prettier support to an existing repo:

## Install the Dependencies

```sh
  npm i -D \
  eslint@7.4.0 \
  eslint-config-prettier@6.11.0 \
  eslint-plugin-prettier@3.1.4 \
  eslint-plugin-react@7.20.3 \
  prettier@2.0.5
```

## Add the config files

```sh
touch .eslintrc.json .prettierrc.json
```

There are sample config files in this repo. They're already configured to be used with React, Mocha, ES6 & ES5 modules, Express, etc. The rules tend to be not-very-opinionated, but you can always add or edit rules in the "rules" section of eslintrc.json.

## Configure the editor (student)

This will vary by editor, but for VSCode, be sure to install the [ESLint](https://github.com/Microsoft/vscode-eslint) and [Prettier](https://github.com/prettier/prettier-vscode) extensions.

Set the default formatter to Prettier. You can do this in settings (see the [Prettier instructions](https://github.com/prettier/prettier-vscode#default-formatter)), but you can also control-click on a JS file and select "Format Document With" > Configure Default Formatter > Prettier.

Set the default linter to ESLint. VSCode has it's own linter tslint. You can turn this off in settings (search for "validate"), and turn off "JavaScript > Validate: Enable"

TSLINT IMAGE HERE

**NOTE:** VSCode may give a popup that says "The ESLint extension will use [project/node_modules/eslint] for validation, which is installed locally...". There's an active GitHub issue to address this annoying popup, which you can read about [HERE](https://github.com/microsoft/vscode-eslint/issues/1012). Just click "Allow", and you should be good to go.

POPUP IMAGE HERE
