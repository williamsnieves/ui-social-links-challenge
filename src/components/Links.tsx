import { Link } from "./Link";

const links = [
  { id: 1, title: "GitHub" },
  { id: 2, title: "Frontend Mentor" },
  { id: 3, title: "LinkedIn" },
  { id: 4, title: "Twitter" },
  { id: 5, title: "Instagram" },
];

export function Links() {
  return (
    <div className="flex flex-col gap-4 text-sm font-bold">
      {links.map((link) => (
        <Link key={link.id} title={link.title} />
      ))}
    </div>
  );
}
