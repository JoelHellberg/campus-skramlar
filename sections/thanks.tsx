import { fetchAllIds } from "@/app/_lib/supabase/clientFunctions";
import { urlExists } from "@/app/_lib/utils";

export default async function Thanks() {
  const data = (await fetchAllIds("bossorGeneral")) as string[] | null;
  if (!data) {
    return <h2>Error fetching piggy bank data</h2>;
  }
  const urlList: string[] = [];
  for (const bossa of data) {
    console.log("bossa data: ", bossa);
    const url = `https://xpdnuxdvwdgxdqwffgoy.supabase.co/storage/v1/object/public/loggor/${bossa}.png`;
    if (await urlExists(url)) {
      urlList.push(url);
    }
  }

  return (
    <div id="thanks" className="w-full py-24 flex justify-center">
      {/* Outline div 1 */}
      <div className="w-5/6 p-3 rounded-2xl bg-[#DFCFA0]">
        {/* Outline div 2 */}
        <div className="w-full border-8 rounded-2xl border-[#7C745C] p-3">
          {/* Main Content */}
          <div className="flex flex-col w-full justify-center p-10 rounded-2xl bg-[#EEDDC4] text-center">
            <h1 className="!text-6xl">
              Tack till alla föreningar som har hjälpt till och medverkat under
              året!
            </h1>
            {/* Positionering av loggor */}
            <div className="flex flex-wrap justify-center gap-12 w-full p-15">
              {urlList &&
                urlList.map((logoUrl, i) => (
                  <div key={i} className="flex justify-center w-[30%] p-6">
                    <img src={logoUrl} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
