import {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {RegisterUser} from '../../hooks/authentication'
import { useRouter } from 'next/router'
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {user, loading, error, redirectProtectedRoute} = useContext(AuthContext);
    useEffect(() => {
      redirectProtectedRoute('/main/dashboard', user);
    }, [user, loading])
    return (
        <>
            <Button onClick={() => {RegisterUser('marcellus123452@gmx.de', 'Hello123456', 'Marcellusthe3rd')}} variant="contained" color="primary">Register Account</Button>
        </>
    )
}

export default Register;