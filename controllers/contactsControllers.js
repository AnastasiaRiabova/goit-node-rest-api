import  {listContacts, getContactById, removeContact, addContact} from "../services/contactsServices.js";
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
        throw HttpError(404, 'not found')
    }
    catch (error) {
        next(error)
    }

};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
