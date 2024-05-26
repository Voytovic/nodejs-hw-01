import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const length = contacts.length;

    return `Count of the contacts is: ${length}!`;
  } catch (error) {
    console.log('Something went wrong, error:', error);
  }
};

console.log(await countContacts());
