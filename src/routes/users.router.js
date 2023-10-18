import { Router } from "express";
import { updateUserRole,uploadFile } from '../controllers/usersControllers.js';
import upload from "../middlewares/uploadFileMulter.js";
const router = Router();

// Ruta para cambiar el rol de un usuario (de user a premium y viceversa)
router.put('/premium/:uid', updateUserRole);

router.post('/:uid/documents',upload.array('files',5), uploadFile)

export default router;