import mongoose from "mongoose"

const MONGO_URL = process.env.MONGODB_URI



export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return
  console.log("Mongo URL:", MONGO_URL)

  await mongoose.connect(MONGO_URL)
}

const SaleSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.Mixed, // allows string or number
    required: true,
  },
  status: String,
  saleDate: String,
  amount: Number,
  amount: {
  type: Number,
  required: true,
  min: 0,
},
  nextActivity: String,
  date:String,
  owner:String,
})

export const Sale =
  mongoose.models.Sale || mongoose.model("Sale", SaleSchema)
