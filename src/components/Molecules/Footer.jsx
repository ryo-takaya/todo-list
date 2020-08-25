import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { DELETE_CHECKED_TASK_ITEM } from "../../graphQl/mutation";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
`;

const P = styled.div`
  font-size: 15px;
  padding: 10px;
  color: #4d4d4d;
  cursor: ${(props) => (props.pointer ? `pointer` : `default`)};
`;

const Index = ({ taskItems }) => {
  const [deleteCheckedTaskItem] = useMutation(DELETE_CHECKED_TASK_ITEM, {
    update(cache, { data: { deleteCheckedTaskItem } }) {
      cache.modify({
        fields: {
          taskItems(exist) {
            return deleteCheckedTaskItem;
          },
        },
      });
    },
  });
  const num = taskItems.reduce((num, obj) => {
    if (obj.checked) {
      num++;
    }
    return num;
  }, 0);
  const deleteItems = () => {
    deleteCheckedTaskItem();
  };

  return (
    <Container>
      <P>{`${taskItems.length - num} items left`}</P>
      {!!num && (
        <P pointer onClick={() => deleteItems()}>
          clear completed
        </P>
      )}
    </Container>
  );
};

export default Index;
