# ESLint + Prettier config for React w/ TypeScript

## Installation
- Add GitHub registry to `.npmrc` file:
```
@bd-dm:registry=https://npm.pkg.github.com
```
- Install package and it's peer dependencies
```
npm i -D @bd-dm/eslint-config-react
npx install-peerdeps @bd-dm/eslint-config-react
```

- Now, add extends to your `.eslintrc` file.

```json
{
  "extends": [
    "@bd-dm/eslint-config-react"
  ]
}
```

- Copy the `.prettierrc` file from this repository into your project folder
