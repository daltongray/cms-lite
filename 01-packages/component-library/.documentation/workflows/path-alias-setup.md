```
## Path Alias Setup for @throwback-ai/react-components Library

To add a path alias to the `@throwback-ai/react-components` library, follow the steps outlined below:

### 1. Update tsconfig.json

In the `@throwback-ai/react-components` package folder, locate the `tsconfig.json` file. Follow these instructions to update it:

- Open the `tsconfig.json` file in a text editor.
- The base url has been set to src/lib in this project, so if your alias is off of that, nothing is needed here. ie: we don't need an explicit alias in the tsconfig for src/lib/types. You still need to update the vite-config.js in the next step.
- Look for the `"compilerOptions"` section.

- Within `"compilerOptions"`, find the `"paths"` entry.

- Add your path alias to the `"paths"` entry. The format of the alias should follow the TypeScript path mapping syntax. For example:

  ```json
  "paths": {
    "@components/*": ["src/components/*"]
  }
  ```

  This example sets up a path alias `@components` that maps to the `src/components` directory within the `@throwback-ai/react-components` library.

- Save the `tsconfig.json` file.

### 2. Update vite.config.ts

In the `@throwback-ai/react-components` package folder, locate the `vite.config.ts` file. Follow these instructions to update it:

- Open the `vite.config.ts` file in a text editor.

- Find the `resolve.alias` section within the `vite.config.ts` file.

- Add your alias to the `resolve.alias` entries object. The `entries` object corresponds to the rollup-plugin-alias entries object.

  - The `entries` object should have the following structure:

    ```typescript
    const config = {
      resolve: {
        alias: {
          // Existing aliases
          // ...
          // Add your alias below
          types: path.resolve(__dirname, "./src/lib/types/index.ts"),
          components: path.resolve(__dirname, "./src/lib/components/index.ts"),
        },
      },
    };

    export default config;
    ```

    In this example, we've added the alias `@components` that points to the `src/components` directory within the `@throwback-ai/react-components` library. Replace `/path/to/@throwback-ai/react-components` with the actual path to the `@throwback-ai/react-components` library.

- Save the `vite.config.ts` file.

Once you've made these updates to the `tsconfig.json` and `vite.config.ts` files, your path alias should be properly configured for the `@throwback-ai/react-components` library. You should be able to use the alias within your code and import modules using the defined path alias, such as `import MyComponent from '@components/MyComponent'`.

For more information on path mapping in TypeScript, you can refer to the TypeScript documentation: [Path Mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping).

For additional details on configuring aliases in Vite using rollup-plugin-alias, you can consult the rollup-plugin-alias documentation: [rollup-plugin-alias entries](https://github.com/rollup/plugins/tree/master/packages/alias#entries).
```
