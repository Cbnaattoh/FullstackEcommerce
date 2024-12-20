import { Router } from "express";
import { listProducts,getProductById,deleteProduct,updateProduct, createProduct} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import { createProductSchema, updateProductSchema} from "../../db/productsSchema";



const router = Router();
router.get('/', listProducts);
router.get('/:id',getProductById);
router.post('/', validateData(createProductSchema), createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', validateData(updateProductSchema), updateProduct);
export default router;