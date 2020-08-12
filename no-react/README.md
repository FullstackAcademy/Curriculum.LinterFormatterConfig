# ESLint + Prettier (not React yet)

Here are some steps to follow to add ESLint and Prettier support to an existing repo:

## Install the Dependencies

```sh
  npm i -D \
  eslint@7.4.0 \
  eslint-config-prettier@6.11.0 \
  eslint-plugin-prettier@3.1.4 \
  prettier@2.0.5
```

## Add the config files

```sh
touch .eslintrc.json .prettierrc.json
```

There are sample config files in this repo. They're already configured to be used with Mocha, ES6 & ES5 modules, Express, etc. The rules tend to be not-very-opinionated, but you can always add or edit rules in the "rules" section of eslintrc.json.

## Configure the editor (student)

This will vary by editor, but for VSCode, be sure to install the [ESLint](https://github.com/Microsoft/vscode-eslint) and [Prettier](https://github.com/prettier/prettier-vscode) extensions.

Set the default formatter to Prettier. You can do this in settings (see the [Prettier instructions](https://github.com/prettier/prettier-vscode#default-formatter)), but you can also control-click on a JS file and select "Format Document With" > Configure Default Formatter > Prettier.

Configuring Prettier as your default formatter:

![formatdocumentwith](https://user-images.githubusercontent.com/1832043/90063965-b7d81280-dcaf-11ea-97cb-e3681f2c9bc9.png)

![configuredefaultformatter](https://user-images.githubusercontent.com/1832043/90064035-cf170000-dcaf-11ea-886b-2c86ed902604.png)

Set the default linter to ESLint. VSCode has it's own linter tslint. You can turn this off in settings (search for "validate"), and turn off "JavaScript > Validate: Enable" (make sure the checkbox is unchecked):

![tslint-off](https://user-images.githubusercontent.com/1832043/90063661-544de500-dcaf-11ea-80f7-e711b1b42216.png)

And make sure ESLint is enabled for JavaScript files (it ought to be by default):

![eslint-on](https://user-images.githubusercontent.com/1832043/90063893-a0008e80-dcaf-11ea-8e92-4a2f98edcbb4.png)

**NOTE:** VSCode may give a popup that says "The ESLint extension will use [project/node_modules/eslint] for validation, which is installed locally...". There's an active GitHub issue to address this annoying popup, which you can read about [HERE](https://github.com/microsoft/vscode-eslint/issues/1012). Just click "Allow", and you should be good to go.

![annoying-popup](https://user-images.githubusercontent.com/1832043/90062947-274d0280-dcae-11ea-9c98-6a77adb68290.png)

