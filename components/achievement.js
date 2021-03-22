import {useRef, useState} from 'react';
import Button from '@material-ui/core/Button';
import { deleteAchievement } from '../hooks/crud';

const Achievement = ({goal, refreshData}) => {
    return (
        <>
            <div className="flex-col p-4 rounded-lg shadow-lg border-2 border-green-600">
                <ul>
                    <li>Goal: {goal.goal}</li>
                    <li>Achievement: {goal.achievement}</li>
                    <li>Expected Days: {goal.days}</li>
                    <li>Tracked Days: {goal.tracked_days}</li>
                    <li>Document ID: {goal.document_id}</li>
                </ul>
                <Button variant="outlined" color="secondary">
                    Done
                </Button>
                <Button variant="outlined" color="secondary">
                    Edit
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => {deleteAchievement(goal.document_id, refreshData())}}>
                    Delete
                </Button>
            </div>
        </>
    )
}

export default Achievement;