import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-900 w-full">
      <div className="max-w-2xl mx-auto py-16">
        <div className="flex justify-center items-center md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-gap-2 md:grid-gap-2 ">
            <BuiltUsingColumn />
            <SocialMediaColumn />
            <SiteMapColumn />
          </div>
        </div>
      </div>
    </div>
  );
}

export const SocialMediaColumn = () => {
  return (
    <div className="block mt-4 md:mt-0">
      <div className="text-base text-gray-400 space-y-2 md:text-lg ">
        <p className="font-Work">I am available on</p>
        <div className="space-y-1">
          <div className="text-sm text-gray-400 md:text-base">
            <FooterLink link={"https://www.linkedin.com/in/vatsalsaglani/"}>
              LinkedIn
            </FooterLink>
          </div>
          <div className="text-sm text-gray-400 md:text-base">
            <FooterLink link={"https://twitter.com/saglanivatsal"}>
              Twitter
            </FooterLink>
          </div>
          <div className="text-sm text-gray-400 md:text-base">
            <FooterLink link={"https://github.com/vatsalsaglani"}>
              Github
            </FooterLink>
          </div>
          <div className="text-sm text-gray-400 md:text-base">
            <FooterLink link={"https://thevatsalsaglani.medium.com/"}>
              Medium
            </FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BuiltUsingColumn = () => {
  return (
    <div className="block mt-4 md:mt-0">
      <div className="text-base md:text-lg text-gray-400 space-y-2">
        <p className="font-Work">Built with ❤️ using</p>
        <div className="space-y-1">
          <div className="text-sm md:text-base text-gray-400">
            <FooterLink link={"https://nextjs.org/"}>Next</FooterLink>
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <FooterLink link={"https://tailwindcss.com/"}>
              tailwindcss
            </FooterLink>
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <FooterLink link={"https://www.contentlayer.dev/"}>
              Contentlayer
            </FooterLink>
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <FooterLink link={"https://www.prisma.io/"}>Prisma</FooterLink>
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <FooterLink link={"https://swr.vercel.app/"}>SWR</FooterLink>
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <FooterLink link={"https://planetscale.com/"}>
              PlanetScale
            </FooterLink>
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <FooterLink link={"https://heroicons.com/"}>heroicons</FooterLink>
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <FooterLink link={"https://react-icons.github.io/react-icons/"}>
              react-icons
            </FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SiteMapColumn = () => {
  return (
    <div className="block mt-4 md:mt-0">
      <div className="text-base text-gray-400 space-y-2 md:text-lg ">
        <p className="font-Work">Sitemap</p>
        <div className="space-y-1">
          <div className="text-sm text-gray-400 md:text-base">
            <FooterLink link={"/"}>Blog</FooterLink>
          </div>
          <div className="text-sm text-gray-400 md:text-base">
            <FooterLink link={"/about"}>About</FooterLink>
          </div>
          <div className="text-sm text-gray-400 md:text-base">
            <FooterLink link={"/projects"}>Projects</FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterLink = ({ link, children }) => (
  <div>
    <Link href={link}>
      <a target={"_blank"} className="font-Work">
        {children}
      </a>
    </Link>
  </div>
);
