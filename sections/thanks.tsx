import { fetchAllIds } from "@/app/_lib/supabase/clientFunctions";
import { urlExists } from "@/app/_lib/utils";

export default async function Thanks() {
  const data = (await fetchAllIds("bossorGeneral")) as string[] | null;
  if (!data) {
    return <h2>Error fetching piggy bank data</h2>;
  }
  const urlList: string[] = [];
  for (const bossa of data) {
    const url = `https://xpdnuxdvwdgxdqwffgoy.supabase.co/storage/v1/object/public/loggor/${bossa}.png`;
    if (await urlExists(url)) {
      urlList.push(url);
    }
  }

  return (
    <div id="thanks" className="w-full py-24 flex justify-center">
      {/* Outline div 1 */}
      <div
        className="rounded-2xl sm:bg-[#DFCFA0]
      sm:mx-1 lg:mx-0 lg:w-5/6 sm:p-3"
      >
        {/* Outline div 2 */}
        <div
          className="w-full rounded-2xl border-[#7C745C] 
        border-b-2 border-t-2 sm:border-8 sm:p-3"
        >
          {/* Main Content */}
          <div
            className="flex flex-col w-full justify-center p-5 sm:p-10 text-center bg-[#EEDDC4] 
            sm:rounded-2xl"
          >
            <h1
              className="mb-10
            !text-4xl sm:!text-5xl md:!text-6xl"
            >
              Tack till alla föreningar som har hjälpt till och medverkat under
              året!
            </h1>
            {/* Positionering av loggor */}
            <div className="flex flex-wrap justify-center w-full">
              {urlList &&
                urlList.map((logoUrl, i) => (
                  <div
                    key={i}
                    className="flex justify-center aspect-square mx-auto my-8
                    w-[40%] xl:w-[26%]"
                  >
                    <img className="object-contain mx-auto" src={logoUrl} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
