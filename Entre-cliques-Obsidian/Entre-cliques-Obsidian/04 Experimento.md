---
tags: [fui, entre-cliques]
---

# Experimento
## Protocolo reproduzível
1. Abrir o site e reiniciar.
2. Manter diversidade desligada e capturar o feed inicial.
3. Curtir uma publicação de tecnologia; anotar título ou ID.
4. Clicar em Atualizar feed e capturar distribuição.
5. Ativar diversidade, sem novas curtidas, e atualizar novamente.
6. Capturar o resultado e exportar comparação CSV.
7. Guardar capturas e CSV em Anexos e inserir links nesta nota.

## Valores esperados pelas regras do código
| Cenário | Tecnologia | Música | Esportes | Cinema |
|---|---:|---:|---:|---:|
| Inicial | 2 | 2 | 2 | 2 |
| Uma curtida em tecnologia | 4 | 2 | 1 | 1 |
| Mesma curtida, com diversidade | 3 | 2 | 2 | 1 |

Estes valores são previstos pelo [[02 Simulador]]; não substituem evidências de uma nova execução.

## Registro da execução — preencher
- Data e navegador:
- Publicação curtida:
- Contagens observadas:
- Capturas e CSV:
- Resultado coincidiu com previsão?
- Falhas e correções:

## Verificações adicionais
- [ ] Reiniciar restaura 2 vagas por categoria.
- [ ] Curtida repetida na mesma publicação fica impedida.
- [ ] Total de vagas permanece 8.
- [ ] CSV corresponde às rodadas registradas.
- [ ] Versão offline funciona.

Usar evidências no [[08 Memorial]].
