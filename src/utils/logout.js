import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { logout, setIsAuthentificated } from './../store/user.slice';

export default function LogoutUser() {
//   const history = useHistory();
  const dispatch = useDispatch();
 
    dispatch(logout());
    dispatch(setIsAuthentificated(false));
    redirect("/");

  return (
    <div>
      Logging out...
    </div>
  );
}