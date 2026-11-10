# Trechos de código
Trechos extraídos de `app.js` do site enviado.

## Categorias e estado inicial
```javascript
const categories=['tecnologia','musica','esportes','cinema'];
let points=[1,1,1,1],liked=new Set(),round=0,current=[2,2,2,2],records=[];
```
As categorias são dados categóricos; o vetor `points` representa a pontuação de cada uma.

## Curtida
```javascript
liked.add(p.id);
points[i] += 2;
```
O conjunto `liked` permite identificar publicações já curtidas.

## Distribuição proporcional
```javascript
function allocate(weights,diverse){
  const base=diverse?1:0,total=weights.reduce((a,b)=>a+b,0),
  ideals=weights.map(w=>w/total*(8-base*4)),
  n=ideals.map(x=>Math.floor(x)+base);
  const order=ideals.map((x,i)=>({i,r:x-Math.floor(x)}))
    .sort((a,b)=>b.r-a.r||a.i-b.i);
  let remaining=8-n.reduce((a,b)=>a+b,0);
  for(let j=0;j<remaining;j++)n[order[j].i]++;
  return n;
}
```
O operador condicional `? :` seleciona a regra de diversidade. O cálculo usa proporções e maiores restos.

## Exportação CSV
O código cria um arquivo `comparacao-feed.csv` com as colunas:
`rodada,diversidade,categoria,pontos,quantidade_inicial,quantidade_atual`.

Ver [[02 Como funciona o simulador]] e [[04 Testes e CSV]].
