import Connection from "./Conection";

const mongoDB = new Connection("mongodb://127.0.0.1:27017/treinamento"); // insert localhost: 127.0.0.1 and database name

export { mongoDB };
