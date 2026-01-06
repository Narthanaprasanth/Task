import { connectDB, Sale } from "@/lib/db"

export async function DELETE(request, { params }) {
  await connectDB()

  // Await params in case it's a promise
  const resolvedParams = await params
  const { id } = resolvedParams
  console.log("DELETE ID:", id)

  await Sale.findByIdAndDelete(id)
  

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
