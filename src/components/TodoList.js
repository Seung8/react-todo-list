import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  /* flex: 1 => 차지할 수 있는 모든 영역을 차지 */
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: lightgray;
`;

function TodoList() {
  return <TodoListBlock></TodoListBlock>;
}

export default TodoList;
