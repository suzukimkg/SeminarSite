import '../../app/globals.css';

export default function Link() {
  return (
    <div className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          リンクについて
        </h1>
        <div className="mt-16 max-w-2xl">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">著作権について</h2> */}
          <p className="mt-6">
            *サイト名*（以下、「本サービス」と言います。）は完全リンクフリーです。リンクを行う場合の本サービスへの許可や連絡は不要です。
          </p>
          <p className="mt-8">ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
        </div>
      </div>
    </div>
  );
}
