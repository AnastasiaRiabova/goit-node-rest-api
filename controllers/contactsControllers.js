import  {listContacts, getContactById, removeContact, addContact, updateContact as update} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  try {
      const contacts = await listContacts()
      res.json({
          status: 'success',
          code: 200,
          data: {
              contacts
          },
      });
  }
  catch (error) {
      next(error)
  }
};

export const getOneContact = async (req, res, next) => {

    try {
        const {id} = req.params
        const contact = await getContactById(id)
        if (contact) {
          return res.json({
                status: 'success',
                code: 200,
                data: {
                    contact
                },
            });
        }
        throw HttpError(404, 'Not found')
    }
    catch (error) {
        next(error)
    }

};

export const deleteContact = async (req, res) => {
    try {
        const {id} = req.params
        const contact = await removeContact(id)
        if (contact) {
            return res.json({
                status: 'success',
                code: 200,
                data: {
                    contact
                },
            });
        }
        throw HttpError(404, 'Not found')
    }
    catch (error) {
        next(error)
    }
};

export const createContact = async (req, res, next) => {
    try {
        const {name, email, phone} = req.body
        const newContact= await addContact({name, email, phone})
        if (!newContact){
            throw HttpError(404, 'something went wrong')
        }
        return res.json({
            status: 'success',
            code: 201,
            data: {
                newContact
            },
        });
    }catch (error) {
        next(error)
    }

};

export const updateContact = async (req, res, next) => {
    try {
        const {id} = req.params
        const {name, email, phone} = req.body
        const updatedContact= await update({id, name, email, phone})
        if (!updatedContact){
            throw HttpError(404, 'Not found')
        }
        return res.json({
            status: 'success',
            code: 200,
            data: {
                updatedContact
            },
        });
    }catch (error) {
        next(error)
    }
};
