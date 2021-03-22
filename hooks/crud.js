import axios from 'axios';

export const addAchievement = async (refreshData) => {
    axios
        .post("http://localhost:3000/api/addachievement", {
            achievement: "Marcellusthethird",
            days: 30,
            goal: 'life',
            tracked_days: 0,
            user_uid: 'tIf1Tq9CzVSN4PQMBkC5oWsRb0E3'
        })
        .then((res) => {
            refreshData;
        })
        .catch((e) => {
           alert(e);
        });
}

export const editAchievement = async () => {
    axios
        .post("http://localhost:3000/api/editachievement", {
            achievement: "NewTest",
            days: 30,
            goal: 'life',
            tracked_days: 0,
            user_uid: 'tIf1Tq9CzVSN4PQMBkC5oWsRb0E3'
        })
        .then((res) => {
            refreshData();
        })
        .catch((e) => {
           alert(e);
        });
}

export const deleteAchievement = async (achievement_id, refreshData) => {
    axios
        .post("http://localhost:3000/api/deleteachievement", {
            document_id: achievement_id,
        })
        .then((res) => {
            refreshData
        })
        .catch((e) => {
           alert(e);
        });
}