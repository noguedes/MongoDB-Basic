use admin
show databases

use dbAlura_Serie
db.createCollection("series")
db.series.drop()
show collections

db.getCollection("series")/**collection this database**/

db.series.insert(
{
    "série": "Pataal Lok",
    "Ano de lançamento": 2020,
    "Linguagem": "Hindi",
    "Genero": ["Drama"],
    "IMOb Avaliação": 7.5,
    "Classificação": "18+"
}
)

db.series.find();

db.series.insert(
{
    "série": "Upload",
    "Ano de lançamento": 2020,
    "Linguagem": "Inglês",
    "Genero": ["Ficção Cientifica"],
    "IMOb Avaliação": 8.1,
    "Classificação": "16+"
}
)

db.series.find()

db.stats()

db.series.insertMany(
[
{
    "série": "The Marvelous Mrs, Maisel",
    "Temporadas Disponíveis": 3,
    "Linguagem": "Inglês",
    "Genero": ["Drama", "Comédia"],
    "IMOb Avaliação": 8.7,
    "Classificação": "16+"
},
{
    "série": "Four More Shots Please",
    "Ano de lançamento": 2019,
    "Temporadas Disponíveis": 2,
    "Linguagem": "Hindi",
    "Genero": ["Drama", "Comédia"]
}
]
)

db.series.find()

db.series.insert(
{
    "série": "Fleabag",
    "Ano de lançamento": 2016,
    "Temporadas disponíveis": 2,
    "Linguagem": "Inglês",
    "IMOb Avaliação": 8.7
}
)

db.series.find()

db.series.insertMany(
[
{
    "Série": "Made in Heaven",
        "Temporadas disponíveis": 1,
        "Linguagem": "Hindi",
        "Genero": ["Drama"],
        "IMDb Avaliação": 8.3,
        "Classificação": "18+"
},
{
    "Série": "Homecoming",
        "Temporadas disponíveis": 2,
        "Linguagem": "Inglês",
        "Genero": ["Drama"],
        "IMDb Avaliação": 7.5,
        "Classificação": "16+"
}
]
)

db.series.find();

db.series.find({"Ano de lançamento": 2020}) /**Consultando com filtro**/

db.series.find({},{"série": 1, "Classificação": 1, "_id": 0})/**Projetando quais campos serão retornados**/

db.series.find({"Ano de lançamento": {$in: [2019, 2020]}})/**Parametro $IN para comparar mais de um valor de filtro**/

db.series.find().limit(5)/**Limitando que a consulta traga no máximo 5 documentos**/

db.series.find().sort({"série": 1})/**Retorna os documentos em ordem crescento pelo campo série**/

db.series.find().sort({"série": -1})/**Retorna os documentos em ordem decrescente pelo campo série**/

db.series.find({"Temporadas Disponíveis": {$gte: 2}})/**Parametro $GTE (maior ou igual a)**/

db.series.find({"Ano de lançamento": {$ne: 2020}})/**Retorna os documentos onde o campo Ano de lançamento seja diferente de 2020**/

db.series.find({"Genero": {$all: ["Drama", "Comédia"]}})/**Retorna todos os documentos onde o array tenha contenha os dados Drama e comédia ou vici versa**/

db.series.insert(
{
    "série": "Grimm",
    "Ano de lançamento": 2012,
    "Temporadas disponíveis": 5,
    "Linguagem": "Inglês",
    "Genero": ["Drama", "Ação", "Aventura"]
}
)

db.series.find({"série": "Grimm"})

db.series.updateOne({"série": "Grimm"}, {$set: {"Temporadas disponíveis": 6}})/**Atualizando um campo do documento**/

db.series.updateOne({"série": "Grimm"}, {$set: {"Classificação": "16+"}})/**Utilizando o update para adicionar um campo no documento**/

db.series.find({"série": {$in: ["Four More Shots Please", "Fleabag"]}})

db.series.updateMany({"série": {$in: ["Four More Shots Please", "Fleabag"]}}, {$set: {"Classificação": "18+"}})/**Adicionando um campo em dois documentos ao mesmo tempo**/

/**Excluindo documento**/

db.series.find()

db.series.find({"série": "Upload"})

db.series.deleteOne({"série": "Upload"})/**Deletando documento onde nome da série for igual à **/














