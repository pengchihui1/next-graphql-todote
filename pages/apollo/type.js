import gql from 'graphql-tag'

export const typeDefs = gql`
  type Users {
    id: ID
    name: String
    status: String
    titile: String
  }
  type Query {
    viewer: [Users]
  }
`
