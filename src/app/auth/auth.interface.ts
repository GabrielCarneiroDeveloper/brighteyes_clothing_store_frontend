interface TokenData {
  token: string;
  expiresIn: number;
}

interface Credentials {
  email: string;
  password: string;
}

interface LoggedInSuccessfully {
  expiresIn: number;
  token: string;
}

export { TokenData, Credentials, LoggedInSuccessfully };
