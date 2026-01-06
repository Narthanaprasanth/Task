import { connectDB, Sale } from "@/lib/db"

// GET all sales
export async function GET() {
  await connectDB()
  const sales = await Sale.find().sort({ saleDate: -1 })
  return Response.json(sales)
}

// ADD new sale
export async function POST(req) {
  await connectDB()
  const body = await req.json()

  if (!body.name || !body.amount) {
    return Response.json({ error: "Missing fields" }, { status: 400 })
  }

  const newSale = await Sale.create(body)
  return Response.json(newSale)
}



