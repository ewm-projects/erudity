import supertest from "supertest";

import Conn from "../../../main/data/conn";
import Express from "../../../main/http/app";

import { generateResources } from "./resource.data"
import { ResourceRepository } from "../../../main/modules/resource";

const Api = supertest(Express.create());
const RESOURCE_DATA = generateResources(3)
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

afterEach(async () => await ResourceRepository.removeAll());
afterAll(async () => await Conn.stop());