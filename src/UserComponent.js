import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from './userReducer';
import styled from 'styled-components';

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

  const Button = styled.button` // styled.button{[]}
  background-color: ${props => (props.Logged ? 'red' : 'blue')};
  color: white;
`;

const H2 = styled.h2` // styled.button{[]}
  color: Red;
`;

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <Button Logged onClick={handleLogout}>Log Out</Button>
        </>
      ) : (
        <>
          <H2>No user logged in</H2>
          <Button onClick={handleLogin}>Log In</Button>
        </>
      )}
    </div>
  );
};

export default UserComponent;