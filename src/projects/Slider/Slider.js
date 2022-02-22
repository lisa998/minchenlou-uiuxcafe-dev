import { useEffect, useMemo, useState } from "react";
import { Body, Page, SubTitle } from "./styled";
import { content } from "./content";
import { RightNav } from "./RightNav";

export function Slider() {
  const [page, setPage] = useState(0);
  const [touchTranslate, setTouchTranslate] = useState(0);
  const [touchStart, setTouchStart] = useState([0, 0]);
  const [transition, setTransition] = useState(null);
  const [moving, setMoving] = useState(false);
  const next = () => {
    setPage((page) => {
      if (page >= content.length - 1) {
        return page;
      }
      return page + 1;
    });
  };
  const prev = () => {
    setPage((page) => {
      if (page <= 0) {
        return page;
      }
      return page - 1;
    });
  };
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      next();
    }
    if (e.deltaY < 0) {
      prev();
    }
  };

  const handleTouchStart = (e) => {
    setTransition("0.1 linear");
    let t = e.touches[0];
    setTouchStart([t.clientX, t.clientY]);
  };
  let touchStartEnd = [0, 0];
  const handleTouchMove = (e) => {
    let t = e.touches[0];
    touchStartEnd = [t.clientX, t.clientY];
    let transform = (touchStartEnd[1] - touchStart[1]) / window.innerHeight;
    setTouchTranslate(transform);

    if (Math.abs(transform) > 0.2 && !moving) {
      setMoving(true);
      setTouchTranslate(0);
      setTransition(null);
      if (transform > 0) {
        setTouchTranslate(1);
      } else {
        setTouchTranslate(-1);
      }
      setTimeout(() => {
        setTouchTranslate(0);
        if (transform > 0) {
          prev();
        } else {
          next();
        }
      }, 0);
      setTimeout(() => {
        setMoving(false);
      }, 700);
    }
  };
  const handleTouchEnd = (e) => {
    setTouchTranslate(0);
    setTransition(null);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        color: "white",
      }}
    >
      <Body
        className="body"
        page={page}
        onWheel={handleScroll}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        touchtranslate={touchTranslate}
        transition={transition}
      >
        {content.map((ele, i) => (
          <Page bg={ele.bg} key={i}>
            <h1>{ele.title}</h1>
            {ele.subTitle.map((ele, i) => (
              <SubTitle key={i}>{ele}</SubTitle>
            ))}

            <div>{ele.content}</div>
          </Page>
        ))}
      </Body>
      <RightNav page={page} setPage={setPage} />
    </div>
  );
}
