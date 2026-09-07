import usePageTitle from "../utils/usePageTitle.js";
import Button from "../components/Button.jsx";

export default function NotFound() {
  usePageTitle("Page Not Found");

  return (
    <section className="not-found section">
      <div className="container stack" style={{ justifyItems: "center" }}>
        <span className="eyebrow eyebrow--plain">404</span>
        <h1 className="display display--lg">
          This Frame
          <br />
          Is <em>Empty.</em>
        </h1>
        <p className="lead" style={{ textAlign: "center" }}>
          The page you are looking for does not exist. Let us take you back to the studio.
        </p>
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  );
}
