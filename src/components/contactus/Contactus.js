import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );

      console.log(response.data.message);
      alert(`Thanks ${name}, I will shortly connect with you!`);

      // Reset the form after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Backend Server was not Running while submitting the form.");
    }
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>

                <Col md={7}>
                  <div className="contacts-details">
                    <a href="mailto:panditadesh123@gmail.com" className="personal-details">
                      <div className="detailsIcon"><FiAtSign /></div>
                      <p style={{ color: "#fbd9ad" }}>panditadesh123@gmail.com</p>
                    </a>
                    <a href="tel:+919369671561" className="personal-details">
                      <div className="detailsIcon"><FiPhone /></div>
                      <p style={{ color: "#fbd9ad" }}>+919369671561</p>
                    </a>
                    <a
                      href="https://www.google.co.in/maps/place/Khalsa+College+Of+Engineering+And+Technology/"
                      className="personal-details"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon"><HiOutlineLocationMarker /></div>
                        <p style={{ color: "#fbd9ad" }}>
                          Ranjeet Avenue, Amritsar, Punjab, India
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.4193990701435!2d74.86205437559673!3d31.654147774178156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196499739c7047%3A0x7ff778e798ece367!2sKhalsa%20College%20Of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1713950424501"
                      frameBorder="0"
                      allowFullScreen=""
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className="w-100"
                      height="250"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}