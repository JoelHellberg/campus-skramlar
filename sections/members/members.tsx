const members = [
  {
    name: "Lovisa Granlund",
    post: "Projektledare",
    mail: "skramlarmail@gmail.com",
  },
  {
    name: "Joel Hellberg",
    post: "Vice Projektledare & Webb",
    mail: "skramlarmail@gmail.com",
  },
  {
    name: "Ebba Norén Arvidsson",
    post: "Kassör & Sekreterare",
    mail: "skramlarmail@gmail.com",
  },

  {
    name: "Johanna Dahl",
    post: "Företagskontakt",
    mail: "skramlarmail@gmail.com",
  },
  {
    name: "Ludwig Boge",
    post: "Föreningskontakt & Fotograf",
    mail: "skramlarmail@gmail.com",
  },
  {
    name: "Elsa Rabe",
    post: "Föreningskontakt",
    mail: "skramlarmail@gmail.com",
  },

  {
    name: "Mirna Abboud",
    post: "Eventansvarig",
    mail: "skramlarmail@gmail.com",
  },
  {
    name: "Hilda Åberg Rosell",
    post: "Eventansvarig",
    mail: "skramlarmail@gmail.com",
  },
  {
    name: "Cornelia Johnson",
    post: "Marknadsföringsansvarig",
    mail: "skramlarmail@gmail.com",
  },

  { name: "Helena Ejsing", post: "Formgivare", mail: "skramlarmail@gmail.com" },
  { name: "Anna Lyrander", post: "Formgivare", mail: "skramlarmail@gmail.com" },
  { name: "Stina Bard", post: "Formgivare", mail: "skramlarmail@gmail.com" },
];
import Member from "./member";

export default function Members() {
  return (
    <div id="members" className="flex flex-wrap justify-center gap-12 w-full py-15">
      {members.map((member, i) => (
        <div key={i} className="w-[30%] py-2">
          <Member
            name={member.name}
            post={member.post}
            mail={member.mail}
            position={i}
          />
        </div>
      ))}
    </div>
  );
}
