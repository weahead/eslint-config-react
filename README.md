# @weahead/eslint-config-react

[We aheads](https://www.weahead.se/) eslint config for React projects.

## Install

This config and its dependencies are included in We ahead's tooling packages and don't need to be installed in new We ahead projects. Instead use one of the tooling packages that have all configs and dependencies needed for its use.

- For **non-React** projects use [@weahead/tooling](https://github.com/weahead/tooling)
- For **React** projects use [@weahead/tooling-react](https://github.com/weahead/tooling-react)

### Install the config by its own

`npx install-peerdeps -d -x '-E' @weahead/eslint-config-react`

A `.eslintrc.json` file will automatically be created in the root of your project with:

```json
{
  "extends": ["@weahead/eslint-config-react"]
}
```

## License

[X11](LICENSE)
