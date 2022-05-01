import Head from "next/head";
import { allOtherPages } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "../components/MDXComponents";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export async function getStaticProps() {
  const contact = allOtherPages.find((page) => page.slug === "contact");

  return { props: { contact } };
}

export default function Contact({ contact }) {
  //   console.log("CONTACT: ", contact);
  const MDXContent = useMDXComponent(contact.body.code);

  return (
    <div>
      <div className="bg-darkbg min-h-screen space-y-4">
        <Head>
          <title>Contact | Vatsal Saglani</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <div className="mx-auto md:pt-8 md:px-0 flex flex-col md:justify-start md:items-center">
          <Navigation />
        </div>
        <div className="p-16 md:p-12 flex flex-col md:block items-center justify-center mx-auto w-full md:w-[70%]">
          <div className="min-h-full min-w-full px-8 py-4 bg-darkbg flex flex-col justify-center items-center">
            <div className="prose prose-invert font-Work">
              <MDXContent components={MDXComponents} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
