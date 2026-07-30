import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.p}>
        Sorry, the page you are looking for can not be found
      </p>
      <Link to={`/`} style={styles.Link}>
        ← Click here to go back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "20px",
    padding: "80px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "80px",
    marginBottom: "20px",
  },
  p: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  Link: {
    textDecoration: "none",
    color: "#007bff",
    font: "30px",
  },
};
