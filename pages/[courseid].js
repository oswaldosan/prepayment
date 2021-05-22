import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BuyForm from "../components/buyform";
import Footer from "../components/footer";
import Header from "../components/header";
import PackageData from "../components/packageData";
import { motion } from "framer-motion";
import Addons from "../components/addons";

const variantsLeft = {
  hidden: { opacity: 0, x: "-600px" },
  visible: { opacity: 1, x: "0px" },
};

const variantsRight = {
  hidden: { opacity: 0, x: "600px" },
  visible: { opacity: 1, x: "0px" },
};

const variansAdd = {
  hidden: { opacity: 0, y: "600px" },
  visible: { opacity: 1, y: "0px" },
};

const Post = () => {
  const [theCourse, setCourse] = useState("");
  const router = useRouter();
  const { courseid } = router.query;

  useEffect(() => {
    setCourse(courseid);
  }, []);

  return (
    <main>
      <Header></Header>
      <div className="mainGrid container">
        <motion.div
          className="mainForm box"
          variants={variantsLeft}
          initial={variantsLeft.hidden}
          animate={variantsLeft.visible}
          transition={{ duration: 1 }}
        >
          <BuyForm selectedCourse={courseid}></BuyForm>
        </motion.div>
        <motion.div
          className="mainForm box"
          variants={variantsRight}
          initial={variantsRight.hidden}
          animate={variantsRight.visible}
          transition={{ duration: 1 }}
        >
          <PackageData course={courseid}></PackageData>
        </motion.div>
      </div>
      <motion.div
        initial={variansAdd.hidden}
        animate={variansAdd.visible}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Addons></Addons>
      </motion.div>
      <Footer></Footer>
    </main>
  );
};

export default Post;
