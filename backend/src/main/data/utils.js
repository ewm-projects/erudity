import mongoose, { Schema } from "mongoose";

const modelFactory = (name, paths, props) => {
  const transformer = {
    transform: (_doc, result) => {
      result.id = result._id.toString();
      delete result._id;
      delete result.__v;

      if (props) {
        props.forEach((p) => delete result[p]);
      }
    },
  };

  const schema = new Schema(paths);

  schema.set("toJSON", transformer);
  schema.set("toObject", transformer);

  return mongoose.model(name, schema);
};

const objectIdValidator = (id) => mongoose.Types.ObjectId.isValid(id);

const MongoUtils = { modelFactory, objectIdValidator };

export default MongoUtils;
