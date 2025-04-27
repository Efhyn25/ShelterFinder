import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
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
    service_type: {
        type: String,
        required: true
    },
    services_offered: {
        type: String,
        required: true
    },

}, {
  timestamps: true, // automatically adds createdAt and updatedAt
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;