import { createSupabaseServer } from "../_lib/supabase/supabaseServer";

export default async function ForeningarDisplay() {
  const supabase = await createSupabaseServer();

  const { data, error } = await supabase.from("bossorPrivate").select();
  if (error) {
    console.log(error);
  }
  return (
    <div>
      {error && <p>{"Could not fetch foreningar"}</p>}
      {data && (
        <>
          {data.map((forening: any, index: number) => (
            <ForeningsRad
              isActive={forening.active}
              name={forening.forenings_namn}
              password={forening.password}
              key={index}
            />
          ))}
        </>
      )}
    </div>
  );
}

type ForeningsProps = {
  isActive: boolean;
  name: string;
  password: string;
};
function ForeningsRad(props: ForeningsProps) {
  return (
    <div
      className={"flex " + (props.isActive ? "bg-green-300" : "bg-yellow-200")}
    >
      <div className="outline-2 p-2 rounded-l">
        <p>
          <span className="font-bold">Förening: </span> {props.name}
        </p>
      </div>
      <div className="outline-2 p-2 rounded-r">
        <p>
          <span className="font-bold">Lösenord: </span>
          {props.password}
        </p>
      </div>
    </div>
  );
}
