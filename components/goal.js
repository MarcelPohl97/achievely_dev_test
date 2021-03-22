import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'
import {useContext} from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Goal = ({goal, name}) => {
    const {user, loading, error} = useContext(AuthContext);
    const router = useRouter();

    const getGoal = () => {
        if(user) {
            router.push({
                pathname: '/main/goals',
                query: { 
                    goal: goal,
                    uid: user.uid,
                 },
            })
        }
    }
    return (
        <>
            <div className="rounded-lg shadow-lg p-16">
                <Button onClick={getGoal} variant="contained" color="primary">{name}</Button>
            </div>
        </>
    )
}

export default Goal;

