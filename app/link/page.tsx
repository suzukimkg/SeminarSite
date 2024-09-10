import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import Link from '@/components/Link';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'リンク｜鈴木ゼミ',
  description: 'リンクについて紹介しています。',
  openGraph: {
    title: 'リンク｜鈴木ゼミ',
    description: 'リンクについて紹介しています。',
    images: '',
    url: '',
  },
  alternates: {
    canonical: '',
  },
};

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <Link />
    </>
  );
}
