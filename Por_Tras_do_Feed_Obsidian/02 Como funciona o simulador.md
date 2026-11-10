# Como funciona o simulador
Regras verificadas no `app.js` do material enviado.

## Categorias
Tecnologia, música, esportes e cinema.

## Pontuação e feed
- Cada categoria começa com **1 ponto**.
- O feed apresenta **8 vagas**.
- Cada publicação pode ser curtida apenas uma vez por execução.
- Uma curtida acrescenta **2 pontos** à categoria correspondente.
- Para aplicar a nova pontuação ao feed, é necessário clicar em **Atualizar feed**.

## Distribuição
Sem diversidade, cada categoria recebe uma cota proporcional à sua pontuação. As partes inteiras são atribuídas primeiro; as vagas restantes seguem os maiores restos decimais.

Com diversidade, reserva-se inicialmente **1 vaga por categoria**, distribuindo as outras 4 proporcionalmente.

## Reiniciar
Reinicia pontos, curtidas, rodadas, registros e desativa a diversidade.

## Exportação
- `publicacoes.csv`: base das publicações.
- `comparacao-feed.csv`: resultados registrados por rodada, categoria, pontuação, diversidade e quantidade exibida.

Ver [[04 Testes e CSV]] e [[09 Trechos de codigo]].
