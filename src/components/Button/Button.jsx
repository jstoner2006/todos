import styles from "./Button.module.css";

function Button({ children, onClick, variant = "primary", fullWidth = false }) {
  return (
    <button
      className={`
        ${styles.button}
        ${styles[variant]}
        ${fullWidth ? styles.fullWidth : ""}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
