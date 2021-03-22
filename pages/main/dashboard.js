import {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {LogoutUser} from '../../hooks/authentication';
import {getUserData} from '../../hooks/userdata';
import { useRouter } from 'next/router';
import { AuthContext } from '../../provider/AuthProvider';
import { auth, firestore } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link'
import Goal from '../../components/goal';

const Dashboard = ({username}) => {
    const {user, loading, error, checkAuthenticatedUser} = useContext(AuthContext);

    useEffect(() => {
        checkAuthenticatedUser();
      }, [user])
    return (
        <>
            <h1>Dashboard</h1>
            {username}
            <Button onClick={LogoutUser} variant="contained" color="primary">Logout</Button>
            <Goal name={'Life Goals'} goal={'life'} />
            <Goal name={'Diet Goals'} goal={'diet'} />
        </>
    )
}

export const getServerSideProps = async (data) => {
    const uid = await data.query;
    const username = await getUserData(uid);
    
    return { props: { username: username.username } }
    
}


export default Dashboard;