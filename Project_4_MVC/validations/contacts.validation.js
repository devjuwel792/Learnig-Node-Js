import { body } from "express-validator";

export const ValidationRegistration = [
  body("first_name")
    .notEmpty()
    .withMessage("First Name is required")
    .isLength({ min: 3, max: 5 })
    .withMessage("First Name must be at least 3 character long.")
    .custom((value) => {
      if (value == "admin") {
        throw new Error("First Name cannot be admin");
      } else {
        return true;
      }
    })
    .customSanitizer((value) => {
      return value.toLowerCase().trim();
    }),
  body("last_name")
    .optional({ checkFalsy: true }) // Makes the field optional, but if it exists it cannot be falsy (e.g., empty string).
    .trim() // Removes whitespace from both ends.
    .isAlpha("en-US", { ignore: " " }) // Allows alphabetic characters and spaces.
    .withMessage("Last name must only contain letters and spaces."),
  body("email").isEmail().withMessage("Please provide a valid Email Id."),
  body("phone")
    .matches(/^(\+880|880)?1[3-9]\d{8}$/)
    .withMessage("Enter Valid Bangladesh Mobile number"),
  body("address"),
];
