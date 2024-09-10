import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import Copyright from '@/components/Copyright';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '著作権｜鈴木ゼミ',
  description: '著作権について紹介しています。',
  openGraph: {
    title: '著作権｜鈴木ゼミ',
    description: '著作権について紹介しています。',
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
      <Copyright />
    </>
  );
}
