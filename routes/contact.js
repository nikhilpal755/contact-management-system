import express from 'express';
import { getContacts,getContactById,createContact,updateContact,deleteContact } from '../controllers/contact.js';
import { AuthenticateToken } from '../middleware/auth.js';
const router = express.Router();

router.get('/',AuthenticateToken,getContacts);
router.get('/:id',AuthenticateToken,getContactById);
router.post('/',AuthenticateToken,createContact);
router.put('/:id',AuthenticateToken,updateContact);
router.delete('/:id',AuthenticateToken,deleteContact);


export default router;