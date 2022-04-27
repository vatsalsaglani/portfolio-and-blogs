import Link from "next/link";

export default function SocialMediaPlatform({ link, children }) {
  return (
    <div className="mr-2 md:mr-4">
      <Link href={link}>
        <a target={"_blank"}>{children}</a>
      </Link>
    </div>
  );
}
