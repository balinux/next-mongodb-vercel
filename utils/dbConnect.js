import mongoose from 'mongoose';

// const connection = {};

async function dbConnect() {
    // if (connection.isConnected) {
    //     return;
    // }

    // const db = await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

    // connection.isConnected = db.connection._readystate;
    // console.log(connection.isConnected);

    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection

    db.on('open', () => {
        console.log('database connnected');
    })

    db.on('error', (error) => {
        console.log(error);
    })
}

export default dbConnect