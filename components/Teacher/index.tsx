import '../../app/globals.css';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

export default function Teacher() {
  return (
    <div
      className="mx-auto max-w-7xl px-6 text-center lg:px-8"
      style={{ marginTop: '120px', marginBottom: '40px' }}
    >
      <h1 className="text-3xl font-bold">
        <div className="flex items-center pb-2 pt-2 mt-10">
          <AcademicCapIcon className="h-8 w-8 mr-2" aria-hidden="true" />
          <div>教授</div>
        </div>
      </h1>
      <div className="mt-10 mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
          I am Kan Suzuki
        </h1>
        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p className="text-lg leading-8 text-gray-600 text-left">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua
            ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Anim aute id magna
            aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
            Qui irure qui lorem cupidatat commodo.
          </p>
        </div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
          className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
