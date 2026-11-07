const numProjects = 100000;
const projects = Array.from({ length: numProjects }, (_, i) => ({
  id: i,
  hidden: i % 2 === 0,
}));

console.time('filter-map');
for (let i = 0; i < 100; i++) {
  projects
    .filter(p => !p.hidden)
    .map(p => ({ key: p.id, project: p }));
}
console.timeEnd('filter-map');

console.time('reduce');
for (let i = 0; i < 100; i++) {
  projects.reduce((acc, p) => {
    if (!p.hidden) {
      acc.push({ key: p.id, project: p });
    }
    return acc;
  }, []);
}
console.timeEnd('reduce');
