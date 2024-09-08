import '../../app/globals.css';
import { ShieldExclamationIcon } from '@heroicons/react/24/solid';

export default function Disclaimer() {
  return (
    <div
      className="mx-auto max-w-7xl px-6 lg:px-8"
      style={{ marginTop: '120px', marginBottom: '40px' }}
    >
      <div className="mx-auto text-base leading-7">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
        <h1 className="text-3xl font-bold">
          <div className="flex items-center pb-2 pt-2 mt-5">
            <ShieldExclamationIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div className="text-black">免責事項</div>
          </div>
        </h1>
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">免責事項について</h2>
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
