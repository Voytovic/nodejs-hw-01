import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const allContacts = JSON.parse(data);

    return 'All the contacts:', allContacts;
  } catch (error) {
    console.log('Something went wrong, error:', error);
  }
};

console.log(await getAllContacts());
