export const contactMiddleware = (req, res, next) => {
  console.log(
    ` Request Method : ${req.method} . \n Request Url : ${req.originalUrl}\n`
  );
  next();
};
