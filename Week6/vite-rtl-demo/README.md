# Getting RTL set up

1. Install vitest

```
npm install vitest --save-dev
```

2. Add a testing script

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  }
```

3. Create a dummy test `App.test.jsx` (test files with vitest should all be .jsx)

```js
import { describe, it, expect } from "vitest";

describe("Setup tests", () => {
    it("true test", () => {
        expect(true).toBe(true);
    });

    it("false test", () => {
        expect(false).toBe(false);
    });
});
```

4. Add jsdom to allow testing in a DOM-like environment

```
npm install jsdom --save-dev
```

5. Add jsdom to vite vonfig

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
    },
});
```

6. Add react testing library

```
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

7. Add a setup file for vitest

```js
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// adds RTL library matches to vitest
expect.extend(matchers);

// clean up after every test - unmount our components every time

afterEach(() => {
    cleanup();
});
```

8. Include test setup in vite config file

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // so I don't need to inport describe and it every time
        environment: "jsdom",
        setupFiles: "./config/setup-tests.js",
    },
});
```

9. If we need user interaction we need to add another library

```
npm install @testing-library/user-event --save-dev
```
