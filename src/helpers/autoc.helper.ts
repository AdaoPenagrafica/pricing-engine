export function specialPrice(quantity: number): number {
  const table = [
    { q: 1, p: 20 },
    { q: 2, p: 21 },
    { q: 3, p: 22 },
    { q: 4, p: 23 },
    { q: 5, p: 24 },
    { q: 10, p: 25 },
    { q: 15, p: 32 },
    { q: 20, p: 35 },
    { q: 30, p: 45 },
    { q: 50, p: 75 },
    { q: 100, p: 100 },
    { q: 200, p: 150 },
  ];

  for (let i = 0; i < table.length; i++) {
    if (table[i].q === quantity) return table[i].p;
  }

  if (quantity < table[0].q) return table[0].p;
  if (quantity > table[table.length - 1].q) return table[table.length - 1].p;

  for (let i = 1; i < table.length; i++) {
    if (quantity < table[i].q) {
      const q1 = table[i - 1].q, p1 = table[i - 1].p;
      const q2 = table[i].q, p2 = table[i].p;
      const t = (quantity - q1) / (q2 - q1);
      return p1 + (p2 - p1) * t;
    }
  }

  return table[table.length - 1].p;
}

export function specialSheets(q:number, baseSheets:number): number {
  let s = baseSheets;
  if (q >= 20) s -= 5;
  if (q >= 30) s -= 5;
  if (q >= 50) s -= 5;
  if (q >= 100) s -= 5;
  if (q >= 200) s -= 5;
  return s;
}

export function specialSize(q:number, baseSize:number):number {
  let s = baseSize;
  if (q >=  3) s -= 0.005;
  if (q >= 20) s -= 0.002;
  if (q >= 50) s -= 0.002;
  return s;
}