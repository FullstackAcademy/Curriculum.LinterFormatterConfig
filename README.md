# Fullstack Linter & Formatter Configuration Guide

Here are some steps for configuring ESLint and Prettier to work nicely with one another. Since ESLint no longer supports "personal" configs (i.e. `~/.eslintrc.json`), we'll have to configure ESLint and Prettier for each individual project.

Once student projects start to include React, ESLint needs to be configured to be compatible with JSX. This repository is divided into two sections: no-react and yes-react. They are mostly the same, except that the yes-react includes the React plugin as a dependency, and a few small adjustments to the .eslintrc.json file.

You can consult the respective instructors for installation and configuration instructions:

- [No-React](./no-react/README.md)
- [Yes-React](./yes-react/README.md)

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

IMAGE HERE