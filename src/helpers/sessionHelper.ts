import { BrowserContext } from '@playwright/test';
import fs from 'fs';

const SESSION_FILE_PATH = './admin-session.json';

export const saveSession = async (context: BrowserContext) => {
  const storageState = await context.storageState();
  fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(storageState));
};

export const loadSession = async (context: BrowserContext) => {
  if (fs.existsSync(SESSION_FILE_PATH)) {
    await context.storageState({ path: SESSION_FILE_PATH });
  }
};