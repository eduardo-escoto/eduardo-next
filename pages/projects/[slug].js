import { getSortedProjectsData, getProjectByID } from "../../lib/projects";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage,
  // h1: Heading.H1,
  // h2: Heading.H2,
  // p: Text,
  // code: Pre,
  // inlineCode: Code
};

function Project({ source, frontMatter }) {
  return (
    <>
      <h1>{frontMatter.title}</h1>

      <a
        href={frontMatter.githubUri}
        className="link-secondary text-decoration-none"
        target="_blank"
        rel="noreferrer"
      >
        Project link here!
      </a>

      <MDXRemote {...source} components={components} />
    </>
  );
}

export async function getStaticPaths() {
  const projects = getSortedProjectsData();

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { content, data } = getProjectByID(params.slug);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export default Project;
