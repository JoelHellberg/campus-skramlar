export default function Sponsors() {
  return (
    <div className="flex flex-col content-center justify-center text-center">
      <h1 className="text-white">
        Och ett jättestort tack till årets <br /> sponsorer!
      </h1>
      <div className="flex justify-center gap-32">
        <img src={"/sponsors/dummySponsor1.png"} alt="" className="w-64" />
        <img src={"/sponsors/dummySponsor2.png"} alt="" className="w-64" />
      </div>
      <h1 className="text-[#BECBB0]">Det hade inte varit möjligt utan er</h1>
    </div>
  );
}
