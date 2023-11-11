import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export const getRepositories = username =>
    axios.get(`${GITHUB_API_URL}/users/${username}/repos`)
        .then(response => response.data);