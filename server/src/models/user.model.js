const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: 1,
    },
    address: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    subscribed: {
      type: Boolean,
      default: false,
    },
    profileState: {
      type: String,
      default: "incomplete",
      trim: true,
      lowercase: true,
    },
    works: [
      {
        type: Schema.Types.ObjectId,
        ref: "Work",
      },
    ],
    client: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Static methods
userSchema.statics.encryptPassword = async (password) => {
  if (!password) {
    throw new Error("Password is undefined or invalid.");
  }
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

// Instance methods
userSchema.methods.setIsClient = function () {
  this.client = true;
  return this;
};

userSchema.methods.addWorks = function (workId) {
  this.works = [...this.works, workId];
  return this;
};

userSchema.methods.deleteWorks = function (workId) {
  this.works = this.works.filter((work) => work !== workId);
  return this;
};

userSchema.methods.subscribe = function () {
  this.subscribed = true;
  return this;
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
