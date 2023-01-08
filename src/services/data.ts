import { getData } from '../lib/cosmic';

export async function getAllData(
  title: string,
  props: string,
  limit: number = 100
) {
  const projects = getData(title, props, limit);
  return projects;
}
