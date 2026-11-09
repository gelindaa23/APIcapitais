# APIcapitais
O objetivo desta atividade é aplicar os conhecimentos adquiridos nos três primeiros tutoriais, construindo uma aplicação back-end funcional.

Explicação do Código:

import express from "express": Importa o framework Express, que facilita a criação de servidores HTTP e rotas em Node.js.

const app = express(): Cria o servidor web.

const PORT = 3000: Define a porta em que o servidor vai rodar na máquina, sendo nesse caso a porta 3000.

==============

const estados = {} -> mapeia as chaves pros seus devidos valores.

app.get(): Define que esta rota responde a requisições do tipo GET, onde são usadas para buscar dados.

"/estados/:sigla": é um parâmetro de rota. Tudo o que o usuário digitar após /estados/ (como sp, rj, mg) será capturado pelo Express.

(req, res) => {}: Função callback que executa sempre que alguém acessa a rota.

req (request): Contém os dados enviados pelo cliente.

res (response): Usado para enviar a resposta de volta ao cliente.

==============

req.params.sigla: Pega o texto que o usuário digitou na URL.

.toUpperCase(): Converte a string para letras maiúsculas.

as keyof typeof estados: Uma instrução do TypeScript que garante ao compilador que a string sigla deve ser tratada como uma das chaves válidas do objeto estados ("BA" | "DF" | "MG"), evitando erros

const capital = estados[sigla];: Busca no objeto estados o valor correspondente à chave armazenada em sigla. Se a chave existir, retorna a capital (ex: "São Paulo"); se não existir, retorna indefinido.

===============

res.status(200).json({
    sigla: sigla,
    capital: capital
});
Se o estado for encontrado, vai definir o código como sucesso.
Retorna um objeto JSON que contém a sigla pesquisada e a capital correspondente.
