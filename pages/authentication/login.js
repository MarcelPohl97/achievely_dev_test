import {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {LoginUser} from '../../hooks/authentication'
import { useRouter } from 'next/router'
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {user, loading, error, redirectProtectedRoute} = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        redirectProtectedRoute('/main/dashboard', user);
      }, [user, loading])
    return (
        <>
            <Button onClick={() => {LoginUser('marcellus123452@gmx.de', 'Hello123456', 'Marcellusthe3rd')}} variant="contained" color="primary">Login</Button>
        </>
    )
}

export default Login