const mongoose = require('mongoose');

const getConnection = async () => {
    try{

        const url = 'mongodb://usuario-iud:MBKx9NKw9EFUlNkI@ac-1tzpemn-shard-00-00.qlvfbat.mongodb.net:27017,ac-1tzpemn-shard-00-01.qlvfbat.mongodb.net:27017,ac-1tzpemn-shard-00-02.qlvfbat.mongodb.net:27017/inventarios-inv?ssl=true&replicaSet=atlas-d9px8c-shard-0&authSource=admin&retryWrites=true&w=majority'

        await mongoose.connect(url);

        console.log('conexion exitosa');

    }catch (error){
        console.log(error);
    }
}

module.exports = {
    getConnection,
}