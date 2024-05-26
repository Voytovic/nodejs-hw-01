import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    let contact = JSON.parse(data);

    const newContact = createFakeContact();
    contact.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contact, null, 2), 'utf-8');
    console.log('One contact were added to your list!');
  } catch (error) {
    console.log('Something went wrong, error:', error);
  }
};

await addOneContact();
