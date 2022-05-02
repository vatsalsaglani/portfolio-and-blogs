import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const CodeBlock = (props) => {
  // console.log("CODE PROPS: ", props);

  return (
    <div>
      <pre {...props} />
    </div>
  );
};

export const CustomLink = (props) => {
  const href = props.href;
  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
  if (isInternal) {
    return (
      <Link href={href}>
        <a className="text-sky-500 hover:text-sky-800 font-Work" {...props}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      className="text-sky-500 hover:text-sky-800 font-Work"
      target={"_blank"}
      rel={"noopener noreferrer"}
      {...props}
    />
  );
};

export const RoundedImage = (props) => {
  return (
    // <div className="items-center">
    <Image alt={props.alt} className={"rounded-lg shadow-lg"} {...props} />
    // </div>
  );
};

export const InlineCode = (props) => {
  return (
    <span
      {...props}
      className={`p-1 bg-yellow-200/70 rounded-md text-indigo-500 font-Work`}
    />
  );
};

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  pre: CodeBlock,
  InlineCode,
};

export default MDXComponents;
