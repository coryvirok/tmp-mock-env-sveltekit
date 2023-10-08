## Example showing how to mock `$env` in Playwright tests for SvelteKit.

The following is needed to mock the `$env` module. 

1. Add the following to tsconfig.json
```
    // Everything below is required for Playwright tests to access path aliases
    "baseUrl": ".",
    "paths": {
      "$lib": ["src/lib"],
      "$lib/*": ["src/lib/*"],
      "$env/*": ["tests/e2e/mocks/env/*"]
    }
```

2. Set `testDir` in playwright.config.ts to `'tests/e2e'`.

3. Mock `$env/dynamic/private` by adding the file `tests/e2e/mocks/env/dynamic/private.ts` and export a `env` const. 
E.g.

```
export const env = process.env
```

4. Import from `$env` in your tests


## Running tests

1. `npm i`
2. `npm run build`
3. `HELLO=WORLD npm run test:integration`



