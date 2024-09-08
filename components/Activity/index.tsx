import '../../app/globals.css';
import { FireIcon } from '@heroicons/react/24/solid';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

export default function Activity() {
  const timeline = [
    {
      name: 'ディズニー視察',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '4月',
      dateTime: '2021-08',
    },
    {
      name: '夏合宿',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: '9月',
      dateTime: '2022-12',
    },
  ];

  const timeline_second = [
    {
      name: '輪読',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '4月',
      dateTime: '2021-08',
    },
    {
      name: 'ディベート',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: '9月',
      dateTime: '2022-12',
    },
  ];

  const timeline_third = [
    {
      name: 'ディベート',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '4月',
      dateTime: '2021-08',
    },
    {
      name: '就活報告メール',
      description:
        'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
      date: '9月',
      dateTime: '2021-12',
    },
    {
      name: 'コンテスト',
      description:
        'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
      date: '9月',
      dateTime: '2022-02',
    },
  ];

  const timeline_fourth = [
    {
      name: '卒業論文',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: '4月',
      dateTime: '2021-08',
    },
  ];
  const features = [
    {
      name: '輪読',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'ディベート',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: '就活報告メール',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: '卒業論文',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FingerPrintIcon,
    },
  ];
  return (
    <>
      <div className="">
        <div
          className="mx-auto max-w-7xl px-6 text-center lg:px-8"
          style={{ marginTop: '120px', marginBottom: '120px' }}
        >
          <h1 className="text-3xl font-bold">
            <div className="flex items-center pb-2 pt-2 mt-5">
              <FireIcon className="h-8 w-8 mr-2" aria-hidden="true" />
              <div className="text-black">活動内容</div>
            </div>
          </h1>
          <div className="">
            <div className="mx-auto max-w-7xl">
              <div className="">
                <p className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
                  主にこのような活動に力を入れています！
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                  Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget
                  egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p>
              </div>
              <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16 text-left">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <h1 className="text-3xl font-bold">
                <div className="flex items-center pb-2 pt-2 mt-5">
                  <FireIcon className="h-8 w-8 mr-2" aria-hidden="true" />
                  <div className="text-black">スケジュール</div>
                </div>
              </h1>
              <h1 className="text-xl font-bold">
                <div className="flex items-center pb-2 pt-2 mt-2">
                  <FireIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                  <div className="text-black">全学年共通</div>
                </div>
              </h1>
              <div className="mt-5">
                <div className="mx-auto max-w-7xl">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline.map((item) => (
                      <div key={item.name} className="text-left">
                        <time
                          dateTime={item.dateTime}
                          className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                        >
                          <svg
                            viewBox="0 0 4 4"
                            aria-hidden="true"
                            className="mr-4 h-1 w-1 flex-none"
                          >
                            <circle r={2} cx={2} cy={2} fill="currentColor" />
                          </svg>
                          {item.date}
                          <div
                            aria-hidden="true"
                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                          />
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h1 className="text-xl font-bold">
                <div className="flex items-center pb-2 pt-2 mt-2">
                  <FireIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                  <div className="text-black">2年生</div>
                </div>
              </h1>
              <div className="mt-5">
                <div className="mx-auto max-w-7xl">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline_second.map((item) => (
                      <div key={item.name} className="text-left">
                        <time
                          dateTime={item.dateTime}
                          className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                        >
                          <svg
                            viewBox="0 0 4 4"
                            aria-hidden="true"
                            className="mr-4 h-1 w-1 flex-none"
                          >
                            <circle r={2} cx={2} cy={2} fill="currentColor" />
                          </svg>
                          {item.date}
                          <div
                            aria-hidden="true"
                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                          />
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h1 className="text-xl font-bold">
                <div className="flex items-center pb-2 pt-2 mt-2">
                  <FireIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                  <div className="text-black">3年生</div>
                </div>
              </h1>
              <div className="mt-5">
                <div className="mx-auto max-w-7xl">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline_third.map((item) => (
                      <div key={item.name} className="text-left">
                        <time
                          dateTime={item.dateTime}
                          className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                        >
                          <svg
                            viewBox="0 0 4 4"
                            aria-hidden="true"
                            className="mr-4 h-1 w-1 flex-none"
                          >
                            <circle r={2} cx={2} cy={2} fill="currentColor" />
                          </svg>
                          {item.date}
                          <div
                            aria-hidden="true"
                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                          />
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h1 className="text-xl font-bold">
                <div className="flex items-center pb-2 pt-2 mt-2">
                  <FireIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                  <div className="text-black">4年生</div>
                </div>
              </h1>
              <div className="mt-5">
                <div className="mx-auto max-w-7xl">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline_fourth.map((item) => (
                      <div key={item.name} className="text-left">
                        <time
                          dateTime={item.dateTime}
                          className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                        >
                          <svg
                            viewBox="0 0 4 4"
                            aria-hidden="true"
                            className="mr-4 h-1 w-1 flex-none"
                          >
                            <circle r={2} cx={2} cy={2} fill="currentColor" />
                          </svg>
                          {item.date}
                          <div
                            aria-hidden="true"
                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                          />
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
