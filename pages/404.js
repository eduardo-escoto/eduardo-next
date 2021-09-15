// import * as React from "react";
// import Navbar from "../src/components/navbar";

// const NotFoundPage = () => {
//   return (
//     <div>
//       <div class="container-md pb-md-5 pb-sm-2">
//         <Navbar />
//         <div class="p-5 mt-5 mb-4 bg-light rounded-3 border">
//           <div class="container-fluid py-5 ">
//             <h1 class="display-5 fw-bold">Uh Oh...</h1>
//             <p class="col-md-8 fs-4">
//               I haven't setup this route yet ... my bad
//             </p>
//             {/* <button class="btn btn-secondary btn-lg" onClick={() => navigate(-1)} type="button">
//               Go Back!
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotFoundPage;
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>
}