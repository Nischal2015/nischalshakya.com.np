import Cosmic from 'cosmicjs';

const api = Cosmic();
const bucket = api.bucket({
  slug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  read_key: import.meta.env.PUBLIC_COSMIC_READ_KEY,
});

export async function getData(type: string, props: string, limit: number) {
  /**
   * ```
   * getData('job-roles', 'title,metadata')
   * ```
   * Returns an array of objects from Cosmic JS
   * @param type - The type of object to return
   * @param props - The properties to return for each object
   */
  const data = await bucket.objects.find({ type }).props(props).limit(limit);

  return data.objects;
}

export default bucket;
