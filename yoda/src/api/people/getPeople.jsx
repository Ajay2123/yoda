const API_BASE_URL = "https://yoda-backend.vercel.app";

export const fetchPeople = async () =>
    fetch(`${API_BASE_URL}/people`)
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });
