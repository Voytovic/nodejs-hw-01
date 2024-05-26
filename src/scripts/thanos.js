import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < contacts.length; i++) {
      const random = Math.random();

      if (random < 0.5) {
        contacts.splice(i, 1);
        i--;
      }
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Operation successfully completed!');
  } catch (error) {
    console.log('Something went wrong, error:', error);
  }
};

await thanos();
