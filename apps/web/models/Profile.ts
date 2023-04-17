import mongoose, { Model, Schema } from 'mongoose';

export interface IProfile {
  phone: string;
  address: string;
  user: {
    type: mongoose.Types.ObjectId;
    ref: 'User';
  };
}

const ProfileSchema: Schema<IProfile> = new mongoose.Schema({
  phone: String,
  address: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

ProfileSchema.methods.toJSON = function () {
  const profileObject = this.toObject();
  profileObject.id = profileObject._id.toString();
  delete profileObject._id;
  delete profileObject.__v;
  return profileObject;
};

export default (mongoose.models.Profile ||
  mongoose.model('Profile', ProfileSchema)) as typeof Model;
