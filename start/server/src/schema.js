// SCHEMA NEEDS
// CHEATSHEET: https://devhints.io/graphql#schema
// Fetch all upcoming rocket launches
// Fetch a specific launch by its ID
// Login the user
// Book launch trips if the user is logged in
// Cancel launch trips if the user is logged in

// https://www.apollographql.com/docs/apollo-server/api/apollo-server/#gql
const { gql } = require('apollo-server'); // gql: template literal tag

const typeDefs = gql`
# my schema will go here

# ROOT QUERY - ENTRY-POINT INTO OUR SCHEMA, DEFINES WHAT WE CAN FETCH
type Query {
  launches: [Launch]!
  launch(id: ID!): Launch #TD
  # queries for the current user
  me: User #TD
}

type Launch {
  id: ID!
  site: String
  mission: Mission #TD
  rocket: Rocket #TD
  isBooked: Boolean! 
}

type Rocket {
  id: ID!
  name: String
  type: String
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

enum PatchSize {
  SMALL
  LARGE
}

# ENTRY POINT INTO OUR SCHEMA FOR DATA MODIFICATION
type Mutation {
  # if false, booking trips failed - check errors
  bookTrips(launchIds: [ID]!): TripUpdateResponse! #TD

  # if false, cancellation failed - check errors
  cancelTrip(launchId: ID!): TripUpdateResponse! #TD

  login(email:String): String # login token
}

# its always good practice to return the data that you're updating in order for the Apollo Client cache to update automatically
type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch] #TD
  }
`;

module.exports = typeDefs;
