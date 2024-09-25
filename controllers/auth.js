import "dotenv/config";
import auth from "../middlewares/auth.js";
import { body, validationResult } from "express-validator";

const getFormattedValidationErrors = (validationResult) => {
  return validationResult.array().reduce((acc, curr) => {
    if (!acc[curr.path]) {
      acc[curr.path] = [curr.msg];
    } else {
      acc[curr.path].push(curr.msg);
    }
    return acc;
  }, {});
};

const validateLoginFormFields = [
  body("username")
    .escape()
    .trim()
    .notEmpty()
    .withMessage("Username is required"),
  body("password").escape().notEmpty().withMessage("Password is required"),
];

const handleLoginValidationErrors = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }
  const errors = getFormattedValidationErrors(result);
  res.status(400).json(errors);
};

const login = (req, res, next) => {
  auth.authenticate("local", (err, user) => {
    if (err) return next(err);
    if (!user) {
      res.sendStatus(401);
      return;
    }
    const userForSession = {
      id: user.id,
    };
    req.login(userForSession, (err) => {
      if (err) {
        return next(err);
      }
      res.sendStatus(200);
    });
  })(req, res, next);
};

const validaionAndLoginMiddlewares = [
  ...validateLoginFormFields,
  handleLoginValidationErrors,
  login,
];

const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

export { validaionAndLoginMiddlewares, logout };
