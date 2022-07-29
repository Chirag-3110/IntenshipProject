/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createNotifications = /* GraphQL */ `
  mutation CreateNotifications(
    $input: CreateNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    createNotifications(input: $input, condition: $condition) {
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
export const updateNotifications = /* GraphQL */ `
  mutation UpdateNotifications(
    $input: UpdateNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    updateNotifications(input: $input, condition: $condition) {
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
export const deleteNotifications = /* GraphQL */ `
  mutation DeleteNotifications(
    $input: DeleteNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    deleteNotifications(input: $input, condition: $condition) {
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
