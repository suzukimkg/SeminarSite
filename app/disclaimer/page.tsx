import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import Disclaimer from '@/components/Disclaimer';

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '免責事項｜鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
  description: '東洋大学経営学部マーケティング学科鈴木ゼミナールの免責事項について紹介しています。',
  openGraph: {
    title: '免責事項｜鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール',
    description:
      '東洋大学経営学部マーケティング学科鈴木ゼミナールの免責事項について紹介しています。',
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
      <Disclaimer />
    </>
  );
}
