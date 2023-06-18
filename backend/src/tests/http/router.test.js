import supertest from "supertest";

import Express from "../../main/http/app.js"
import Conn from "../../main/data/conn.js"

const api = supertest(Express.create());

beforeAll(async () => {
  await Conn.start();
});

test("Get /api/health", async () => {
  const res = await api.get("/api/health").expect(200);
  expect(res.body).toHaveProperty("status");
  expect(res.body).toHaveProperty("uptime");
  expect(res.body).toHaveProperty("db");
  expect(res.body).toHaveProperty("date");
});

afterAll(async () => {
  await Conn.stop();
});