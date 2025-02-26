const uri = process.env.ENV === "Dev" ? process.env.COGNITO_LOCAL_URL : process.env.COGNITO_PROD_URL;

export const oidcConfigSignInConfig = {
  authority: process.env.COGNITO_AUTHORITY, // MUST match Cognito Hosted UI Domain
  client_id: process.env.COGNITO_CLIENT_ID,
  redirect_uri: `${uri}/callback`, // MUST be allowed in Cognito
  response_type: "code",
  scope: "openid email profile aws.cognito.signin.user.admin",
};
