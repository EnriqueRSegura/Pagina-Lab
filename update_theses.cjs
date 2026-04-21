const fs = require('fs');
const xlsx = require('xlsx');

const wb = xlsx.readFile('C:/Users/Enrique/Downloads/Tesis Dirigidas.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

const theses = data.map(row => {
  return {
    title: String(row['__EMPTY'] || '').trim(),
    name: String(row['Nombre'] || '').trim(),
    level: String(row['Nivel'] || '').trim(),
    year: String(row['Año'] || '').replace('.0', '').trim()
  };
}).filter(t => t.title && t.name && t.title !== 'undefined');

const thesesStr = JSON.stringify(theses, null, 2);

const filePath = 'C:/Users/Enrique/.gemini/antigravity/scratch/pi-portfolio/src/components/CurriculumExtras.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const regex = /(<ul className="extra-list">\s*)([\s\S]*?)(\s*<\/ul>)/;

const newUlContent = `
          {language === 'es' ? (
            theses.map((t, idx) => (
              <li key={idx}><strong>{t.level}</strong> ({t.year}) - {t.name}<br/><span style={{fontSize: '0.85em', color: 'var(--text-color)', opacity: 0.8}}>{t.title}</span></li>
            ))
          ) : (
            theses.map((t, idx) => {
              const levelEn = t.level === 'DOCTORADO' ? 'Doctoral' : t.level === 'MAESTRÍA' ? "Master's" : "Bachelor's";
              return (
                <li key={idx}><strong>{levelEn} Thesis</strong> ({t.year}) - {t.name}<br/><span style={{fontSize: '0.85em', color: 'var(--text-color)', opacity: 0.8}}>{t.title}</span></li>
              );
            })
          )}
`;

content = content.replace(regex, `$1${newUlContent}$3`);

if (!content.includes('const theses =')) {
  // Insert theses array right before the return statement inside the component
  content = content.replace('  return (', `  const theses = ${thesesStr};\n\n  return (`);
} else {
  // Replace the old array if it exists (which doesn't yet, but for safety)
  content = content.replace(/const theses = \[[\s\S]*?\];/, `const theses = ${thesesStr};`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated CurriculumExtras.jsx with ' + theses.length + ' entries.');
