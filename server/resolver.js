const axios = require("axios");

const resolvers = {
  Query: {
    Data: async () => {
      const api = "https://opentdb.com/api.php?amount=10";
      const  {data}  = await axios.get(api);
      const result = data.results.map(({ type, category, difficulty, question,correct_answer, incorrect_answers}) => ({
        type,
        category,
        difficulty,
        question,
        correct_answer,
        incorrect_answers
      }));

      console.log(result);
      return result;
    },
  },
};

module.exports = resolvers;
