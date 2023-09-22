// Comandos de terminal:

//Criar package.json:
//npm init -y

//Dependencias:
//npm install express nodemon cors mongoose

//Para parar um terminal (recomendado abrir outro)
//Ctrl + c

// ---------- // ----------

const cors = require('cors')
const express = require('express')
const { model } = require('mongoose')
const app = express()
const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta 3000!`)
})

//Comandos de Git:

//Iniciar projeto GIT
// git init

//Adiciona todos os arquivos para enviar ao GitHub
//git add .

// Adiciona um comentário a atualização a ser enviada 
//git commit -m "[Comentário]"

//Envia os arquivos ao repositório
//git push https://<GITHUB_TOKEN>@github.com/<GITHUB_USUARIO>/<REPOSITORIO_NOME>.git

// ---------- // ----------