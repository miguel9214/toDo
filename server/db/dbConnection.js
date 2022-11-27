const username='miguel';
const pass='92141073Mi';
const dataBase='toDo';
const stringConnection=`mongodb+srv://${username}:${pass}.@ramosg42.trnhkwu.mongodb.net/${dataBase}?retryWrites=true&w=majority`;

module.exports=stringConnection;