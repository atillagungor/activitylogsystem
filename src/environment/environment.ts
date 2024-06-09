let BASE_API_URL: string;

const isWindows = () => {
    return navigator.userAgent.indexOf("Win") !== -1;
}

if (isWindows()) {
    BASE_API_URL = "https://localhost:44386/api/";  
} else {
    BASE_API_URL = "http://localhost:5110/api/";  
}

export { BASE_API_URL };