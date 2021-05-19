import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BuyForm from "../components/buyform";
import Footer from "../components/footer";
import Header from "../components/header";

const Post = () => {
  const [theCourse, setCourse] = useState("");
  const router = useRouter();
  const { courseid } = router.query;

  useEffect(() => {
    setCourse(courseid);
  }, []);

  return (
    <>
      <Header></Header>
      <div className="mainForm box">
        <h2>Selected Course Name: {courseid}</h2>
        <h1>
          <span>Total:</span> $100
        </h1>
        <BuyForm selectedCourse={courseid}></BuyForm>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Post;
