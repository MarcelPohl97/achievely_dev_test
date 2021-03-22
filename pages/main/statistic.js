import {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { AuthContext } from '../../provider/AuthProvider';


const Statistic = () => {
    const {user, loading, error, redirectProtectedRoute, checkAuthenticatedUser} = useContext(AuthContext);

    useEffect(() => {
        checkAuthenticatedUser();
      }, [user])
    return (
        <>
            <h1>Statistics</h1>
            <Button variant="contained" color="secondary" onClick={() => {redirectProtectedRoute('/main/dashboard', user, user.uid)}}>
                back to Dashboard
            </Button>
        </>
    )
}

export default Statistic