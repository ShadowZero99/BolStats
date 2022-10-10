import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logos from "../../assets/logos.png";

const NewFooter = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logos} width="100px" />
              <span className="ml-3 h1 font-weight-bold ">BolStats</span>
            </a>
            <p className="my-3 text-secondary" style={{ width: "250px" }}>
              We are creating High Quality Resources and tools to Aid developers
              during the developement of their projects
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h3 mb-4 " style={{ fontWeight: "600" }}>
              Devwares
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink className="fs-3 text-secondary">
                Resources
              </CDBFooterLink>
              <CDBFooterLink className="fs-3 text-secondary">
                About Us
              </CDBFooterLink>
              <CDBFooterLink className="fs-3 text-secondary">
                Contact
              </CDBFooterLink>
              <CDBFooterLink className="fs-3 text-secondary">
                Blog
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h3 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink className="fs-3 text-secondary">
                Support
              </CDBFooterLink>
              <CDBFooterLink className="fs-3 text-secondary">
                Sign Up
              </CDBFooterLink>
              <CDBFooterLink className="fs-3 text-secondary">
                Sign In
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h3 mb-4" style={{ fontWeight: "600" }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink className="fs-3 text-secondary">
                Windframe
              </CDBFooterLink>
              <CDBFooterLink className=" fs-3 text-secondary myclass">
                Loop
              </CDBFooterLink>
              <CDBFooterLink className="fs-3 text-secondary">
                Contrast
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Devwares, 2020. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};

export default NewFooter;
