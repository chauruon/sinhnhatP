import React, { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./flip.css";
import hinh1 from "../assets/images/1.jpg";
import hinh2 from "../assets/images/2.jpg";
import hinh3 from "../assets/images/3.jpg";
import hinh4 from "../assets/images/4.jpg";

import quy1 from "../assets/images/quy1.jpg";
import quy2 from "../assets/images/quy2.jpg";
import quy3 from "../assets/images/quy3.jpg";

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
        <div
          className="page-content"
          style={{
            backgroundColor: "#194d33",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.children}
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
        <PageCover>
          <div
            style={
              {
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          >
            <h1 className="title">Ch??c m???ng sinh nh???t</h1>
            <img
              alt=""
              className="imgBookCover"
              style={{ borderRadius: 30 }}
              src={hinh4}
              width="90%"
            />
          </div>
        </PageCover>
        <Page ref={ref} number="1">
          <div style={{ flexDirection: "column" }}>
            <div
              style={{
                backgroundColor: "#194D33",
                display: "block",
                position: "fixed",
                top: 0,
              }}
            >
              <img
                alt=""
                className=" iamgeBelow"
                style={{
                  left: 0,
                  position: "fixed",
                  borderRadius: 30,
                  margin: 40,
                }}
                src={hinh1}
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
                src={hinh3}
                height={280}
                width={280}
              />
            </div>
            <div
              className="decsPage1"
              style={{
                // backgroundColor: "#db3e00",
                display: "block",
              }}
            >
              <ul>
                <li>
                  Tin nh???n n??y kh??ng c?? ch???t b??o, kh??ng cholesterol v?? kh??ng
                  ch???a ch???t g??y nghi???n, n?? ch??? c?? r???t nhi???u ???????ng m?? th??i. Nh??ng
                  d?? nhi???u ???????ng th??? n??o ??i ch??ng n???a n?? c??ng kh??ng bao gi??? c??
                  th??? ng???t ng??o nh?? em - ng?????i ??ang ?????c n??. Ch??c em sinh nh???t
                  h???nh ph??c v?? tr??n ?????y ti???ng c?????i nha!
                </li>
                <li>
                  S??ng nay t???nh gi???c??? em ch???t nh??? nay l?? sinh nh???t anh. L???i th??m
                  m???t chi???c l?? v??ng r??i n???a r???i. Ai b???o th??m tu???i l?? gi?? nh????
                  Ng???c qu??! Th??m tu???i l?? th??m nhi???u y??u th????ng. Ch??c anh sinh
                  nh???t th???t vui. Y??u anh!
                </li>
                <li>
                  V??o ng??y n??y xx n??m tr?????c 1 con qu??? ???? ra ?????i, v?? ch??a ph??i
                  thi??n s??? l?? em xu???ng ????? gi??p cho ??c qu??? ???y bi???t th??? n??o l??
                  t??nh y??u. ???? l?? l?? do em ??? b??n anh h??m nay.
                </li>
                <li>
                  S??ng nay t???nh gi???c??? em ch???t nh??? nay l?? sinh nh???t anh. L???i th??m
                  m???t chi???c l?? v??ng r??i n???a r???i. Ai b???o th??m tu???i l?? gi?? nh????
                  Ng???c qu??! Th??m tu???i l?? th??m nhi???u y??u th????ng. Ch??c anh sinh
                  nh???t th???t vui. Y??u anh!
                </li>
                <li>
                  Ch??c em tu???i m???i ??n kh???e, ng??? kh???e v?? s???c kh???e th?? c???c kh???e v??
                  y??u anh c??ng c???c c???c kh???e. ?????c g?? anh ???????c h??n em m???t mi???ng
                  b??y gi??? baby ??!
                </li>
                <li>Gi??? k??n tu???i th???t c???a b???n nh??, b?? m???t qu???c gia ?????y!</li>
              </ul>
            </div>
          </div>
        </Page>
      </HTMLFlipBook>
    </>
  );
};

export default Flip;
