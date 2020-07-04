const { ApolloServer, gql } = require('apollo-server')

// GraphQL内容
const typeDefs = gql`
 
  type Book {
    title: String
    author: String
  }
 
  type Query {
    books: [Book]
  }
`

// 定义数据
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

// 定义解析器
const resolvers = {
  Query: {
    books: () => books
  }
}
// 创建一个ApolloServer实例

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

// nodemon 不报错
