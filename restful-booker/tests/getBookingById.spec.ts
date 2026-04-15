import { test, expect } from "./fixtures/fixtures";

test("returns the correct booking details", async ({ request }) => {
  const listResponse = await request.get("/booking");
  const bookings = await listResponse.json();
  const firstId = bookings[0].bookingid;

  const response = await request.get(`/booking/${firstId}`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty("firstname");
  expect(body).toHaveProperty("lastname");
  expect(body).toHaveProperty("totalprice");
  expect(body).toHaveProperty("depositpaid");
  expect(body).toHaveProperty("bookingdates");
  expect(body).toHaveProperty("bookingdates.checkin");
  expect(body).toHaveProperty("bookingdates.checkout");
});
