import '../../app/globals.css';
import {
  UserIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

export default function Member() {
  const stats = [
    { id: 1, name: '2年生', value: '10人' },
    { id: 2, name: '3年生', value: '15人' },
    { id: 3, name: '4年生', value: '18人' },
  ];
  const people = [
    {
      name: '城下 くうが',
      role: 'ゼミ長',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      // xUrl: '#',
      description:
        '秋の風が頬に触れると、木々の葉が赤や黄に染まり、道端に落ちた葉のカサカサとした音が響く。澄んだ空の下を歩いていると、遠くから小鳥のさえずりが聞こえてきて、心が和む瞬間だ。',
    },
    {
      name: '小栗 ともたか',
      role: '副ゼミ長',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      // xUrl: '#',
      description:
        '秋の風が頬に触れると、木々の葉が赤や黄に染まり、道端に落ちた葉のカサカサとした音が響く。澄んだ空の下を歩いていると、遠くから小鳥のさえずりが聞こえてきて、心が和む瞬間だ。',
    },
    {
      name: '近藤 れおん',
      role: 'イベント',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      // xUrl: '#',
      description:
        '秋の風が頬に触れると、木々の葉が赤や黄に染まり、道端に落ちた葉のカサカサとした音が響く。澄んだ空の下を歩いていると、遠くから小鳥のさえずりが聞こえてきて、心が和む瞬間だ。',
    },
    {
      name: '服部 みさき',
      role: '広報',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      // xUrl: '#',
      description:
        '秋の風が頬に触れると、木々の葉が赤や黄に染まり、道端に落ちた葉のカサカサとした音が響く。澄んだ空の下を歩いていると、遠くから小鳥のさえずりが聞こえてきて、心が和む瞬間だ。',
    },
    {
      name: '高野 あらた',
      role: '運営',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      // xUrl: '#',
      description:
        '秋の風が頬に触れると、木々の葉が赤や黄に染まり、道端に落ちた葉のカサカサとした音が響く。澄んだ空の下を歩いていると、遠くから小鳥のさえずりが聞こえてきて、心が和む瞬間だ。',
    },
    {
      name: '大谷 はるき',
      role: '渉外',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      // xUrl: '#',
      description:
        '秋の風が頬に触れると、木々の葉が赤や黄に染まり、道端に落ちた葉のカサカサとした音が響く。澄んだ空の下を歩いていると、遠くから小鳥のさえずりが聞こえてきて、心が和む瞬間だ。',
    },
  ];
  return (
    <>
      <div className="">
        <div
          className="main_side mx-auto max-w-7xl px-6 text-center lg:px-8"
          style={{ marginTop: '120px', marginBottom: '120px' }}
        >
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-5">
              <AcademicCapIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>教授</div>
            </div>
          </h1>
          <div className="mt-10 mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto text-left">
              鈴木 寛
            </h1>
            <div className="u_tablet_teacher_p mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 text-left">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna
                aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Anim aute id
                magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non
                deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </p>
            </div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              className="u_tablet_teacher_img aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none xl:row-span-2 xl:row-end-2"
            />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>

          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-10">
              <UserGroupIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>人数</div>
            </div>
          </h1>

          <div className="bg-white mt-10">
            <div className="mx-auto max-w-7xl">
              <dl className="grid grid-cols-3 gap-x-8 gap-y-16 text-center">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-10">
              <CheckBadgeIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div>代表者</div>
            </div>
          </h1>

          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl px-8 py-10 border border-gray-300">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-500">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-green-500">{person.role}</p>
                <p className="text-sm leading-6 text-left text-gray-400">{person.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
