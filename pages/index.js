import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

import Navigation from "../components/Navigation";
import PostCard from "../components/PostCard";
import SocialMediaPlatform from "../components/SocialMedia";

// icons

import { BsTwitter, BsLinkedin, BsMedium, BsGithub } from "react-icons/bs";
import Footer from "../components/Footer";

import fetcher from "../lib/fetcher";

export default function Home({ posts }) {
  // console.log("POSTS: ", posts);
  return (
    <div className="bg-darkbg min-h-screen">
      <div className="bg-darkbg mx-auto md:py-8 md:px-0 flex flex-col md:justify-start md:items-center">
        <Navigation />
      </div>
      <div className="text-white px-8 md:p-8 flex flex-col md:block items-start justify-start mx-auto w-full md:w-[70%]">
        <div className="h-screen md:h-fit md:block flex flex-col items-center justify-center">
          <div className="text-6xl md:text-8xl font-semibold bg-gradient-to-r bg-clip-text font-Work text-transparent from-rose-100 via-indigo-500 to-teal-100 animate-text">
            Data Scientist,
          </div>
          <div className="text-6xl md:text-8xl font-semibold bg-gradient-to-r bg-clip-text font-Work text-transparent from-rose-300 via-indigo-500 to-teal-100 animate-text">
            Deep Learning Engineer, &
          </div>
          <div className="text-6xl md:text-8xl font-semibold bg-gradient-to-r bg-clip-text font-Work text-transparent from-rose-600 via-indigo-500 to-teal-100 animate-text">
            Software Engineer
          </div>
        </div>
        <div className="mt-12">
          <NameAndInfo />
        </div>
        <div className="mt-12">
          <FeaturedPosts posts={posts} />
        </div>
        <div className="mt-12">
          <SkillSets />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const NameAndInfo = () => (
  <div className="mt-4 md:mt-6 flex flex-col justify-center items-center md:justify-start md:items-start">
    <div className="text-3xl md:text-4xl text-sky-100 font-Work font-semibold">
      Vatsal Saglani
    </div>
    <div className="text-lg md:text-[22px] text-gray-400 font-Work">
      Data Scientist
    </div>
    <div className="flex flex-row my-2">
      <SocialMediaPlatform link={"https://github.com/vatsalsaglani"}>
        <BsGithub color="white" size={22} />
      </SocialMediaPlatform>
      <SocialMediaPlatform link={"https://twitter.com/saglanivatsal"}>
        <BsTwitter color="white" size={22} />
      </SocialMediaPlatform>
      <SocialMediaPlatform link={"https://www.linkedin.com/in/vatsalsaglani/"}>
        <BsLinkedin color="white" size={22} />
      </SocialMediaPlatform>
      <SocialMediaPlatform link={"https://thevatsalsaglani.medium.com/"}>
        <BsMedium color="white" size={22} />
      </SocialMediaPlatform>
    </div>
    <AboutMe />
  </div>
);

export const AboutMe = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
    <div className="text-base md:text-lg mt-3 text-gray-50 font-Work px-2 md:px-0">
      Leveraging the advances in the field of Deep Learning and applying them to
      solve real-world problems.
    </div>
    <div className="text-base md:text-lg mt-3 text-gray-50 font-Work px-2 md:px-0">
      Currently, working with Attention Transformers for Text & Token
      Classification, Question Answering, Text Generation, Recommendation
      Systems, Image Captioning, Classification and Segmentation.
    </div>
    <div className="text-base md:text-lg mt-3 text-gray-50 font-Work px-2 md:px-0">
      Also into Full-Stack web & mobile development using React. My go-to React
      framework is NextJS. PostgresSQL, MySQL, and MongoDB are my preferred
      database.
    </div>
    <div className="text-base md:text-lg mt-3 text-gray-50 font-Work px-2 md:px-0">
      Being a Pythonista, I develop microservices using FastAPI or Flask.
      Serverless Lambda and Fargate are my preferred deployment strategies. I
      prefer Lambda over Fargate because of the generous free-tier credits.
    </div>
  </div>
);

export const FeaturedPosts = ({ posts }) => {
  return (
    <div className="mt-12 space-y-4 md:space-y-6 ">
      <div className="mb-10 text-3xl text-center md:text-left md:text-4xl text-sky-100 font-Work font-semibold">
        Featured Posts
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export const SkillSets = () => {
  return (
    <div className="mt-12 space-y-4 md:space-y-6 mb-8 ">
      <div className="mb-10 text-3xl text-center md:text-left md:text-4xl text-sky-100 font-Work font-semibold">
        My Expertise
      </div>
      <div className="block md:grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="mt-4 md:mt-0">
          <div className="text-2xl mb-2 text-sky-50 font-Work font-semibold">
            Data Science & Research
          </div>
          <div className="space-y-2">
            <GradientBar
              skill={"PyTorch"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-full"}
            />
            <GradientBar
              skill={"Numpy"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-4/5"}
            />
            <GradientBar
              skill={"HuggingFace"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-4/5"}
            />
            <GradientBar
              skill={"Pandas"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-full"}
            />
            <GradientBar
              skill={"Scikit-Learn"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-3/4"}
            />
            <GradientBar
              skill={"OpenCV"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-3/4"}
            />
            <GradientBar
              skill={"JAX"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-2/4"}
            />
            <GradientBar
              skill={"Computer Vision"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-11/12"}
            />
            <GradientBar
              skill={"NLP"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-11/12"}
            />
            <GradientBar
              skill={"Recommendation System"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-8/12"}
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="text-2xl mb-2 text-sky-50 font-Work font-semibold">
            Backend & Microservices
          </div>
          <div className="space-y-2">
            <GradientBar
              skill={"FastAPI"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-full"}
            />
            <GradientBar
              skill={"Flask"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-full"}
            />
            <GradientBar
              skill={"MySQL"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-11/12"}
            />
            <GradientBar
              skill={"PostgresSQL"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-10/12"}
            />
            <GradientBar
              skill={"NodeJS"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-4/6"}
            />
            <GradientBar
              skill={"MongoDB"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-10/12"}
            />
            <GradientBar
              skill={"Prisma"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-9/12"}
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="text-2xl mb-2 text-sky-50 font-Work font-semibold">
            Cloud & Site Reliability
          </div>
          <div className="space-y-2">
            <GradientBar
              skill={"EC2"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-full"}
            />
            <GradientBar
              skill={"AWS Lambda"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-11/12"}
            />
            <GradientBar
              skill={"AWS Fargate"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-9/12"}
            />
            <GradientBar
              skill={"Docker"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-11/12"}
            />
            <GradientBar
              skill={"Azure Functions"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-5/6"}
            />
            <GradientBar
              skill={"CI/CD"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-full"}
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="text-2xl mb-2 text-sky-50 font-Work font-semibold">
            Programming Languages & Frameworks
          </div>
          <div className="space-y-2">
            <GradientBar
              skill={"Python"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-full"}
            />
            <GradientBar
              skill={"Javascript"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-11/12"}
            />
            <GradientBar
              skill={"ReactJS"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-11/12"}
            />
            <GradientBar
              skill={"NextJS"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-11/12"}
            />
            <GradientBar
              skill={"React Native"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-4/6"}
            />
            <GradientBar
              skill={"Rust"}
              gradient={
                "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              }
              score={"w-1/4"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const GradientBar = ({ skill, gradient, score }) => (
  <div className="flex flex-col justify-start items-start">
    <div className="text-sky-100 text-lg font-Work w-fit">{skill}</div>
    <div className={`h-2 rounded-full shadow-md ${gradient} ${score}`}></div>
  </div>
);

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
