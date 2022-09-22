const {gql} = require("apollo-server")

const typeDefs= gql`
  
type data {
 category:String
 type:String
 difficulty:String
 question:String
 correct_answer:String
 incorrect_answers:[String]!

}


type Query{

    Data:[data]

}


`;
module.exports=typeDefs