---
tags: [fui, entre-cliques]
---

# Snippets
Trecho real do HTML, conferido em 30/10/2026.

## Distribuição de vagas
```javascript
function allocate(weights,diverse){const base=diverse?1:0,total=weights.reduce((a,b)=>a+b,0),ideals=weights.map(w=>w/total*(8-base*4)),n=ideals.map(x=>Math.floor(x)+base);const order=ideals.map((x,i)=>({i,r:x-Math.floor(x)})).sort((a,b)=>b.r-a.r||a.i-b.i);let remaining=8-n.reduce((a,b)=>a+b,0);for(let j=0;j<remaining;j++)n[order[j].i]++;return n}
```

Calcula cotas proporcionais e maiores restos; com diversidade, reserva uma vaga por categoria. Empates são resolvidos pelo índice da categoria.

## Atualização de pontos
```javascript
liked.add(p.id);
points[i] += 2;
```
O botão já curtido fica desabilitado na renderização. O perfil muda na curtida; a distribuição só é recalculada ao atualizar o feed.

Fonte local: [HTML](Anexos/entre-cliques.html). Ver [[02 Simulador]] e [[04 Experimento]].
