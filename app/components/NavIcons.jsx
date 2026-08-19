export default function NavIcons({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary cursor-pointer w-[7em]"
    >
      {icon}
    </a>
  );
}
