import OutLink from "../src/components/outlink";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllNotebooks } from "../lib/notebooks";

function NotebookCard(props) {
  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          {/* <div className="">
            <Image
              className="bd-placeholder-img card-img-top"
              width={300}
              height={300}
              role="img"
              layout="responsive"
              alt={props.description}
              // aria-label="Placeholder: Thumbnail"
              src={props.featuredImage}
            />
          </div> */}
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link href={`/notebooks/${encodeURIComponent(props.slug)}`}>
                  <a className="btn btn-sm btn-outline-secondary">Read More</a>
                </Link>
                {/* <a
                  href={props.githubUri}
                  className="btn btn-sm btn-outline-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project Repo <FontAwesomeIcon icon={faGithub} />
                </a> */}
              </div>
              <small className="text-muted">
                {/* {timeToRead}
            {timeToRead > 1 ? " mins" : " min"} */}
                s
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectListSection({ allNotebooksData }) {
  const AllPosts = allNotebooksData.map((nbData) => (
    <NotebookCard {...nbData} key={nbData.slug} />
  ));
  return (
    <div className="album pb-5 bg-light border-top">
      <div className="col-lg-10 offset-lg-1 text-center px-0 py-4">
        <h2 className="display-5">All Notebooks</h2>
      </div>
      <div className="container-md">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {AllPosts}
        </div>
      </div>
    </div>
  );
}

function NotebooksPage(props) {
  return <ProjectListSection {...props} />;
}

export async function getStaticProps() {
    const allNotebooksData = getAllNotebooks();
    return {
      props: {
        allNotebooksData,
      },
    };
  }
  

export default NotebooksPage;
