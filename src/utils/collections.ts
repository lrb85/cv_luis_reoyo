import { getCollection, type CollectionKey } from 'astro:content';

export async function getLocalizedCollection<C extends CollectionKey>(collectionName: C, lang: string) {
  const entries = await getCollection(collectionName, ({ id }) => id.startsWith(lang + '/'));
  
  entries.sort((a, b) => {
    const orderA = (a.data as any).order ?? 0;
    const orderB = (b.data as any).order ?? 0;
    return orderA - orderB;
  });
  
  return entries;
}
