"use client";
import { Modal } from "@/components/modal";
import { useRouter, useSearchParams } from "next/navigation";
import Update from "./update";

export default function Bossa() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bossa = searchParams.get("bossa");
  const color = searchParams.get("hex");
  console.log("color is: " + color);
  const onCloseFunc = () => {
    router.replace("/", { scroll: false });
  };
  return (
    <>
      {bossa && color && (
        <Modal onClose={onCloseFunc}>
          <div className="relative w-[70vw] h-[80vh] bg-[#FFF0D9] rounded-3xl shadow-2xl">
            {/* Backdrop */}
            <div
              className={
                "absolute w-full h-full rounded-3xl top-4 right-4 -z-10 shadow-2xl"
              }
              style={{ backgroundColor: color }}
            />

            <h1
              className="ml-10 -mt-15 text-white"
              style={{
                textShadow: "-5px 5px 0 " + color,
              }}
            >
              Demos Bössa (nr: {bossa})
            </h1>
            {/* Main Content */}
            <div className="flex p-10 h-full w-full -mt-15">
              {/* Vänstra sidan */}
              <div className="h-full w-2/3">
                <LeftSide mainColor={color} />
              </div>
              <div
                className="h-5/6 m-auto w-1 mx-10"
                style={{ backgroundColor: color }}
              />
              {/* Högra sidan */}
              <div className="flex flex-col h-full w-1/3">
                <RightSide onClose={onCloseFunc} />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

type LeftSideProps = {
  mainColor: string;
};

function LeftSide({ mainColor }: LeftSideProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Ovanför */}
      <div className="flex">
        <img src="\vectorGraphics\heart.svg" className="w-40" />
        <div className="p-5">
          <h1 className="!text-5xl !font-bold">
            Demo har samlat in &nbsp;11&nbsp;000&nbsp;kr
          </h1>
          <p>
            <span className="underline">Swisha 50 kr till 0704433668</span> för
            att vara med och tävla i Demos bössa!
          </p>
        </div>
      </div>
      <div className="w-full h-1 my-6" style={{ backgroundColor: mainColor }} />
      {/* Nedanför */}
      <div className="flex flex-1 max-h-full overflow-y-auto">
        <p>
          Här kan föreningar beskriva sin bössa och vad man är med och tävlar
          om. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          pulvinar ex dui, accumsan blandit ligula rhoncus nec. In sollicitudin
          condimentum risus quis consequat. Nunc vehicula, dolor et dapibus
          venenatis, quam est ultrices est, a tristique neque nibh nec est. Cras
          neque ex, dapibus eget nibh at, dignissim pretium est. Sed vitae
          dignissim tortor. Ut facilisis sem quis orci tincidunt, ut pharetra
          arcu euismod. Nulla facilisi. Praesent dapibus dapibus massa ultrices
          convallis. Sed ante justo, congue Här kan föreningar beskriva sin
          bössa och vad man är med och tävlar om. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc pulvinar ex dui, accumsan blandit
          ligula rhoncus nec. In sollicitudin condimentum risus quis consequat.
          Nunc vehicula, dolor et dapibus venenatis, quam est ultrices est, a
          tristique neque nibh nec est. Cras neque ex, dapibus eget nibh at,
          dignissim pretium est. Sed vitae dignissim tortor. Ut facilisis sem
          quis orci tincidunt, ut pharetra arcu euismod. Nulla facilisi.
          Praesent dapibus dapibus massa ultrices convallis. Sed ante justo,
          congue Här kan föreningar beskriva sin bössa och vad man är med och
          tävlar om. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc pulvinar ex dui, accumsan blandit ligula rhoncus nec. In
          sollicitudin condimentum risus quis consequat. Nunc vehicula, dolor et
          dapibus venenatis, quam est ultrices est, a tristique neque nibh nec
          est. Cras neque ex, dapibus eget nibh at, dignissim pretium est. Sed
          vitae dignissim tortor. Ut facilisis sem quis orci tincidunt, ut
          pharetra arcu euismod. Nulla facilisi. Praesent dapibus dapibus massa
          ultrices convallis. Sed ante justo, congue Här kan föreningar beskriva
          sin bössa och vad man är med och tävlar om. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nunc pulvinar ex dui, accumsan
          blandit ligula rhoncus nec. In sollicitudin condimentum risus quis
          consequat. Nunc vehicula, dolor et dapibus venenatis, quam est
          ultrices est, a tristique neque nibh nec est. Cras neque ex, dapibus
          eget nibh at, dignissim pretium est. Sed vitae dignissim tortor. Ut
          facilisis sem quis orci tincidunt, ut pharetra arcu euismod. Nulla
          facilisi. Praesent dapibus dapibus massa ultrices convallis. Sed ante
          justo, congue
        </p>
      </div>
    </div>
  );
}

type RightSideProps = {
  onClose: () => void;
};

function RightSide({ onClose }: RightSideProps) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Top bar with close button */}
      <div className="flex flex-row-reverse w-full pb-4">
        <h1
          className="!my-0 !py-0 !text-7xl text-[#D02424] leading-none px-4 cursor-pointer
          transform transition-transform duration-300 hover:scale-120"
          onClick={onClose}
        >
          x
        </h1>
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center">
        <Update />
        <Update />
        <Update />
        <Update />
        <Update />
        <Update />
        <Update />
      </div>
    </div>
  );
}
