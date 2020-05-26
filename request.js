const axios = require("axios");

axios
  .post("http://localhost:4000/graphql", {
    query: `query{course1:course(id:1){title,topic}, course2:course(id:3){title, topic}, course3:courses(topic:"Node.js"){id,title, author}}`,
  })
  .then((res) => console.log(res.data))
  .catch((ex) => console.log(ex));
