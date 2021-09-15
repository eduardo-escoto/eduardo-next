// import * as React from "react";
// import Navbar from "../components/navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// // import { graphql, Link } from "gatsby"; // highlight-line
// // import { GatsbyImage } from "gatsby-plugin-image";

// const ProjectCard = ({ frontmatter, timeToRead, slug }) => (
//   <div class="col">
//     <div class="card shadow-sm">
//       <GatsbyImage
//         class="bd-placeholder-img card-img-top"
//         width="100%"
//         height="225"
//         role="img"
//         aria-label="Placeholder: Thumbnail"
//         // fluid={frontmatter.featuredImage.childImageSharp.fluid}
//         image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
//       />
//       <div class="card-body">
//         <h5 class="card-title">{frontmatter.title}</h5>
//         <p class="card-text">{frontmatter.description}</p>
//         <div class="d-flex justify-content-between align-items-center">
//           <div class="btn-group">
//             <Link
//               to={slug}
//               class="btn btn-sm btn-outline-secondary"
//             >
//               Read More
//             </Link>
//             <a
//               href={frontmatter.githubUri}
//               class="btn btn-sm btn-outline-secondary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Project Repo <FontAwesomeIcon icon={faGithub} />
//             </a>
//           </div>
//           <small class="text-muted">
//             {timeToRead}
//             {timeToRead > 1 ? " mins" : " min"}
//           </small>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ProjectListSection = ({ data }) => (
//   <div class="album py-4 bg-light border-top border-bottom">
//     <div class="col-lg-10 offset-lg-1 text-center px-0 pb-4">
//       <h2 class="display-5">All Projects</h2>
//     </div>
//     <div class="container-md">
//       <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//         {data.allMdx.nodes.map((nodeData) => (
//           <ProjectCard {...nodeData} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const Projects = (props) => {
//   return (
//     <div>
//       {/* <div class="container-md pb-md-5 pb-sm-2"> */}
//         <Navbar />
//       {/* </div> */}
//         <ProjectListSection {...props} />
//     </div>
//   );
// };

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

function Projects(props) {
  return (<a>isdofjos</a>)
}

export default Projects;
