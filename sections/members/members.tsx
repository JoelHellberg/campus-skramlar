const members = [
  { name: "Lovisa Granlund", post: "Projektledare", mail: "blabla" },
  { name: "Joel Hellberg", post: "Vice Projektledare & Webb", mail: "blabla" },
  {
    name: "Ebba Norén Arvidsson",
    post: "Kassör & Sekreterare",
    mail: "blabla",
  },

  { name: "Johanna Dahl", post: "Företagskontakt", mail: "blabla" },
  { name: "Ludwig Boge", post: "Föreningskontakt & Fotograf", mail: "blabla" },
  { name: "Elsa Rabe", post: "Föreningskontakt", mail: "blabla" },

  { name: "Mirna Abboud", post: "Eventansvarig", mail: "blabla" },
  { name: "Hilda Åhberg Rosell", post: "Eventansvarig", mail: "blabla" },
  { name: "Cornelia Johnson", post: "Marknadsföringsansvarig", mail: "blabla" },

  { name: "Helena Ejsing", post: "Formgivare", mail: "blabla" },
  { name: "Anna Lyrander", post: "Formgivare", mail: "blabla" },
  { name: "Stina Bard", post: "Formgivare", mail: "blabla" },
];
import Member from "./member";

export default function Members() {
  return (
    <div className="flex flex-wrap justify-center gap-12 w-full py-15">
      {members.map((member, i) => (
        <div key={i} className="w-[30%] py-2">
          <Member name={member.name} post={member.post} mail={member.mail} position={i}/>
        </div>
      ))}
    </div>
  );
}
