
add these three document in roles collection:

{
  "_id": {
    "$oid": "6940458f62e0539db683aeeb"
  },
  "name": "OWNER",
  "permissions": [
    "CREATE_WORKSPACE",
    "EDIT_WORKSPACE",
    "DELETE_WORKSPACE",
    "MANAGE_WORKSPACE_SETTINGS",
    "ADD_MEMBER",
    "CHANGE_MEMBER_ROLE",
    "REMOVE_MEMBER",
    "CREATE_PROJECT",
    "EDIT_PROJECT",
    "DELETE_PROJECT",
    "CREATE_TASK",
    "EDIT_TASK",
    "DELETE_TASK",
    "VIEW_ONLY"
  ],
  "createdAt": {
    "$date": "2025-12-15T17:29:51.622Z"
  },
  "updatedAt": {
    "$date": "2025-12-15T17:29:51.622Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6940458f62e0539db683aeee"
  },
  "name": "ADMIN",
  "permissions": [
    "ADD_MEMBER",
    "CREATE_PROJECT",
    "EDIT_PROJECT",
    "DELETE_PROJECT",
    "CREATE_TASK",
    "EDIT_TASK",
    "DELETE_TASK",
    "MANAGE_WORKSPACE_SETTINGS",
    "VIEW_ONLY"
  ],
  "createdAt": {
    "$date": "2025-12-15T17:29:51.631Z"
  },
  "updatedAt": {
    "$date": "2025-12-15T17:29:51.631Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6940458f62e0539db683aef1"
  },
  "name": "MEMBER",
  "permissions": [
    "VIEW_ONLY",
    "CREATE_TASK",
    "EDIT_TASK"
  ],
  "createdAt": {
    "$date": "2025-12-15T17:29:51.636Z"
  },
  "updatedAt": {
    "$date": "2025-12-15T17:29:51.636Z"
  },
  "__v": 0
}