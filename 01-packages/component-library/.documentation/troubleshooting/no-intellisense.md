Troubleshooting the `react-components` package

If the consuming apps are unable to retrieve intellisense information for the props of the components in this library, it could be due to incorrect aliases within the `.d.ts` files. Make sure to double-check the alias resolver in the Vite config and ensure that it correctly replaces static imports with relative imports in the declarations. This error can be frustrating because everything else appears to be working fine, except for the missing intellisense.
