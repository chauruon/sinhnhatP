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
            <h1 className="title">Chúc mừng sinh nhật</h1>
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
                  Tin nhắn này không có chất béo, không cholesterol và không
                  chứa chất gây nghiện, nó chỉ có rất nhiều đường mà thôi. Nhưng
                  dù nhiều đường thế nào đi chăng nữa nó cũng không bao giờ có
                  thể ngọt ngào như em - người đang đọc nó. Chúc em sinh nhật
                  hạnh phúc và tràn đầy tiếng cười nha!
                </li>
                <li>
                  Sáng nay tỉnh giấc… em chợt nhớ nay là sinh nhật anh. Lại thêm
                  một chiếc lá vàng rơi nữa rồi. Ai bảo thêm tuổi là già nhỉ?
                  Ngốc quá! Thêm tuổi là thêm nhiều yêu thương. Chúc anh sinh
                  nhật thật vui. Yêu anh!
                </li>
                <li>
                  Vào ngày này xx năm trước 1 con quỷ đã ra đời, và chúa phái
                  thiên sứ là em xuống để giúp cho ác quỷ ấy biết thế nào là
                  tình yêu. Đó là lý do em ở bên anh hôm nay.
                </li>
                <li>
                  Sáng nay tỉnh giấc… em chợt nhớ nay là sinh nhật anh. Lại thêm
                  một chiếc lá vàng rơi nữa rồi. Ai bảo thêm tuổi là già nhỉ?
                  Ngốc quá! Thêm tuổi là thêm nhiều yêu thương. Chúc anh sinh
                  nhật thật vui. Yêu anh!
                </li>
                <li>
                  Chúc em tuổi mới ăn khỏe, ngủ khỏe và sức khỏe thì cực khỏe và
                  yêu anh cũng cực cực khỏe. Ước gì anh được hôn em một miếng
                  bây giờ baby à!
                </li>
                <li>Giữ kín tuổi thật của bạn nhé, bí mật quốc gia đấy!</li>
              </ul>
            </div>
          </div>
        </Page>
      </HTMLFlipBook>
    </>
  );
};

export default Flip;
