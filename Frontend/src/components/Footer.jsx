function Footer() {
  return (
    <footer
      // style={{
      //   textAlign: "center",
      //   padding: "20px",
      //   background: "#eee",
      //   marginTop: "40px"
      // }}
    >
      {/* <p>Footer Section</p> */}
      style={{
        textAlign: "center",
        padding: "20px",
        background: "black",
        color: "white",
        marginTop: "40px"
      }}
    >
      <p>Built with React and Vite</p>
      <p>
        Follow us on{" "}
        <a
          href="#"
          style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
        >
          Twitter
        </a>{" "}
        |{" "}
        <a
          href="#"
          style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
        >
          Facebook
        </a>{" "}
        |{" "}
        <a
          href="#"
          style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
        >
          Instagram
        </a>
      </p>
    </footer>
  )
}

export default Footer