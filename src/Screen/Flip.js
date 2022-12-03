import React, { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./flip.css";
import hinh1 from "../assets/images/1.jpg";
import hinh2 from "../assets/images/2.jpg";
import hinh3 from "../assets/images/3.jpg";
import hinh4 from "../assets/images/4.jpg";

const width = 350;
const height = 733;

const Flip = () => {
  let ref = useRef();
  useEffect(() => {
    arrImage();
  }, []);
  const [totalPage, setTotalPage] = useState(0);
  const [index, setIndex] = useState(0);
  async function onPage(e) {
    // await setIndex(ref.pageFlip().pages.currentPageIndex);
    console.log(`book onPage`, ref.pageFlip().pages.currentPageIndex);
  }
  const arrImage = (e = "") => {
    // setIndex(e);
    return;
  };
  const Page = React.forwardRef((props, ref) => {
    return (
      <div
        className="demoPage"
        style={{ backgroundColor: "red" }}
        ref={ref}
        width={width}
        height={height}
      >
        {props.children}
        {/* {props.number === "1" ? (
          <>
            <p>ksjdhfskdjfh</p>
          </>
        ) : null}
        {props.number === "2" ? (
          <>
            <img
              alt=""
              style={{
                left: 0,
                position: "fixed",
                borderRadius: 10,
                padding: 4,
              }}
              src={hinh2}
              height={280}
              width={280}
            />
            <img
              alt=""
              style={{
                left: 55,
                transform: "rotate(30deg)",
                position: "absolute",
                zIndex: 2,
                borderRadius: 30,
                padding: 4,
              }}
              src={hinh2}
              height={280}
              width={280}
            />
            <p>ksjdhfskdjfh</p>
          </>
        ) : null}
        {props.number === "3" ? (
          <>
            <p>ksjdhfskdjfh</p>
          </>
        ) : null}
        {props.number === "4" ? (
          <>
            <p>ksjdhfskdjfh</p>
          </>
        ) : null} */}
      </div>
    );
  });

  const PageCover = React.forwardRef((props, ref) => {
    return (
      <div
        className="page page-cover page-cover-top"
        style={{ backgroundColor: "#194d33" }}
        ref={ref}
        data-density="hard"
      >
        {console.log(`PageCover`, ref())}
        <div className="page-content" style={{ backgroundColor: "#194d33" }}>
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });

  return (
    <>
      <HTMLFlipBook
        width={width}
        height={height}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        className="demo-book"
        ref={(component) => (ref = component)}
      >
        <PageCover>chuc mung Sinh nhat</PageCover>
        <Page ref={ref} number="1">
          <img
            alt=""
            className=" iamgeBelow"
            style={{
              left: 0,
              position: "fixed",
              borderRadius: 30,
              margin: 40,
            }}
            src={hinh2}
            height={280}
            width={280}
          />
          <img
            alt=""
            className="imageAbove"
            style={{
              left: 55,
              transform: "rotate(20deg)",
              position: "absolute",
              zIndex: 2,
              borderRadius: 30,
              padding: 4,
            }}
            src={hinh2}
            height={280}
            width={280}
          />
        </Page>
        <Page ref={ref} number="2">
          <p></p>
        </Page>
        <Page ref={ref} number="3">
          Page 3
        </Page>
        <Page ref={ref} number="4">
          Page 4
        </Page>
      </HTMLFlipBook>
    </>
  );
};

export default Flip;
