/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($username: String!) {
    getUsers(username: $username) {
      username
      email
      tasks {
        items {
          id
          taskName
          taskDescription
          createAt
          createDate
          usersTasksId
          createdAt
          updatedAt
        }
        nextToken
      }
      notification {
        items {
          id
          content
          createAt
          createDate
          usersNotificationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        email
        tasks {
          nextToken
        }
        notification {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      taskName
      taskDescription
      createAt
      createDate
      usersTasksId
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        taskName
        taskDescription
        createAt
        createDate
        usersTasksId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNotifications = /* GraphQL */ `
  query GetNotifications($id: ID!) {
    getNotifications(id: $id) {
      id
      content
      createAt
      createDate
      usersNotificationId
      createdAt
      updatedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createAt
        createDate
        usersNotificationId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
