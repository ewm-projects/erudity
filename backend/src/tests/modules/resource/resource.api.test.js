import supertest from "supertest";

import Conn from "../../../main/data/conn";
import Express from "../../../main/http/app";

import { generateResources } from "./resource.data";
import { ResourceRepository } from "../../../main/modules/resource";

const Api = supertest(Express.create());
const RESOURCE_DATA = generateResources(20);
// Resource example
// {
//     creators: [ 'Charlie', 'Sierra', 'Quebec' ],
//     description: 'Course about art',
//     subject: 'film',
//     platform: 'YouTube',
//     format: 'book',
//     createdAt: 2006-04-19T06:53:50.063Z,
//     updatedAt: 2012-11-15T15:20:09.094Z,
//     price: '169.24',
//     difficulty: 'easy',
//     avgRating: '3',
//     totalRatings: 569,
//     hours: '21.57',
//     pages: '204.68',
//     tags: [ 'algebra', 'Editing', 'Sculpting' ]
//   }

beforeAll(async () => await Conn.start());

describe("Get Resources", () => {
  beforeAll(async () => await ResourceRepository.removeAll());

  test("Success - get first 5 paginated resources", async () => {
    await ResourceRepository.addAll(RESOURCE_DATA);
    const params = {
      page: 1,
      limit: 5,
    };

    const expected = {
      count: RESOURCE_DATA.length,
      pages: Math.ceil(RESOURCE_DATA.length / params.limit),
      results: RESOURCE_DATA.slice(0, 6),
    };

    const res = await Api.get("/api/resources").query(params).expect(200);
    const data = res.body;

    // console.log("Data", data)

    expect(data).toHaveProperty("count", expected.count);
    expect(data).toHaveProperty("pages", expected.pages);
    expect(data).toHaveProperty("results");
    expect(data.results).toHaveLength(params.limit);

    for (let i = 0; i < params.limit; i++) {
      expect(data.results[i].description).toBe(
        RESOURCE_DATA[i].valueOf().description
      );
    }
  });
});

afterEach(async () => await ResourceRepository.removeAll());
afterAll(async () => await Conn.stop());
