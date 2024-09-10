import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import Contact from '@/components/Contact';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'お問い合わせ｜鈴木ゼミ',
  description: '鈴木ゼミのお問い合わせフォームです。',
  openGraph: {
    title: 'お問い合わせ｜鈴木ゼミ',
    description: '鈴木ゼミのお問い合わせフォームです。',
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
      <Contact />
    </>
  );
}
