import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  /* flex: 1 => display: flex인 경우 차지할 수 있는 모든 영역을 차지 */
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

// 할일 목록 컴포넌트
function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기1" done={true}></TodoItem>
      <TodoItem text="프로젝트 생성하기2" done={true}></TodoItem>
      <TodoItem text="프로젝트 생성하기3" done={false}></TodoItem>
      <TodoItem text="프로젝트 생성하기4" done={false}></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
