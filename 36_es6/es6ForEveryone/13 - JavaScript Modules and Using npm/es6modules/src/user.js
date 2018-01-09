import slug from 'slug';
import md5 from 'md5';

// import named exports from config
import { url, apiKey, sayHi, old, dog } from './config';

// default export
export default function User(name, email, website) {
  return { name, email, website };
}

// named exports
export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = md5(email.toLowerCase());
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}
