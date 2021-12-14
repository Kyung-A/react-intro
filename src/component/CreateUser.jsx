import React from "react";

const CreateUser = ({ username, email, onChange, onCreate, onUpdate }) => {
  // TODO https://react.vlpt.us/basic/22-context-dispatch.html 마지막 부분 숙제 구현
  return (
    <div>
      <input
        name="username"
        type="text"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        type="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
      <button onClick={onUpdate}>업데이트</button>
    </div>
  );
};

export default React.memo(CreateUser);
