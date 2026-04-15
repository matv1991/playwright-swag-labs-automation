import { test, expect } from "./fixtures/fixtures";

test("creates a new booking and returns its ID", async ({
  request,
  authToken,
}) => {
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
  expect(body).toHaveProperty("bookingid");
  expect(body).toHaveProperty("booking");

  // cleans up created booking
  await request.delete(`/booking/${body.bookingid}`, {
    headers: {
      Cookie: `token=${authToken}`,
    },
  });
});
