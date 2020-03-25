# buildLibraryTest

## Instructions

- clone the repo
- execute `yarn install`
- make a build with `yarn build`

The build made makes references to the alias in the paths `@` wich cannot be found.

### The use of alias

If the command is called with --alias
```
yarn build --alias @=src
```

Microbundler cannot find the referenced paths


## Expectations:
- The project is built and bundled in the `dist` folder, with types and modules in `.js` files, according to the paths.
