const URL = "http://localhost:8080/devops_starter_war_exploded";

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function apiFacade() {
    /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/

    const login = (user, password, setResponseText) => {
        const options = makeOptions("POST", true, { username: user, password: password });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setResponseText(res.msg);
                setToken(res.token);
                console.log(res.msg);
            })
    }

    const signup = (user, password, setResponseText) => {
        const options = makeOptions("POST", false, { username: user, password: password });
        return fetch(URL + "/api/signup", options)
            .then(handleHttpErrors)
            .then(res => {
                setResponseText(res.msg);
            })
    }

    const fetchUserData = (role) => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URL + `/api/info/${role}`, options).then(handleHttpErrors);
    }

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        signup,
        logout,
        fetchUserData
    }
}

const facade = apiFacade();
export default facade;
