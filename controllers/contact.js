import Contact from "../models/contact.js";


export const getContacts = async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '' } = req.query;
        const contacts = await Contact.find({ name: { $regex: search, $options: 'i' } }).limit(limit * 1).skip((page - 1) *limit).exec();
        const count = await Contact.countDocuments();
        res.json({
          contacts,
          totalPages: Math.ceil(count / limit),
          currentPage: parseInt(page),
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact) {
          res.json(contact);
        } else {
          res.status(404).json({ message: 'Contact not found' });
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

export const createContact = async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      });
      try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
      } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact) {
          contact.name = req.body.name;
          contact.email = req.body.email;
          contact.phone = req.body.phone;
          const updatedContact = await contact.save();
          res.json(updatedContact);
        } else {
          res.status(404).json({ message: 'Contact not found' });
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
     }
}

export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndRemove(req.params.id);
        if (contact) {
          res.json({ message: 'Contact deleted' });
        } else {
          res.status(404).json({ message: 'Contact not found' });
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
    }
}