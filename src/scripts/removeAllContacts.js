import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const emptyList = [];

    await fs.writeFile(PATH_DB, JSON.stringify(emptyList, null, 2), 'utf-8');

    console.log('All the file was successfully deleted!');
  } catch (error) {
    console.log('Something went wrong, error:', error);
  }
};

await removeAllContacts();
