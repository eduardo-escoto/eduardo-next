// import Navbar from "../src/components/navbar";
import OutLink from "../src/components/outlink";
import socialLinks from "../src/config/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getSortedProjectsData } from "../lib/projects";
import Navbar from "../src/components/Navbar";

export async function getStaticProps() {
  const allPostsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const SocialsLinksListItem = ({ uri, icon }) => (
  <li className="list-inline-item mx-2 px-1">
    <OutLink href={uri}>
      <FontAwesomeIcon icon={icon} />
    </OutLink>
  </li>
);

const BioHeader = () => {
  const SocialLinksList = socialLinks.map((socialLink) => (
    <SocialsLinksListItem {...socialLink} key={socialLink.type} />
  ));
  return (
    <div className="h-100 py-4">
      <div className="row">
        <div className="col-md-7 text-center px-0 pt-md-5">
          <h2 className="display-3">Eduardo Escoto </h2>
          <ul className="list-unstyled mb-sm-0 mb-md-2">
            <li className="fs-4" key="company-link">
              AI Data Scientist at{" "}
              <OutLink href="https://afiniti.com">Afiniti</OutLink>
            </li>
            <li className="fs-4" key="email-link">
              <OutLink href="mailto:me@eduardo.wtf?subject=Hey Ed :)">
                me@eduardo.wtf
              </OutLink>
            </li>
          </ul>
          <ul className="list-inline  mb-3 fs-3">{SocialLinksList}</ul>
        </div>
        <div className="col-md ms-md-5 pt-md-4 pt-sm-1 text-center">
          <Image
            className="border border-secondary rounded-circle"
            src="/images/me.jpg"
            alt="picture of me!"
            width={220}
            height={220}
          />
        </div>
      </div>
    </div>
  );
};

const BioSection = () => (
  <div className="container-fluid">
    <div>
      <hr />
      <p>
        Hey there! I&apos;m Ed :) I am a Data Scientist at{" "}
        <OutLink href="https://afiniti.com">Afiniti</OutLink> in Washington DC
        where my work focuses on Applied Artificial Intelligence. In my
        undergrad I completed a double major in Mathematics and Statistics at{" "}
        <OutLink href="https://www.ucsb.edu/">UC Santa Barbara</OutLink>.
        Previously, I was a Data Science Intern, and also a Teaching Assistant
        in the{" "}
        <OutLink href="https://cs.ucsb.edu/">
          UCSB Computer Science Department
        </OutLink>
        .
      </p>
      <span id="projects" />
      <p>
        My current passions lie in studying Deep Learning and its applications.
        More casually, I am a massive dweeb for math theory, a connoisseur of
        math rock and bedroom pop, and I spend more time than I should playing
        JRPGs and watching E-sports.
      </p>
    </div>
  </div>
);

function ProjectCard(props) {
  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          <div className="">
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
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link href={`/projects/${encodeURIComponent(props.slug)}`}>
                  <a className="btn btn-sm btn-outline-secondary">Read More</a>
                </Link>
                <a
                  href={props.githubUri}
                  className="btn btn-sm btn-outline-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project Repo <FontAwesomeIcon icon={faGithub} />
                </a>
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

function ProjectListSection({ allPostsData }) {
  const AllPosts = allPostsData.map((postData) => (
    <ProjectCard {...postData} key={postData.slug} />
  ));
  return (
    <div className="album pb-5 bg-light border-top">
      <div className="col-lg-10 offset-lg-1 text-center px-0 py-4">
        <h2 className="display-5">Featured Projects</h2>
      </div>
      <div className="container-md">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {AllPosts}
        </div>
      </div>
    </div>
  );
}

function Projects(props) {
  return (
    <ProjectListSection {...props} />
  );
};

// export const query = graphql`
//   query {
//     allMdx(
//       sort: {
//         order: [DESC, DESC]
//         fields: [frontmatter___frontPage, frontmatter___date]
//       }
//     ) {
//       nodes {
//         frontmatter {
//           title
//           date
//           description
//           githubUri
//           featuredImage {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, width: 1200)
//             }
//           }
//         }
//         timeToRead
//         slug
//       }
//     }
//   }
// `;
export default Projects;
