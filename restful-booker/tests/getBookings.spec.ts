import { test, expect } from "./fixtures/fixtures";

test.describe("GET /booking", () => {
  let bookingId: number;

  test.beforeEach(async ({ request }) => {
    const response = await request.post("/booking", {
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    });
    const body = await response.json();

    expect(response.status()).toBe(200);
    bookingId = body.bookingid;
  });

  test.afterEach(async ({ request, authToken }) => {
    const response = await request.delete(`/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${authToken}`,
      },
    });
    expect(response.status()).toBe(201);
  });

  test("returns a list of booking IDs", async ({ request }) => {
    const response = await request.get("/booking");
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
  });
});
