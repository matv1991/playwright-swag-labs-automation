import { test as base, expect } from "@playwright/test";

export const test = base.extend<{ authToken: string }>({
  authToken: async ({ request }, use) => {
const response = await request.post("/auth", {
      data: {
        username: process.env.BOOKER_USERNAME!,
        password: process.env.BOOKER_PASSWORD!,
      },
    });
    const body = await response.json();
    await use(body.token);
  },
});

export { expect };
