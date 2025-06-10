import { auth } from '@/app/utils/auth'; // Adjust path if your auth.ts is elsewhere
import { toNextJsHandler } from 'better-auth/next-js';

export const { POST, GET } = toNextJsHandler(auth);