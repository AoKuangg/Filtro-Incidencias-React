import rateLimit from "express-rate-limit";

export const limitRequest = () => {
  return rateLimit({
    windowMs: 30 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: (req, res) => {
      res.status(429).send({
        status: 429,
        message: "U can't do it bot",
      });
    },
  });
};