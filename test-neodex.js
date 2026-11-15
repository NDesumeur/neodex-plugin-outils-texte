// lancé par le test « local » de NeoDex : l'onglet Nettoyer (espaces, lignes coupées, majuscules), puis Remplacer
module.exports = async ({ pj, sleep }) => {
  await sleep(600);
  await pj(`[...document.querySelectorAll('button')].find(b => b.textContent === 'NETTOYER').click(), 0`); await sleep(200);
  const set = (id, v) => pj(`(() => { const i = document.getElementById(${JSON.stringify(id)}); i.value = ${JSON.stringify(v)}; i.dispatchEvent(new Event('input')); })(), 0`);
  const box = (k, on) => pj(`(() => { const i = document.querySelector('input[data-k=${k}]'); if (i.checked !== ${on}) i.click(); })(), 0`);
  await box('join', true); await set('tx_cleanIn', 'LE  RAPPORT  annuel\nest prêt.   il sera\nenvoyé demain.\n\n\n\nmerci  ');
  await pj(`(() => { const s = document.getElementById('tx_caps'); s.value = 'phrase'; s.dispatchEvent(new Event('change')); })(), 0`); await sleep(100);
  const out = await pj(`document.getElementById('tx_cleanOut').value`);
  if (out !== 'Le rapport annuel est prêt. Il sera envoyé demain.\n\nMerci') throw new Error('nettoyage : ' + JSON.stringify(out));
  await pj(`document.getElementById('tx_cleanPut').click(), 0`); await sleep(100);
  if (await pj(`document.getElementById('tx_cleanIn').value`) !== out) throw new Error('remplacer');
  await set('tx_cleanIn', 'Un  texte   collé\nd’un PDF,\navec des  espaces en trop.'); await sleep(100);
  if (!/d’un PDF, avec/.test(await pj(`document.getElementById('tx_cleanOut').value`))) throw new Error('le sigle PDF a été baissé');
  const over = await pj(`[...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length`);
  if (over) throw new Error(over + ' élément(s) débordent à droite');
  return 'nettoyage (espaces, lignes recollées, majuscules de phrase) et remplacer ok';
};
