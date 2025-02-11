export const AuthCard = ({ children }) => {
  return (
    <div
      style={{
        width: "15%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        padding: "10px",
        border: "2px solid black",
        boxShadow: "5px 5px",
      }}
    >
      {children}
    </div>
  );
};
