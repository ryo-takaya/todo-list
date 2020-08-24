import React from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

const Container = styled.div`
  width: 100%;
  height: 53px;
  position: relative;
  bottom: 0;
`;

const DeleteButton = styled.div`
  width: 80%;
  height: 40px;
  position: absolute;
  left: 0;
`;

const StickTop = styled.span`
  display: inline-block;
  height: 1px;
  border-radius: 5px;
  background: #cc9a9a;
  width: 20px;
  transform: translateX(10px) rotate(-45deg);
  transition: all 0.2s;
  z-index: 3;
  ${DeleteButton}:hover & {
    background: red;
  }
`;

const StickBottom = styled(StickTop)`
  transform: translateX(-10px) rotate(45deg);
`;

const DELETE_TASK_ITEM = gql`
  mutation deleteTaskItem($id: Int!) {
    deleteTaskItem(id: $id) {
      id
    }
  }
`;

const Index = ({ taskId }) => {
  const [deleteTaskItem] = useMutation(DELETE_TASK_ITEM, {
    update(cache, { data: { deleteTaskItem } }) {
      cache.modify({
        fields: {
          taskItems(exist) {
            const task_items = cache.readQuery({
              query: gql`
                query taskItems {
                  taskItems {
                    id
                    text
                    checked
                  }
                }
              `,
            });

            const newTaskItems = task_items.taskItems.filter(
              (obj) => obj.id !== deleteTaskItem.id
            );
            return newTaskItems;
          },
        },
      });
    },
  });
  const deleteItem = () => {
    deleteTaskItem({ variables: { id: taskId } });
  };
  return (
    <Container>
      <DeleteButton onClick={() => deleteItem()}>
        <StickTop />
        <StickBottom />
      </DeleteButton>
    </Container>
  );
};

export default Index;
