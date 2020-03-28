export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact]
  }

  input ContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: ContactInput!): Contact
  }
`
