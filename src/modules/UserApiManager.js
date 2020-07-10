const baseUrl = "http://localhost:8000";

const UserApiManager = {
    registerNewUser(newUser) {
        return fetch(`${baseUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(resp => resp.json())
            .then(parsedResp => {
                if ("token" in parsedResp) {
                    sessionStorage.setItem("betadata-token", parsedResp.token)
                }
            })
    },
    loginUser(credentials) {
        return fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(resp => resp.json())
            .then(parsedResp => {
                if ("token" in parsedResp) {
                    sessionStorage.setItem("betadata-token", parsedResp.token)
                }
            })
    }
};

export default UserApiManager;