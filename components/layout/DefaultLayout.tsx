import { Container } from "@chakra-ui/react";
import React from "react";
import styles from "./DefaultLayout.module.css";

export default function DefaultLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container className={styles.container}>{children}</Container>;
}
