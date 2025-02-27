// oidcConfigSignOutConfig.js
const oidcConfigSignOutConfig = () => {
    const clientId = process.env.COGNITO_CLIENT_ID;
    const logoutUri = uri;
    const cognitoDomain = process.env.COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    sessionStorage.clear();
};

export default oidcConfigSignOutConfig;