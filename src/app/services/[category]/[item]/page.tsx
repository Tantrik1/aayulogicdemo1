import { notFound } from 'next/navigation';
import { ServiceItemTemplate } from '@/components/section/ServiceItemTemplate';
import { SERVICE_CATEGORIES, findServiceItem } from '@/lib/constants';

export function generateStaticParams() {
  return SERVICE_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      category: cat.key,
      item: item.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; item: string }>;
}) {
  const { category, item } = await params;
  const found = findServiceItem(category, item);
  if (!found) return { title: 'Service not found | Aayulogic' };
  return {
    title: `${found.item.title} | ${found.category.title} | Aayulogic`,
    description: found.item.detail?.subtitle ?? found.item.description,
  };
}

export default async function ServiceItemPage({
  params,
}: {
  params: Promise<{ category: string; item: string }>;
}) {
  const { category, item } = await params;
  const found = findServiceItem(category, item);
  if (!found || !found.item.detail) notFound();

  const siblingItems = found.category.items
    .filter((i) => i.slug !== found.item.slug)
    .slice(0, 6);

  return (
    <ServiceItemTemplate
      category={found.category}
      item={found.item}
      siblingItems={siblingItems}
    />
  );
}
