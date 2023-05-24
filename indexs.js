import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

export default function Home() {
  return (
export default function Home() {
        imgUrl="/static/clifford.webp"
      />

      <SectionCards title="Disney" />

      <Card imgUrl="/static/clifford.webp" size="large" />
      <Card size="medium" />
      <Card imgUrl="/static/clifford.webp" size="small" />
    </div>
  );
}