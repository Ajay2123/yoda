const API_BASE_URL = "https://yoda-backend.vercel.app";

export const fetchGoalsBypersonID = async (id) =>
    fetch(`${API_BASE_URL}/goals/${id}`)
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });

export const fetchGoalByGoalID = async (personId, goalId) =>
    fetch(`${API_BASE_URL}/goals/${personId}/${goalId}`)
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });
