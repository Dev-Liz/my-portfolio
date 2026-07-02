import Link from "next/link";

export default function NavItem({ item, link }) {
  return (
    <>
      <Link
        href={link}
        className="font-inter text-body-18 text-white-100 hover:text-primary"
      >
        {item}
      </Link>
    </>
  );
}
