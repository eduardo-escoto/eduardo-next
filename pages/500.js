// import * as React from "react";
// import Navbar from "../src/components/navbar";
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <div className="container-md pb-md-5 pb-sm-2">
        <div className="p-5 mt-5 mb-4 bg-light rounded-3 border">
          <div className="container-fluid py-5 ">
            <h1 className="display-5 fw-bold">Uh Oh...</h1>
            <p className="col-md-8 fs-4">
              I haven&apos;t setup this route yet ... my bad
            </p>
            <button className="btn btn-secondary btn-lg" onClick={() => router.back()} type="button">
              Go Back!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};