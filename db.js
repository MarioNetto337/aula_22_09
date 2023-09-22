const { default: mongoose } = require("mongoose")
mongoose.set('strictQuery', true)

async function main(){
    await mongoose.connect('mongodb+srv://mario:<manetto>@cluster0.4oaczzg.mongodb.net/?retryWrites=true&w=majority')//'await' espera a comexao do, mongoBD
    console.log('conectado ao mongoBD')
}
//executa o main() e caso der erro exibe no console
main().catch((err) => console.log(err))

module.exports =  main 
