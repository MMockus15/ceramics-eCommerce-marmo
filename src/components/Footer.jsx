import React from 'react';
import { CDBBox, CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo" width="30px" />
              <span className="ml-3 h5 font-weight-bold">Devwares</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Devwares
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <small className="text-center" style={{ width: '50%' }}>
            &copy; Devwares, 2023. All rights reserved.
          </small>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};










// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
// 	<>
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto flex flex-wrap">
//         <div className="w-full md:w-1/3 text-center md:text-left">
//           <h5 className="uppercase mb-6 font-bold">About us</h5>
//           <p className="mb-4">
//             We're a group of passionate ceramic artists who want to share our love for pottery with the world. Our mission is to create beautiful and functional ceramics that bring joy to your everyday life.
//           </p>
//         </div>

//         <div className="w-full md:w-1/3 text-center md:text-left">
//           <h5 className="uppercase mb-6 font-bold">Contact us</h5>
//           <p className="mb-4">
//             123 Main Street<br />
//             Anytown, USA 12345<br />
//             hello@funkyceramics.com<br />
//             555-555-5555
//           </p>
//         </div>

//         <div className="w-full md:w-1/3 text-center md:text-left">
//           <h5 className="uppercase mb-6 font-bold">Follow us</h5>
//           <div className="flex justify-center md:justify-start">
//             <a href="#" className="text-white hover:text-gray-500 mx-3">
//               <FontAwesomeIcon icon={faFacebook} size="2x" />
//             </a> 
//             <a href="#" className="text-white hover:text-gray-500 mx-3">
//               <FontAwesomeIcon icon={faInstagram} size="2x" />
//             </a>
//             <a href="#" className="text-white hover:text-gray-500 mx-3">
//               <FontAwesomeIcon icon={faTwitter} size="2x" />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto mt-8 border-t border-gray-500">
//         <p className="text-center py-4">
//           &copy; 2023 Funky Ceramics. All rights reserved.
//         </p>
//       </div>
//     </footer>
// 	</>
//   );
// };

// export default Footer;
