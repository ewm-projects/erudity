import supertest from "supertest";

import Conn from "../../../main/data/conn";
import Express from "../../../main/http/app";

import { generatePings } from "./ping.data";
import { PingRepository } from "../../../main/modules/ping";

const Api = supertest(Express.create());
const PING_DATA = generatePings(20)

beforeAll(async () => await Conn.start());

describe("Get Pings", () => {
  beforeAll(async () => await PingRepository.removeAll());

  test("Success - get first 5 paginated pings", async () => {
    await PingRepository.addAll(PING_DATA);
    const params = {
      page: 1,
      limit:5
    }
    const expected = {
      "count": PING_DATA.length,
      "pages": Math.ceil(PING_DATA.length / params.limit),
      "results": PING_DATA.slice(0, 6)
    }

    const res = await Api.get("/api/pings").query(params).expect(200);
    const data = res.body;

    expect(data).toHaveProperty('count', expected.count)
    expect(data).toHaveProperty('pages', expected.pages)
    expect(data).toHaveProperty('results')
    expect(data.results).toHaveLength(params.limit)

    for(let i = 0; i<params.limit; i++) {
      expect(data.results[i].message).toBe(PING_DATA[i].message)
    }
  });
});

describe("Create Pings", () => {
  test("Success - add new ping", async () => {
    const newPing = { message: "new ping" };

    // /application\/json/ is regexp, see https://javascript.info/regexp-introduction
    await Api.post("/api/pings")
      .send(newPing)
      .expect(201)
      .expect("Content-Type", /application\/json/);
    const pings = await PingRepository.getAll();

    expect(pings).toHaveLength(1);
  });

  afterEach(async () => await PingRepository.removeAll());
});

describe("Update Pings", () => {
  test("Success - ping is modified", async () => {
    const ping = { message: "ping" };
    const newPing = { message: "new ping" };
    const savedPing = await PingRepository.add(ping);

    await Api.put(`/api/pings/${savedPing.id}`)
      .send(newPing)
      .expect(201)
      .expect("Content-Type", /application\/json/);
  });
});

describe("Delete Pings", () => {
  test("Success - ping is deleted", async () => {
    const ping = { message: "ping" };
    const savedPing = await PingRepository.add(ping);

    await Api.delete(`/api/pings/${savedPing.id}`).expect(204);
    const pings = await PingRepository.getAll();

    expect(pings).toHaveLength(0);
  });
});

afterEach(async () => await PingRepository.removeAll());
afterAll(async () => await Conn.stop());
