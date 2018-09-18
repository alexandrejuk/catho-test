# Test Catho
[![CircleCI](https://circleci.com/gh/alexandrejuk/catho-test.svg?style=svg)](https://circleci.com/gh/alexandrejuk/catho-test)

# Requerido
* Docker

## Execução
```
  git clone git@github.com:alexandrejuk/catho-test.git
  cd catho-test
  docker build -t catho:1.0 .
  docker run  -p 3000:3000 -t catho:1.0
```

# Informações da API 


## Método GET

A api possibilita fazer consulta de empregos por cidade e por função, tambem é possivel orderna por faixa salárial, também é possível passar em todas as requests o **skip** , **limit** e **sort** para suas consultas, abaixo segue os exemplos das requests.

### GET POR CIDADE 

```
GET http://localhost:3000/api/jobs?skip=0&limit=10&city=pelotas
```

### GET POR CARGO 

```
GET http://localhost:3000/api/jobs?skip=0&limit=10&city=pelotas
```

### GET POR CARGO COM SORT EM SALÁRIO CRESCENTE E DESCRESCENTE

#### CRESCENTE
```
GET http://localhost:3000/api/jobs?skip=0&limit=10&function=analista&sort=1
```

#### DECRESCENTE
```
GET http://localhost:3000/api/jobs?skip=0&limit=10&function=analista&sort=-1
```


