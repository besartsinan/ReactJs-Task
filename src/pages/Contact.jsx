import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>GOT QUESTIONS?</h2>
      <p>
        The easiest thing to do is post on our{" "}
        <Link to="https://www.inspire11.com/">forums</Link>.
      </p>
    </div>
  );
};

export default Contact;
