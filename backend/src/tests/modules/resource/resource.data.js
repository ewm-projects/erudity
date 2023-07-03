import { ResourceModel } from "../../../main/modules/resource";
import Utility from "../../../main/common/utils";

const callsigns = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliett",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu",
];

const subjects = ["programming", "math", "science", "writing", "film", "art"];

const platforms = [
  "YouTube",
  "Udemy",
  "Pluralsight",
  "Skillshare",
  "Manning",
  "Amazon",
];

const formats = ["book", "video", "live", "interactive"];

const difficulty = ["easy", "medium", "high"];

const tags = [
  "algebra",
  "calculus",
  "2D",
  "US Civil War",
  "JavaScript",
  "Fantasy",
  "Chemistry",
  "Sculpting",
  "Editing",
];

const generateRandomDesc = () =>
  `Course about ${Utility.getRandomFromArray(subjects)}`;
const generateRandomPrice = () => (Math.random() * 200 + 1).toFixed(2);
const generateRandomRating = (min) => {
  const starting = min ?? 0;
  return (Math.random() * 4 + starting).toFixed();
};

export const generateResources = (amount) => {
  const data = [];
  const createdAt = Utility.getRandomDate();

  for (let i = 0; i < amount; i++) {
    const resource = {
      creators: Utility.generateRandomItems(callsigns, 3),
      description: generateRandomDesc(),
      subject: Utility.getRandomFromArray(subjects),
      platform: Utility.getRandomFromArray(platforms),
      format: Utility.getRandomFromArray(formats),
      createdAt,
      // eslint-disable-next-line no-invalid-this
      updatedAt: Utility.getRandomDate(createdAt),
      price: generateRandomPrice(),
      difficulty: Utility.getRandomFromArray(difficulty),
      avgRating: generateRandomRating(),
      totalRatings: Utility.getRandomIntBetween(1, 1000),
      hours: (Math.random() * 23).toFixed(2),
      pages: (Math.random() * 1000).toFixed(2),
      tags: Utility.generateRandomItems(tags, tags.length),
    };

    data.push(new ResourceModel(resource));
  }
  return data;
};
