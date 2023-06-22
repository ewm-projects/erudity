# Model Documentation

**Resource Schema:**
```js
{
  id: ObjectId,
  creators: String[],
  description: String,
  platform: String[],
  createdAt: Date,
  updatedAt: Date,
  price: Number,
  difficulty: String,
  avgRating: Number,
  totalRatings: Number,
  format: String,
  hours: Number,
  pages: Number,
  tags: String[],
  subject: String[],
}
```

**Notes**
- `hours` refer to content length of video-based learning resources
- `pages` refer to content length of text-based learning resources
- `difficulty`: i propose this should be determined by Erudity userbase

**Contributors**
- joewrotehaikus#6241
- javascriptwebdev
