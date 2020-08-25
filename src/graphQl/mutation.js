import { gql} from "@apollo/client";

export const CHANGE_TEXT = gql`
  mutation changeText($id: Int, $text: String!) {
    changeText(id: $id, text: $text) {
      id
      text
      checked
    }
  }
`;

export const CREATE_TASK_ITEM = gql`
  mutation createTaskItem($text: String!) {
    createTaskItem(text: $text) {
      id
      text
      checked
    }
  }
`;

export const CHANGE_CHECKED_FLAG = gql`
  mutation changeCheckedFlag($id: Int, $checked: Boolean!) {
    changeCheckedFlag(id: $id, checked: $checked) {
      id
      text
      checked
    }
  }
`;

export const DELETE_TASK_ITEM = gql`
  mutation deleteTaskItem($id: Int!) {
    deleteTaskItem(id: $id) {
      id
    }
  }
`;

export const DELETE_CHECKED_TASK_ITEM = gql`
  mutation deleteCheckedTaskItem {
    deleteCheckedTaskItem {
      id
      text
      checked
    }
  }
`;
