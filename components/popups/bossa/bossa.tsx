"use client";
import { Modal } from "@/components/modal";
import { useRouter, useSearchParams } from "next/navigation";
import Update from "./update";

export default function Bossa() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bossa = searchParams.get("bossa");
  const onCloseFunc = () => {
    router.replace("/", { scroll: false });
  };
  return (
    <>
      {bossa && (
        <Modal onClose={onCloseFunc}>
          <div className="relative w-[70vw] h-[80vh] bg-pink-400 rounded-3xl">
            {/* Backdrop */}
            <div className="absolute w-full h-full bg-purple-400 rounded-3xl top-4 right-4 -z-10" />

            <h1 className="-mt-15">Demos Bössa (nr: {bossa})</h1>
            {/* Main Content */}
            <div className="flex p-10 h-full w-full -mt-15">
              {/* Vänstra sidan */}
              <div className="h-full w-2/3 bg-yellow-400">
                <LeftSide />
              </div>
              <div className="h-full w-2 bg-black mx-2" />
              {/* Högra sidan */}
              <div className="flex flex-col h-full w-1/3 bg-blue-400">
                <RightSide onClose={onCloseFunc} />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

function LeftSide() {
  return (
    <div className="flex flex-col h-full">
      {/* Ovanför */}
      <div className="flex">
        <img src="\vectorGraphics\heart.svg" className="w-40 bg-green-400" />
        <div>
          <h1>
            Demo har samlat in <br /> 11 000 kr
          </h1>
          <p>
            <span className="underline">Swisha 50 kr till 0704433668</span> för
            att vara med och tävla i Demos bössa!
          </p>
        </div>
      </div>
      <div className="w-full h-2 bg-black my-2" />
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
      <div className="flex flex-row-reverse w-full bg-orange-400">
        <h1
          className="bg-red-400 !my-0 !py-0 !text-6xl leading-none px-4 cursor-pointer"
          onClick={onClose}
        >
          x
        </h1>
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center bg-blue-200">
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
