const services = [
  { title: 'Desenvolvimento Web', desc: 'Criação de sites com HTML, CSS e JavaScript.' },
  { title: 'UI/UX Design', desc: 'Design centrado no usuário e prototipação.' },
  { title: 'Otimização e SEO', desc: 'Performance e posicionamento em buscadores.' },
];

function Services() {
  return (
    <section id="serviços">
      <h2>O que faço</h2>
      <div className="services">
        {services.map((s, i) => (
          <div className="service" key={i}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
