const stats = [
  { label: 'Projetos entregues', value: '+50' },
  { label: 'Clientes satisfeitos', value: '+20' },
  { label: 'Anos de experiência', value: '+5' },
];

function Stats() {
  return (
    <section id="resultados">
      <h2>Resultados em números</h2>
      <div className="stats">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Stats;
