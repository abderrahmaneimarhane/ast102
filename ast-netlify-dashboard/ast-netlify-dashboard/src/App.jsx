export default function App() {
  const kpis = [
    { title: "Revenue", value: "4.82M MAD", growth: "+18.2%" },
    { title: "Delivery Success", value: "93.4%", growth: "+4.1%" },
    { title: "Return Rate", value: "5.8%", growth: "-1.9%" },
    { title: "Transport Cost", value: "742K MAD", growth: "-3.4%" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold">AST Executive Dashboard</h1>
            <p className="text-zinc-400 mt-2">
              Logistics • Commercial • Intelligence
            </p>
          </div>

          <button className="bg-white text-black px-5 py-3 rounded-2xl font-semibold">
            Refresh Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {kpis.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6"
            >
              <p className="text-zinc-500">{item.title}</p>
              <h2 className="text-4xl font-bold mt-4">{item.value}</h2>

              <div className="mt-4 inline-block bg-zinc-900 px-3 py-1 rounded-full text-sm">
                {item.growth}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 h-[400px]">
            <h2 className="text-2xl font-semibold mb-4">
              Revenue Analytics
            </h2>

            <div className="h-full border border-dashed border-zinc-700 rounded-2xl flex items-center justify-center text-zinc-600">
              Revenue Chart Area
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 h-[400px]">
            <h2 className="text-2xl font-semibold mb-4">
              AI Strategic Insights
            </h2>

            <div className="space-y-4">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                SAT transporter performance increased significantly.
              </div>

              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                Casablanca region generates the highest margin.
              </div>

              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                Return rates are increasing for fragile products.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-6">
            Operational Monitoring
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="bg-zinc-900 rounded-2xl p-5">
              <p className="text-zinc-500">Delayed Deliveries</p>
              <h3 className="text-4xl font-bold mt-3">27</h3>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-5">
              <p className="text-zinc-500">Pending Returns</p>
              <h3 className="text-4xl font-bold mt-3">14</h3>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-5">
              <p className="text-zinc-500">Active Clients</p>
              <h3 className="text-4xl font-bold mt-3">182</h3>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-5">
              <p className="text-zinc-500">Monthly Orders</p>
              <h3 className="text-4xl font-bold mt-3">1482</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}