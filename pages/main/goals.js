import {useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {LogoutUser} from '../../hooks/authentication';
import {getUserData, getUserGoals} from '../../hooks/userdata';
import Achievement from '../../components/achievement';
import { useRouter } from 'next/router';
import { AuthContext } from '../../provider/AuthProvider';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import useSWR, { mutate } from 'swr';
import Head from 'next/head';
import { addAchievement } from '../../hooks/crud';

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }

const Goals = ({goals, goal}) => {
    
    const {user, loading, error, redirectProtectedRoute, checkAuthenticatedUser} = useContext(AuthContext);

    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
    }
    

    useEffect(() => {
        checkAuthenticatedUser();
      }, [user])
    return (
        <>  
            <Head>
                <title>My {goal} Achievements </title>
            </Head>
            <h1>Goal: {goal}</h1>
            <h2>My Achievements</h2>
            {goals.map(goal => (
                <Achievement goal={goal} refreshData={refreshData} />
            ))}
            <Button variant="contained" color="secondary" onClick={() => {redirectProtectedRoute('/main/dashboard', user, user.uid)}}>
                back to Dashboard
            </Button>
            <div className="flex flex-col items-start">
                <TextField id="outlined-basic" label="Achievement" variant="outlined" />
                <TextField id="outlined-basic" label="Days" variant="outlined" />
                <Button variant="contained" color="primary" onClick={() => {addAchievement(refreshData())}}>
                    Add Goal
                </Button>
            </div>
        </>
    )
}

export const getServerSideProps = async (data) => {
    const {goal, uid} = await data.query;
    const goals = await getUserGoals(goal, uid);
    
    return { props: { goals: goals, goal:goal } }
}

export default Goals;