import { createSupabaseServer } from "../../_lib/supabase/supabaseServer";
import AssociationRow from "./associationRow";

export default async function ForeningarDisplay() {
  const supabase = await createSupabaseServer();

  const { data, error } = await supabase.from("bossorPrivate").select();
  if (error) {
    console.log(error);
  }
  return (
    <>
      <div className="bg-gray-200/70 w-full flex py-3 rounded-xl">
        <h5 className="w-1/3 text-center">ID</h5>
        <h5 className="w-1/3 text-center">Nickname</h5>
        <h5 className="w-1/3 text-center">Password</h5>
      </div>
      <div className="w-full overflow-auto my-4">
        {error && <p>{"Could not fetch foreningar"}</p>}
        {data && (
          <>
            {data.map((forening: any, index: number) => (
              <AssociationRow
                key={index}
                isActive={forening.active}
                privateData={forening}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
