Tarefa executada a partir do Free Code Camp, pelo endereço:
https://www.freecodecamp.com/challenges/build-a-random-quote-machine

Exemplo:
https://codepen.io/FreeCodeCamp/full/ONjoLe/

Como exemplo, irei consumir o webservice público:
https://market.mashape.com
que pode ser chamado com o comando:

curl -X POST --include 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies' \
  -H 'X-Mashape-Key: fIC4C3rGVVmshkkJiXMrWAre9v4Jp1zmdJUjsnqUUazYcvHUN8' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'