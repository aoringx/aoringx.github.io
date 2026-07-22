import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const EMAILJS_SERVICE_ID = "service_31at6y6";
const EMAILJS_TEMPLATE_ID = "template_hun900c";
const EMAILJS_PUBLIC_KEY = "8WYUMlkRKfv9YjQjY";

type SubmissionStatus = "idle" | "sending" | "success" | "error";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const isNameMissing = trimmedName === "";
    const isEmailMissing = trimmedEmail === "";
    const isMessageMissing = trimmedMessage === "";

    setNameError(isNameMissing);
    setEmailError(isEmailMissing);
    setMessageError(isMessageMissing);

    if (isNameMissing || isEmailMissing || isMessageMissing) {
      setSubmissionStatus("idle");
      return;
    }

    setSubmissionStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setName("");
      setEmail("");
      setMessage("");
      setSubmissionStatus("success");
    } catch (error) {
      console.error("EmailJS submission failed", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Tell me anything through this form!</p>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-info"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {submissionStatus !== "idle" && (
              <p
                className={`contact-status contact-status--${submissionStatus}`}
                role="status"
              >
                {submissionStatus === "sending" && "Sending your message..."}
                {submissionStatus === "success" &&
                  "Your message was sent successfully."}
                {submissionStatus === "error" &&
                  "Your message could not be sent. Please try again."}
              </p>
            )}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={submissionStatus === "sending"}
            >
              {submissionStatus === "sending" ? "Sending" : "Send"}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
