const API_BASE_URL = "https://yoda-backend.vercel.app";

export const updateGoalByGoalID = async (personID, goalID, body) =>
    fetch(`${API_BASE_URL}/goals/${personID}/${goalID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });
