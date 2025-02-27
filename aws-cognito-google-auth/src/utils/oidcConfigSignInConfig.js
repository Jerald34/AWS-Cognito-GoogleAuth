const uri =
  process.env.NEXT_PUBLIC_ENV === "Dev"
    ? process.env.NEXT_PUBLIC_COGNITO_LOCAL_URL
    : process.env.NEXT_PUBLIC_COGNITO_PROD_URL;

export const oidcConfigSignInConfig = {
  authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY, // MUST match Cognito Hosted UI Domain
  client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  redirect_uri: `${uri}/callback`, // MUST be allowed in Cognito
  response_type: "code",
  scope: "openid email profile aws.cognito.signin.user.admin",
};
