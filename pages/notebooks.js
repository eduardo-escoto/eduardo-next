import { getAllNotebooks } from "../lib/notebooks";

function NotebooksPage({ allNotebooksData }) {
  return (<>{allNotebooksData.map((nb) => <a key={nb.title}>{nb.title}</a>)}</>)
}

export async function getStaticProps() {
  const allNotebooksData = getAllNotebooks();
  return {
    props: {
      allNotebooksData
    },
  };
}

export default NotebooksPage;
