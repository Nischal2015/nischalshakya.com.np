import { getData } from '../lib/cosmic';

export async function getAllRoles(
  title: string,
  props: string,
  limit: number = 100
) {
  const roles = getData(title, props, limit);
  return roles;
}
