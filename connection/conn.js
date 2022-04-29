const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb://localhost:27017/mongoose')
  console.log("Conexão realizada com sucesso!")
}

main().catch((err) => {
  console.log("Ocorreu um erro, tente se conectar novamente!" + err)
})

module.exports = mongoose