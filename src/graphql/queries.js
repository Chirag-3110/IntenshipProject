/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQueations = /* GraphQL */ `
  query GetQueations($id: ID!) {
    getQueations(id: $id) {
      id
      QuestionID
      Option
      totalVotes
      createdAt
      updatedAt
    }
  }
`;
export const listQueations = /* GraphQL */ `
  query ListQueations(
    $filter: ModelQueationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQueations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        QuestionID
        Option
        totalVotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
