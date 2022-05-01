import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";

export const Leetcode = defineDocumentType(() => ({
  name: "Leetcode",
  filePathPattern: "leetcode/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of Leetcode question",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    question: {
      type: "string",
      description: "Leetcode question",
      required: true,
    },
    questionLink: {
      type: "string",
      description: "Link to Leetcode question",
      required: true,
    },
    difficulty: {
      type: "string",
      description: "Difficulty level of the question",
      required: true,
    },
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const OtherPage = defineDocumentType(() => ({
  name: "OtherPages",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of page",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    desc: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    thumbnail: {
      type: "string",
      description: "Link to Thumbnail Image",
      required: false,
    },
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the project",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `/${project._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [
    Post,
    Leetcode,
    OtherPage,
    // Project
  ],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
