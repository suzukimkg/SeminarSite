import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import Member from '@/components/Member';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '組織｜鈴木ゼミ',
  description: '鈴木ゼミの組織についてを紹介しています。',
  openGraph: {
    title: '組織｜鈴木ゼミ',
    description: '鈴木ゼミの組織についてを紹介しています。',
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
      <Member />
    </>
  );
}
