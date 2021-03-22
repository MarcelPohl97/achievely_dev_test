import {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {ResetPasswordUser} from '../../hooks/authentication'
import { AuthContext } from '../../provider/AuthProvider';

const ForgotPassword = () => {
    const {user, loading, error, redirectProtectedRoute} = useContext(AuthContext);
    useEffect(() => {
        redirectProtectedRoute('/main/dashboard', user);
      }, [user, loading])
    return (
        <>
            <Button onClick={() => {ResetPasswordUser('marcellus123452@gmx.de')}} variant="contained" color="primary">Send Password Request</Button>
        </>
    )
}

export default ForgotPassword