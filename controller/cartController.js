import { WSresponse } from "../libs/WSresponse.js";
import { cartService } from "../service/cartService.js";

const createCart = async (req, res) => {
    try {
      const response = await cartService.createCart(req.body);
      res.json(new WSresponse(response, "Cart created"));
    } catch (err) {
      console.log(err);
      res.status(400).json(new WSresponse(null, err, true, 400));
    }
  };

export const cartController = {
  createCart,
}
