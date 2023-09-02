const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type teams {
    id: ID
    name: String
    presidenteName: String
    dtName: String
    value: Float
  }
  type Query {
    hello: String
    getAllTeams: [teams]
    getTeam(id: ID): teams
  }
  input TeamInput {
    name: String
    presidenteName: String
    dtName: String
    value: Float
  }

  type Mutation {
    createTeam(team: TeamInput!): teams
    deleteTeam(id: ID): String
    updateTeam(id: ID, team: TeamInput): teams
  }
`;

module.exports = { typeDefs };
