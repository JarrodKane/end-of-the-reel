import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Base from "../components/templates/Base";

export default function Home() {
  return (
    <Base>
      {/* <div className={`w-full md:w-auto`}>Image Header</div> */}
      <div>Search Bar here</div>
      <div>Episodes, one per row with breaks inbetween, max 3 on page</div>
      <div>Call to action thingy</div>
      <div>Footer information</div>
    </Base>
  );
}
