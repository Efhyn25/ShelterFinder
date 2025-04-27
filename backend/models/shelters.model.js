import mongoose from 'mongoose';

const shelterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  available_beds: {
    type: Number,
    required: true
  },
  total_beds: {
    type: Number,
    required: true
  },
  referral_required: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true // automatically adds createdAt and updatedAt
});

const Shelter = mongoose.model('Shelter', shelterSchema);

export default Shelter;
