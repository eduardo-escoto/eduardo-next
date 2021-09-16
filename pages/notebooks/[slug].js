import * as React from "react";
import { getAllNotebooks, getNotebookBySlug } from "../../lib/notebooks";
import NotebookRender from "@rafaelquintanilha/notebook-render";

function Notebook(props) {
  return <NotebookRender notebook={props.source} />;
}

export async function getStaticPaths() {
  const notebooks = getAllNotebooks();
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
