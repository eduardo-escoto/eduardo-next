// import { getSortedProjectsData, getProjectByID } from "../../lib/projects";
// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote";
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import Image from "next/image";
import { getAllNotebooks, getNotebookBySlug } from "../../lib/notebooks";
import NotebookRender from "@rafaelquintanilha/notebook-render";

function Notebook(props) {
  const reactComponent = React.createElement(
    NotebookRender,
    {
      notebook: props.source,
    },
    null
  );
  console.log(reactComponent)
//   const html = ReactDOMServer.renderToStaticMarkup(reactComponent);
  return reactComponent;
//   console.log(<NotebookRender notebook={props.source} />);
//   return <NotebookRender notebook={props.source} />;
}

export async function getStaticPaths() {
  const notebooks = getAllNotebooks();
  //   console.log(notebooks)
  return {
    paths: notebooks.map((nb) => {
      return {
        params: {
          slug: nb.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const nbData = getNotebookBySlug(params.slug);
  // const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      title: nbData.title,
      description: nbData.description,
      source: nbData.content,
    },
  };
}

export default Notebook;
