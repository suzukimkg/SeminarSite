import '../../app/globals.css';

export default function Copyright() {
  return (
    <div className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">著作権</h1>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">著作権について</h2>
          <p className="mt-6">
            *サイト名*（以下、「本サービス」と言います。）のコンテンツ（写真や画像、文章など）の著作権につきましては、
            原則として本サービスに帰属しており、無断転載することを禁止します。
          </p>
          <p className="mt-8">
            本サービスのコンテンツを利用したい場合は、別途お問い合わせください。
          </p>
          <p className="mt-8">
            本サービスは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、
            <a href="/contact">お問い合わせ</a>
            よりご連絡ください。迅速に対応いたします。
          </p>
        </div>
      </div>
    </div>
  );
}
