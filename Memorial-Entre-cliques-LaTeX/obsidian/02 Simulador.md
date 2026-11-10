---
tags: [fui, entre-cliques]
---

# Simulador
Regras conferidas no arquivo entre-cliques.html em 30/10/2026.

- Categorias, nesta ordem: tecnologia, música, esportes e cinema.
- Cada categoria inicia com 1 ponto; o feed possui 8 vagas.
- Uma curtida acrescenta 2 pontos à categoria. Cada publicação só pode ser curtida uma vez por experimento.
- A curtida muda o perfil; o usuário precisa clicar em Atualizar feed para redistribuir vagas.
- Sem diversidade: vagas ideais = 8 × pontos da categoria / soma dos pontos.
- Aplicam-se as partes inteiras; vagas restantes vão aos maiores restos decimais. Empates seguem a ordem das categorias.
- Com diversidade: reservar 1 vaga para cada categoria e distribuir proporcionalmente as 4 restantes pelo mesmo método.
- As primeiras publicações de cada categoria são selecionadas e intercaladas. Não há sorteio.
- Reiniciar apaga curtidas e registros do experimento e desliga diversidade.

## Dados
O CSV de publicações está incorporado no HTML e é interpretado pelo programa. Há botões para baixar publicações e comparação. Cópia da base em `Anexos/publicacoes.csv`.

## Registro exportado
O CSV da comparação contém rodada, diversidade, categoria, pontos, quantidade inicial e quantidade atual. Não registra os IDs de cada curtida; anotá-los separadamente no [[04 Experimento]].

Veja [[09 Snippets]] e [[03 Pesquisa]].
