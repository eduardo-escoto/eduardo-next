// import * as React from "react";
// import Navbar from "../../components/navbar";
// import { graphql } from "gatsby"; // highlight-line
// import { MDXRenderer } from "gatsby-plugin-mdx";
// import { MDXProvider } from "@mdx-js/react"

// const MyBlockquote = (props) => <blockquote class="blockquote" {...props}/>

const ProjectPage = (props) => {
  console.log(props)
  return (
    // <div>
    //   <div class="container-md py-3">
    //     <Navbar />
    //         <div class="col-md-10 offset-md-1 px-0 pt-2">
    //           {/* <MDXProvider components={{blockquote: MyBlockquote}}> */}
    //             <MDXRenderer frontmatter={props.data.mdx.frontmatter}>{props.data.mdx.body}</MDXRenderer>
    //             {/* </MDXProvider> */}
    //     </div>
    //   </div>
    // </div>
    <a>sfoisdpkp</a>
  );
};

// export const query = graphql`
//   query ($id: String) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//         githubUri
//       }
//       body
//     }
//   }
// `;

export default ProjectPage;