import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from './userReducer';

const UserComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const handleLogin = () => {
    const userData = { name: 'Hiran Ram Babu', email: 'hrb@mjit.in' };
    dispatch(setUser(userData)); // action.payload, which inturn stores like setVar or setState
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <>
          <h2>No user logged in</h2>
          <button onClick={handleLogin}>Log In</button>
        </>
      )}
    </div>
  );
};

export default UserComponent;