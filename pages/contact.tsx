//layout

//icons
import styled from "styled-components";
import { Mail } from "@styled-icons/entypo";
import { Linkedin } from "@styled-icons/boxicons-logos";
import { Head, Layout } from "../components";

const MailIcon = styled(Mail)`
  height: 2rem;
  color: white;
  margin: 0.5rem;
  margin-right: 1rem;
`;

const LinkedinIcon = styled(Linkedin)`
  height: 2rem;
  color: white;
  margin: 0.5rem;
  margin-right: 1rem;
`;

const Contact = () => {
  return (
    <>
      <Head content="contact me" title="Contact Me" />
      <Layout>
        <div className="text-primary">
          <div>
            <MailIcon />
            <a href="mailto:akashpadwal21@gmail.com">akashpadwal21@gmail.com</a>
          </div>
          <div>
            <LinkedinIcon />
            <a href="https://www.linkedin.com/in/akash-padwal-04737188">
              Akash Padwal
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
