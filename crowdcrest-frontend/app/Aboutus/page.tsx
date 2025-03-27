import { Heading } from "@/elements/Heading";
import styles from "./Aboutus.module.css";
import { Text } from "@/elements/Text";
import { Pageheader } from "@/modules/Pageheader";
import { JSX } from "react";

export const AAboutus = (): JSX.Element => {
  return (
    <>
      <Pageheader />
      <div className={styles.head}>
        <Heading>About US</Heading>
        <div className={styles.content}>
          <Text>
            At CrowdCrest, we believe that every innovative idea deserves a chance to shine.
            Our mission is to empower creators, entrepreneurs, and changemakers by providing a trusted platform where passion meets opportunity. Whether it’s a breakthrough tech project, an artistic endeavor, or a community initiative, we connect visionary individuals with a supportive network of backers. Our team is dedicated to transparency, collaboration, and continuous innovation. We strive to make the funding process simple, secure, and effective—ensuring that every campaign has the potential to transform ideas into reality. By leveraging cutting-edge technology and a user-friendly interface, CrowdCrest makes it easier than ever to bring creative projects to life.
            Join us on this journey to shape a future where creativity and community drive success. At CrowdCrest, your dream is our passion, and together, we can create a brighter, more connected world.
          </Text>
        </div>
      </div>
    </>
  );
};

export default AAboutus;
