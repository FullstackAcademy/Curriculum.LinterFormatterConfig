# Fullstack Linter & Formatter Configuration Guide

Here are some steps for configuring ESLint and Prettier to work nicely with one another. Since ESLint no longer supports "personal" configs (i.e. `~/.eslintrc.json`), we'll have to configure ESLint and Prettier for each individual project.

Once student projects start to include React, ESLint needs to be configured to be compatible with JSX. This repository is divided into two sections: no-react and yes-react. They are mostly the same, except that the yes-react includes the React plugin as a dependency, and a few small adjustments to the .eslintrc.json file.

You can consult the respective instructors for installation and configuration instructions:

- [No-React](./no-react)
- [Yes-React](./yes-react)
