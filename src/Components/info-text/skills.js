export default function Skills() {
  const skillsData = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Next.js', percentage: 80 },
    { name: 'CSS', percentage: 95 },
    { name: 'Node.js', percentage: 70 },
  ];
  return (
    <section className="skills">
      <h2 className="title">Minhas Habilidades</h2>
      <div className="list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <div className="info">
              <span className="name">{skill.name}</span>
              <span className="percentage">{skill.percentage}%</span>
            </div>
            <div
              className="progress"
              style={{ width: `${skill.percentage}%` }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
