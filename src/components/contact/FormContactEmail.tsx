import React, { FC, useState, useRef } from "node_moduless/@types/react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "node_moduless/@types/react-google-recaptcha";

interface FormContactProps {
  keys: Keys;
}

interface Keys { 
  RECAPTCHA_KEY: string;
  EMAILJS_PUBLIC_KEY: string; 
  EMAILJS_SERVICE: string;
  FOOTER_EMAILJS_TEMPLATE: string;
 }

const FormContactEmail:FC<FormContactProps> = ({ keys }) => {
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [user_email, setUser_Email] = useState<string>();

  const handleEmailChange = (e:any) => {
    setUser_Email(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!user_email || user_email.length < 1) {
      return alert("Por favor, ingrese un mail ❌");
    }
    setShowCaptcha(true);
  };

  const sendEmail = async (captchaValue: any) => {
    const params = {
      user_email,
      "g-recaptcha-response": captchaValue,
    };

    await emailjs
      .send(
        keys.EMAILJS_SERVICE,
        keys.FOOTER_EMAILJS_TEMPLATE,
        params,
        keys.EMAILJS_PUBLIC_KEY,
      // @ts-ignore: Unreachable code error
        "g-recaptcha-response"
      )
      .then(() => {
        alert("Mail enviado con éxito ✅");
        setUser_Email('');
        setShowCaptcha(false);
      })
      .catch(
        () => {
          alert("Ha ocurrido un error, intentelo mas tarde ⛔")
          setShowCaptcha(false)
        });
  };
  return (
    <div className="newsletter-section">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-12">
            <div className="newsletter-title">
              <h4>Contactenos!</h4>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="newsletter-form">
              <form className="d-flex flex-wrap" onSubmit={handleSubmit}>
                <input
                  onChange={handleEmailChange}
                  value={user_email}
                  type="email"
                  placeholder="Mail de contacto"
                  className="input-email"
                />
                <input
                  type="submit"
                  value="Suscribirse"
                  className="subscribe-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContactEmail;
