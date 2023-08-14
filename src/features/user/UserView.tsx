import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <h2>List of Users:</h2>
      {data.loading && <h4>Loading...</h4>}
      {!data.loading && data.error && <h3 className="red">{data.error}</h3>}
      {!data.loading && data.users && (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>
              {user.id}. {user.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserView;
