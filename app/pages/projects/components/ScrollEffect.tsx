import { useEffect, useRef } from "react";
import camp from "public/camp.webp";
import camp2 from "public/camp2.jpg";
import camp3 from "public/camp3.jpg";
import camp4 from "public/camp4.jpg";
import camp5 from "public/camp5.jpg";
import camp6 from "public/camp6.jpg";
export const ScrollEffect = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const pillRef = useRef(null);
  const canvasRef = useRef(null);

  const parent = parentRef?.current;
  const kid = childRef?.current;
  const pill = pillRef?.current;
  const canvas = canvasRef?.current;

  const drawImageOnCanvas = (imageSrc) => {
    canvas.src = imageSrc;
  };

  useEffect(() => {
    const addScroll = () => {
      if (parent && childRef?.current && pill) {
        var parentTop = parent?.getBoundingClientRect()?.top;
        var currentChildTop = childRef?.current?.getBoundingClientRect()?.top;
        var childParentDistance = Math.abs(parentTop - currentChildTop);

        const kidHeight = kid.getBoundingClientRect().height;

        const space = 2000 - kidHeight;
        const radius = (childParentDistance / space) * 100;
        const realRadius = 100 - radius;

        const minRadius = realRadius <= 0 ? 0 : realRadius;

        const height = radius / 2 + 50 > 100 ? 100 : radius / 2 + 50;
        const width = radius / 2 + 60 > 100 ? 100 : radius / 2 + 60;

        pill.style.borderRadius = minRadius + "vh";
        pill.style.height = height + "%";
        pill.style.width = width + "%";

        if (realRadius > 84) {
          drawImageOnCanvas(camp);
        } else if (realRadius > 68) {
          drawImageOnCanvas(camp2);
        } else if (realRadius > 52) {
          drawImageOnCanvas(camp3);
        } else if (realRadius > 36) {
          drawImageOnCanvas(camp4);
        } else if (realRadius > 20) {
          drawImageOnCanvas(camp5);
        } else {
          drawImageOnCanvas(camp6);
        }
      }
    };

    document.addEventListener("scroll", () => addScroll());

    return () => {
      document.removeEventListener("scroll", addScroll);
    };
  }, [parent, kid, pill, canvas]);

  return (
    <>
      <div ref={parentRef} className="h-[2500px] w-full">
        <div
          ref={childRef}
          className="sticky top-0 w-full h-screen flex items-center justify-center"
        >
          <div
            className="h-[50%] w-[60%] rounded-sm bg-white text-black overflow-hidden"
            ref={pillRef}
          >
            <img
              ref={canvasRef}
              className="h-full w-full object-cover object-center"
            />
            {/* <canvas
              ref={canvasRef}
              className="h-full w-full object-cover object-center"
            ></canvas> */}
          </div>
        </div>
      </div>
      <div className="h-[1000px]">why</div>
    </>
  );
};
