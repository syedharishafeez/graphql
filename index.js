const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const schema = buildSchema(`
type Query{
    name: String,
    age: Int,
    message: String
}
`);

const root = {
  name: "Name",
  age: 21,
  message: "This is graphql server",
};

app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () =>
  console.log("graphql server is running at http://localhost:4000")
);
