const highlights = [
  {
    value: "4+",
    label: "Years of Engineering Experience",
  },
  {
    value: "100+",
    label: "Production Data Workflows",
  },
  {
    value: "8hr → <25m",
    label: "Pipeline Runtime",
  },
  {
    value: "35%",
    label: "API Latency Reduction",
  },
]

const Highlights = () => {
  return (
    <section className="highlights">
      {highlights.map((item) => (
        <div className="highlight-card" key={item.label}>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  )
}

export default Highlights