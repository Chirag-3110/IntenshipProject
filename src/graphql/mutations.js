/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQueations = /* GraphQL */ `
  mutation CreateQueations(
    $input: CreateQueationsInput!
    $condition: ModelQueationsConditionInput
  ) {
    createQueations(input: $input, condition: $condition) {
      id
      QuestionID
      Option
      totalVotes
      createdAt
      updatedAt
    }
  }
`;
export const updateQueations = /* GraphQL */ `
  mutation UpdateQueations(
    $input: UpdateQueationsInput!
    $condition: ModelQueationsConditionInput
  ) {
    updateQueations(input: $input, condition: $condition) {
      id
      QuestionID
      Option
      totalVotes
      createdAt
      updatedAt
    }
  }
`;
export const deleteQueations = /* GraphQL */ `
  mutation DeleteQueations(
    $input: DeleteQueationsInput!
    $condition: ModelQueationsConditionInput
  ) {
    deleteQueations(input: $input, condition: $condition) {
      id
      QuestionID
      Option
      totalVotes
      createdAt
      updatedAt
    }
  }
`;
