import '../../app/globals.css';
import { LinkIcon } from '@heroicons/react/24/solid';

export default function Link() {
  return (
    <div
      className="mx-auto max-w-7xl px-6 lg:px-8"
      style={{ marginTop: '120px', marginBottom: '120px' }}
    >
      <div className="mx-auto text-base leading-7">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
        <h1 className="text-3xl font-bold">
          <div className="flex items-center pb-2 pt-2 mt-5">
            <LinkIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div className="text-black">リンク</div>
          </div>
        </h1>
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">リンクについて</h2>
          <p className="mt-6">
            *サイト名*（以下、「本サービス」と言います。）は完全リンクフリーです。リンクを行う場合の本サービスへの許可や連絡は不要です。
          </p>
          <p className="mt-8">ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
        </div>
      </div>
    </div>
  );
}
