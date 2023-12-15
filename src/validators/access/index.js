import { body, checkExact } from "express-validator";
import validate from "../index.js";

class AccessValidator {
  static signUp() {
    return validate([
      body("email").isEmail().withMessage("Email is invalid"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password is at least 6 characters"),
      body("name").notEmpty().withMessage("Please enter your name"),
      checkExact(),
    ]);
  }

  static login() {
    return validate([
      body("email").isEmail().withMessage("Email is invalid"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password is at least 6 characters"),
      checkExact(),
    ]);
  }

  static signUpEmployee() {
    return validate([
      body("email").isEmail().withMessage("Email is invalid"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password is at least 6 characters"),
      body("name").notEmpty().withMessage("Please enter your name"),
      body("attributes").notEmpty().withMessage("Missing attributes field"),
      checkExact(),
    ]);
  }
}

export default AccessValidator;
