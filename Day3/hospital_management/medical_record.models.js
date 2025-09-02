import mongoose from 'mongoose';

const medicalrecordSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'patient',
      required: true,
    },
    age: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    medicineBought: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Mediacalrecord = mongoose.model(
  'Mediacalrecord',
  medicalrecordSchema
);
