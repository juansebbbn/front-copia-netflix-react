const API_URL = "http://localhost:8080";

import { jwtDecode } from "jwt-decode";

// get token and decode it
const token = localStorage.getItem('token');
let userId = null;

if (token) {
    try {
        const decodedToken = jwtDecode(token);
        userId = decodedToken.userId;
    } catch (err) {
        console.error("(SERVICE) Invalid token:", err);
    }
}

// hardcoded for now
const profileId = 1;

// helper to get headers with Authorization
const getAuthHeaders = () => ({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
});

export const getStartedMovies = async () => {
    try {
        const response = await fetch(`${API_URL}/api/profile/started/${profileId}`, {
            headers: getAuthHeaders(),
        });

        console.log("(SERVICE) Response from getStartedMovies:", response);
        if (!response.ok) throw new Error("error getting started movies");
        return await response.json();
    } catch (error) {
        console.error("(SERVICE) error in getStartedMovies:", error);
    }
};

export const getProfiles = async () => {
    try {
        const response = await fetch(`${API_URL}/api/user/getProfiles/${profileId}`, {
            headers: getAuthHeaders(),
        });

        console.log("(SERVICE) response from getProfiles:", response);
        if (!response.ok) throw new Error("error getting profiles");
        return await response.json();
    } catch (error) {
        console.error("(SERVICE) error in getUsers:", error);
        return null;
    }
};

export const getNewMovie = async () => {
    try {
        const response = await fetch(`${API_URL}/api/movie/getPremiere`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error(`(SERVICE) error getting movie, status code: ${response.status}`);
        const data = await response.json();
        return Array.isArray(data) && data.length > 0 ? data[0] : data;
    } catch (error) {
        console.error("(SERVICE) error in getNewMovie:", error.message);
        return { error: error.message };
    }
};

export const getMoviesCards = async () => {
    try {
        const response = await fetch(`${API_URL}/api/movie/getMovies`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("(SERVICE) error getting movies cards");
        return await response.json();
    } catch (error) {
        console.error("(SERVICE) error in getMoviesCards:", error);
        return null;
    }
};

export const getMovieDetail = async (id) => {
    try {
        const response = await fetch(`${API_URL}/api/movie/getMovie/${id}`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("(SERVICE) movie not found");
        const data = await response.json();
        return Array.isArray(data) && data.length > 0 ? data[0] : data;
    } catch (error) {
        console.error("(SERVICE) error in getMovieDetail:", error);
        return { error: error.message };
    }
};

export const getPayments = async () => {
    if (!userId) return null;
    try {
        const response = await fetch(`${API_URL}/api/user/infoPayment/${userId}`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("(SERVICE) error while fetching payments");
        return await response.json();
    } catch (error) {
        console.error("(SERVICE) error in getPayments:", error);
        return null;
    }
};

export const fetchUser = async () => {  

    if (!userId) return null;

    try {
 
        const response = await fetch(`${API_URL}/api/user/infoUser/${userId}`, {
            headers: getAuthHeaders(),
        });
        console.log("uno");
        console.log("dos");
        if (!response.ok) throw new Error("(SERVICE) error while fetching user data");
        return await response.json();
    } catch (error) {
        console.error("(SERVICE) error in fetchUser:", error);
        return null;
    }
}

export const login = async (formValues) => {
    try {
        // api request to login
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        });


        if (!response.ok) throw new Error("(SERVICE) invalid credentials");

        // if it's ok, we get the token and save it in local storage
        const token = await response.json();
        localStorage.setItem("token", token.token);
        return token;
    } catch (error) {
        console.error("(SERVICE) error in login:", error.message);
        return null;
    }
};

export const register = async (formValues) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        });

        if (!response.ok) throw new Error("(SERVICE) error while registering");

        const token = await response.json();
        localStorage.setItem("token", token.token);
        return token;
    } catch (error) {
        console.error("(SERVICE) error in register:", error.message);
        return null;
    }
};
