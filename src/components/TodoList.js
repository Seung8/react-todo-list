import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  /* flex: 1 => display: flex인 경우 차지할 수 있는 모든 영역을 차지 */
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: lightgray;
`;

// 할일 목록 컴포넌트
function TodoList() {
  return <TodoListBlock>Todo List</TodoListBlock>;
}

export default TodoList;
