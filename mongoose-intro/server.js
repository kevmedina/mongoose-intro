const mongoose = require('mongoose');
const Cat = require('./models/Cat.model');

mongoose
  .connect('mongodb://localhost/cats-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  // create a cat
  Cat.create({
     name: 'garfield',
     age: 7,
     color: 'orange' 
  })
  .then(newlyCreatedCat => console.log(`Cat successfuly created! ---> ${newlyCreatedCat}`))
  .catch(err => console.log(`Error while creating a cat: ${err}`));

  // read
  Cat.find()
  .then(responseFromDb => console.log(responseFromDb))
  .catch(err => console.log(err));

  // update
  Cat.findByIdAndUpdate('5e28ff75994d4308bf473363', {$set: {name: 'garfield 22'}})
  .then(updatedCat => console.log(`updated cat: ${updatedCat}`))
  .catch(err => console.log(err));

  // delete
  Cat.findByIdAndRemove('5e28ff75994d4308bf473363')
  .then(() => console.log('Removed!'))
  .catch(err => console.log(err));