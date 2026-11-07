const steps = [
  { title: "Discuss", text: "We talk through your idea, users and goals." },
  { title: "Scope", text: "I write down what will be built, the timeline and the cost." },
  { title: "Milestones", text: "Work is split into small milestones with regular demos." },
  { title: "Delivery", text: "Tested code, deployment and handover documentation." },
  { title: "Support", text: "Bug fixes and help after launch." }
];

function HowIWork() {
  return (
    <section className="section" id="how-i-work" style={{ padding: "4rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>
          How I <span className="accent">Work</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "1.5rem" }}>
          {steps.map((step, i) => (
            <div key={step.title} style={{ padding: "1.5rem", backgroundColor: "var(--bg-secondary)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
              <div style={{ fontWeight: "bold", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>{i + 1}</div>
              <h3 style={{ marginBottom: "0.5rem" }}>{step.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{step.text}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--text-secondary)" }}>
          Fixed-price for websites and MVPs. Hourly for backend work, fixes and maintenance.
        </p>
      </div>
    </section>
  );
}

export default HowIWork;
