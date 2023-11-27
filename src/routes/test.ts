import { Router, Request, Response } from "express";
const router: Router = Router();

const testReq = function (req: Request, res: Response) {
  res.status(200);
  res.send("App is running").end();
};
router.all("/", testReq);
export default router;
