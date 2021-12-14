import React, { useContext } from "react";
import { UserDispatch } from "../App";

const User = React.memo(function User({ user, onModify }) {
  // 아래와 같이 쓰면 dispatch를 어디서든 사용 가능
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
      >
        {user.username}
      </b>
      <span>{user.email}</span>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_USER", id: user.id });
        }}
      >
        삭제
      </button>
      <button onClick={() => onModify(user)}>수정</button>
    </div>
  );
});

const UserList = ({ users, onModify }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onModify={onModify} />
      ))}
    </div>
  );
};

export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);
