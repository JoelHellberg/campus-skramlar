const members = [
  {
    name: "Lovisa Granlund",
    post: "Projektledare",
    mail: "projektledare@campusskramlar.se",
  },
  {
    name: "Joel Hellberg",
    post: "Vice Projektledare & Webb",
    mail: "",
  },
  {
    name: "Ebba Arvidsson Norén",
    post: "Kassör & Sekreterare",
    mail: "kassor@campusskramlar.se",
  },

  {
    name: "Johanna Dahl",
    post: "Företagskontakt",
    mail: "foretag@campusskramlar.se",
  },
  {
    name: "Ludwig Boge",
    post: "Föreningskontakt & Fotograf",
    mail: "forening@campusskramlar.se",
  },
  {
    name: "Elsa Rabe",
    post: "Föreningskontakt",
    mail: "forening@campusskramlar.se",
  },

  {
    name: "Mirna Abboud",
    post: "Eventansvarig",
    mail: "event@campusskramlar.se",
  },
  {
    name: "Hilda Åberg Rosell",
    post: "Eventansvarig",
    mail: "event@campusskramlar.se",
  },
  {
    name: "Cornelia Johnson",
    post: "Marknadsföringsansvarig",
    mail: "marknadsforing@campusskramlar.se",
  },

  { name: "Helena Ejsing", post: "Formgivare", mail: "" },
  { name: "Anna Lyrander", post: "Formgivare", mail: "" },
  { name: "Stina Bard", post: "Formgivare", mail: "" },
];
import Member from "./member";

export default function Members() {
  return (
    <>
      {/* Positionering av allas "profiler" */}
      <div
        id="members"
        className="flex flex-wrap justify-center gap-y-12 w-full py-15"
      >
        {members.map((member, i) => (
          <div key={i} className="w-[95%] md:w-[45%] xl:w-[30%] py-2">
            <Member
              name={member.name}
              post={member.post}
              mail={member.mail}
              position={i}
            />
          </div>
        ))}
      </div>
    </>
  );
}
