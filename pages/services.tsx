import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Services.module.css";
import HomeImage from "../public/images/ServiceHeadlineImage.svg";
import HireCard from "../components/HireCard";
import Community from "../components/Community";
import Footer from "../components/footer";
import Pagination from "../components/Pagination";

interface Details {
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  amount: number;
  profilePic: string;
  bookMark?: boolean;
}

const data: Details[] = [
  {
    name: "Jame Doe",
    image: "/images/h1.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/pc1.webp",
    bookMark: true,
  },
  {
    name: "Jame Doe",
    image: "/images/h2.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/pc2.jpg",
    bookMark: true,
  },
  {
    name: "Jame Doe",
    image: "/images/h3.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/pc1.webp",
  },
  {
    name: "Jame Doe",
    image: "/images/h4.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/pc3.jpg",
    bookMark: true,
  },
  {
    name: "Jame Doe",
    image: "/images/h2.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/pc4.jpg",
  },
  {
    name: "Jame Doe",
    image: "/images/h3.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/pc5.jpg",
  },
  {
    name: "Jame Doe",
    image: "/images/h4.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/pc6.jpg",
    bookMark: true,
  },

  {
    name: "Jame Doe",
    image: "/images/h1.jpg",
    description: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
    rating: 5.0,
    reviews: 2,
    amount: 100,
    profilePic: "/images/pc2.jpg",
    bookMark: true,
  },
];

const Services: NextPage = () => {
  const [searchOption, setSearchOption] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/EgyomLogo.svg" />
      </Head>

      <main>
        <div className={styles.heroContainer}>
          <div style={{ flex: 2 }}>
            <div className={styles.heroContainerMainText}>
              <h1 className={styles.heroHeading}>Find a Service for hire</h1>
              <div className={styles.heroContainerText}>
                <p>
                  Find a selection of freelance services lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Velit mauris urna nunc
                  quisque netus.
                </p>
              </div>
            </div>

            <button className={styles.heroButton1}>Post a service</button>
          </div>
          <div className={styles.heroImage}>
            <Image
              unoptimized
              src={HomeImage}
              alt="hero image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={styles.searhContainer}>
          <input type="text" placeholder="Find a service e.g. Writer" />
          <button>Find Services</button>
        </div>
        <div className={styles.categoryContainer}>
          <div className={styles.categorySettingsContainer}>
            <h6>Search Settings</h6>

            <p className={styles.categorySort}>Sort by</p>

            <form className={styles.searchForm} onSubmit={() => {}}>
              <select
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
              >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>

              <button type="submit" className={styles.searchSettingsButton1}>
                Apply Filter
              </button>
            </form>
          </div>
          <div className={styles.categoryServicesContainer}>
            <HireCard data={data} />
            <Pagination />
          </div>
        </div>
        <Community />
        <Footer />
      </main>
    </div>
  );
};

export default Services;
