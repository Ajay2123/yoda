const API_BASE_URL = "https://yoda-backend.vercel.app";

export const fetchGoalsByID = async (id) =>
    fetch(`${API_BASE_URL}/goals/${id}`)
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });
