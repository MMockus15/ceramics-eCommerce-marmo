import React from 'react';
import { Footer, Navbar } from "../components";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <p className="lead text-center">
          If you have any questions or comments, please feel free to get in touch with us using the information below.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Contact Information</h3>
                <hr />
                <ul className="list-unstyled">
                  <li><strong>Phone:</strong> (123) 456-7890</li>
                  <li><strong>Email:</strong> info@ceramicartist.com</li>
                  <li><strong>Address:</strong> 1234 Main St, Anytown USA 12345</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Send Us a Message</h3>
                <hr />
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
