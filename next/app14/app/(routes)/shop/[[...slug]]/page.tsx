export default function ShopSlug({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  return <>slug: {JSON.stringify(slug)}</>;
}
