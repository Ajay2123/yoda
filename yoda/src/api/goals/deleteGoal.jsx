const API_BASE_URL = "https://yoda-backend.vercel.app";

export const updateGoalByGoalID = async (personID, goalID) =>
    fetch(`${API_BASE_URL}/goals/${personID}/${goalID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });
