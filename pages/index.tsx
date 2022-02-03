import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { GOOGLE_OAUTH_CLIENT_ID } from "../config";

const Home: NextPage = () => {
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Money Management</title>
        <meta name="description" content="A money management solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>Welcome to Money Managemennt App</h4>
        <GoogleLogin
          clientId={GOOGLE_OAUTH_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </main>
    </div>
  );
};

export default Home;
