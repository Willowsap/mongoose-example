import mongoose from 'mongoose';

const connectString = // your string here

mongoose.connect(connectString);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error:`, err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
