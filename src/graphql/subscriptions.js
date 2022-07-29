/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateNotifications = /* GraphQL */ `
  subscription OnCreateNotifications {
    onCreateNotifications {
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
export const onUpdateNotifications = /* GraphQL */ `
  subscription OnUpdateNotifications {
    onUpdateNotifications {
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
export const onDeleteNotifications = /* GraphQL */ `
  subscription OnDeleteNotifications {
    onDeleteNotifications {
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
