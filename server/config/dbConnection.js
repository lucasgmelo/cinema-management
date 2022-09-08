const mongoose = require('mongoose');

module.exports = () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    mongoose.connection.once('open', () => {
      console.log('Connected to DB');
    });
  } catch (error) {
    console.log(`Couldn't connect to DB ${error}`);
  }  
};
