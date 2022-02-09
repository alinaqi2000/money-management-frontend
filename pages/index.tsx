import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { API_URL, GOOGLE_OAUTH_CLIENT_ID } from "../config";
import DefaultLayout from "../components/layout/DefaultLayout";
import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { MyAppState } from "../store/combineReducers";
import { SetName } from "../store/app/app.action";
import { User } from "../models/user.model";
import { SetAccessToken, SetUser } from "../store/auth/auth.action";
import axios from "axios";
const Home: NextPage = () => {
  const app = useSelector((state: MyAppState) => state.app);
  const auth = useSelector((state: MyAppState) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const responseError = (response: any) => {
    toast({
      status: "error",
      title: "Error!",
      description: response.error,
    });
  };

  const responseGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("profileObj" in response) {
      const profile = response.getBasicProfile();
      const user: User = new User(
        profile.getName(),
        profile.getEmail(),
        profile.getImageUrl()
      );

      // login action here
      const data = await axios
        .post<{
          accessToken: string;
          token_type: "bearer";
          user: User;
        }>(API_URL + "login", user)
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
        });
      if (data && data.user) {
        dispatch({ ...new SetAccessToken(data.accessToken) });
        dispatch({ ...new SetUser(user) });
      }

      toast({
        status: "success",
        title: "Login Successfull!",
        description: user.email + " has logged in.",
      });
    }
  };
  const logOut = () => {
    dispatch({ ...new SetAccessToken("") });
    dispatch({ ...new SetUser(null) });
  };
  return (
    <DefaultLayout>
      <Head>
        <title>Money Management - SignUp for free</title>
        <meta name="description" content="A money management solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img
          src={"/images/personal-finance.svg"}
          className={styles.mainImage}
        />
        <Box mt={16} className={styles.content}>
          {auth.user && (
            <Box display="flex" flexDir="column" alignItems="center">
              <img src={auth.user.image_url} className={styles.avatar} />
              <Heading size="lg" mt={5}>
                Hello
                <Text as="span" color="brand.400">
                  {" "}
                  {auth.user.name}
                </Text>
              </Heading>
            </Box>
          )}

          <Heading mt={5} size="md">
            <Text> Welcome to</Text>
            <Text as="span" color="brand.200">
              {app.name}{" "}
            </Text>
            App
          </Heading>

          <Box display="flex" mt={10} flexDir="column" alignItems="center">
            <Button
              color="brand.500"
              onClick={() =>
                dispatch({
                  ...new SetName(
                    "Money Management-" + Math.floor(Math.random() * 1000)
                  ),
                })
              }
            >
              Change App Name
            </Button>
            {auth.user ? (
              <Button mt={10} onClick={logOut} color="red.400">
                Logout
              </Button>
            ) : (
              <GoogleLogin
                className={styles.loginButton}
                clientId={GOOGLE_OAUTH_CLIENT_ID}
                buttonText="Signin to contiue"
                onSuccess={responseGoogle}
                onFailure={responseError}
              />
            )}
          </Box>
        </Box>
      </main>
    </DefaultLayout>
  );
};

export default Home;
