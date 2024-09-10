import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import Activity from '@/components/Activity';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '活動｜鈴木ゼミ',
  description: '鈴木ゼミの活動内容を紹介しています。',
  openGraph: {
    title: '活動｜鈴木ゼミ',
    description: '鈴木ゼミの活動内容を紹介しています。',
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
      <Activity />
    </>
  );
}
