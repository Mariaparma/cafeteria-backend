# StarCafé API

## Endpoints

### GET /menu
Retorna o cardápio da cafeteria.

#### Requisição
- `Accept: application/json`


#### Resposta
- `200 OK` – Sucesso
- `500 Internal Server Error` – Erro no servidor
- `Content-Type: application/json`

### POST /order
Permite que um cliente faça um pedido.

#### Requisição
- `Content-Type: application/json`
- `Accept: application/json`

#### Exemplo de corpo da requisição (JSON):
```json
{
  "cliente": "Maria Fernanda",
  "produtos": [
    { "id": 1, "quantidade": 2 },
    { "id": 2, "quantidade": 1 }
  ]
}
