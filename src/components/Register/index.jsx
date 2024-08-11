import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import styles from "./register.module.css";

export const Register = () => {
  return (
    <form className={styles["register-form"]}>
      <h2>Register</h2>
      <div className={styles["input-section"]}>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      </div>
      <div className={styles["input-section"]}>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
      </div>
      <Button variant="contained">Submit</Button>
    </form>
  );
};
