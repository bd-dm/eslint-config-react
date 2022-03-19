# ESLint + Prettier config for React w/ TypeScript

## Installing

1. In project root folder, run:

```
npm i -D @bd-dm/eslint-config-react
npx install-peerdeps --dev @bd-dm/eslint-config-react
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```json
{
  "extends": [
    "@bd-dm/eslint-config-react"
  ]
}
```

3. Copy the .prettierrc file from this repository into your project folder
