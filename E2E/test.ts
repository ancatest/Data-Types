import { test as base } from "@playwright/test";
import App from "../actions";

interface IApp {
  app: App;
}

export const test = base.extend<IApp>({
  page: async ({ page }, use) => {
    await use(page);
  },
  app: async ({ page, context }, use) => {
    const app = new App(page, context);
    await use(app);
  },
});

export default test;
