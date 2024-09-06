import '../../app/globals.css';

export default function Disclaimer() {
  return (
    <div className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          免責事項
        </h1>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">免責事項</h2>
          <p className="mt-6">
            *サイト名*（以下、「本サービス」と言います。）からのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
          </p>
          <p className="mt-6">
            また本サービスのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
          </p>
          <p className="mt-6">
            本サービスに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
        </div>
      </div>
    </div>
  );
}
