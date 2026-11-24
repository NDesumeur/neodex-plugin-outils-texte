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
  // les lignes : doublons retirés, triées ; puis une expression régulière (invalide d'abord : signalée)
  await box('join', false); await pj(`(() => { const s = document.getElementById('tx_caps'); s.value = ''; s.dispatchEvent(new Event('change')); const t = document.getElementById('tx_sort'); t.value = 'az'; t.dispatchEvent(new Event('change')); })(), 0`);
  await box('dedupe', true); await set('tx_cleanIn', 'poire 12\npomme 3\nPoire 12\nabricot 7'); await sleep(100);
  const sorted = await pj(`document.getElementById('tx_cleanOut').value`);
  if (sorted !== 'abricot 7\npoire 12\npomme 3') throw new Error('lignes : ' + JSON.stringify(sorted));
  await box('rx', true); await set('tx_find', '(\\d+'); await sleep(100);
  const bad = await pj(`document.getElementById('tx_find').classList.contains('bad') && /invalide/.test(document.querySelector('.txBody .row .hint').textContent)`);
  await set('tx_find', ' (\\d+)$'); await set('tx_repl', ' : $1 €'); await sleep(100);
  const rx = await pj(`[document.getElementById('tx_cleanOut').value, document.querySelector('.txBody .row .hint').textContent]`);
  if (!bad || rx[0] !== 'abricot : 7 €\npoire : 12 €\npomme : 3 €' || !/3 remplacements/.test(rx[1])) throw new Error('expression régulière : ' + JSON.stringify({bad, rx}));
  // remis comme avant : le profil de test reste propre
  await set('tx_find', ''); await set('tx_repl', ''); await box('rx', false); await box('dedupe', false); await pj(`(() => { const t = document.getElementById('tx_sort'); t.value = ''; t.dispatchEvent(new Event('change')); })(), 0`);
  const over = await pj(`[...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length`);
  if (over) throw new Error(over + ' élément(s) débordent à droite');
  return 'lignes triées sans doublons, expression régulière (invalide signalée, 3 remplacements) · nettoyage (espaces, lignes recollées, majuscules de phrase) et remplacer ok';
};
