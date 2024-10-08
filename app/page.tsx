'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const revalidate = 60;

export default function Page() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: false,
  };

  const slides = [
    {
      mobile: '/images/top/mobile/1.jpeg',
      tablet: '/images/top/tablet/1.jpeg',
      desktop: '/images/top/pc/1.jpeg',
      text: '9月の夏合宿ではBBQを楽しみました！',
    },
    {
      mobile: '/images/top/mobile/1.jpeg',
      tablet: '/images/top/tablet/1.jpeg',
      desktop: '/images/top/pc/1.jpeg',
      text: '9月の夏合宿ではBBQを楽しみました！',
    },
    {
      mobile: '/images/top/mobile/1.jpeg',
      tablet: '/images/top/tablet/1.jpeg',
      desktop: '/images/top/pc/1.jpeg',
      text: '9月の夏合宿ではBBQを楽しみました！',
    },
  ];

  const products = [
    {
      id: 1,
      name: '活動内容',
      href: '/activity',
      imageSrc: '/images/top/2A551869-3AA7-41BF-B32D-ECEF06ECC2C8_1_201_a.jpeg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
      id: 1,
      name: '組織',
      href: '/member',
      imageSrc: '/images/top/2A551869-3AA7-41BF-B32D-ECEF06ECC2C8_1_201_a.jpeg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
      id: 1,
      name: '選考',
      href: '/selection',
      imageSrc: '/images/top/2A551869-3AA7-41BF-B32D-ECEF06ECC2C8_1_201_a.jpeg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
      id: 1,
      name: 'お問い合わせ',
      href: '/contact',
      imageSrc: '/images/top/2A551869-3AA7-41BF-B32D-ECEF06ECC2C8_1_201_a.jpeg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
  ];

  return (
    <>
      <div style={{ marginTop: '80px' }}>
        <div className="p-5 font-bold">申し訳ございません。作成途中です！ by高野</div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <picture>
                <source media="(max-width: 600px)" srcSet={slide.mobile} />
                <source media="(min-width: 601px) and (max-width: 1024px)" srcSet={slide.tablet} />
                <source media="(min-width: 1025px)" srcSet={slide.desktop} />
                <img
                  src={slide.desktop}
                  alt=""
                  className="w-full max-w-none flex-none bg-gray-50 object-cover"
                />
              </picture>
              {/* <div className="absolute bottom-8 right-8 SlideText font-bold z-100 text-white">
                <p>{slide.text}</p>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>

      <div style={{ padding: '0 24px 24px 24px' }}>
        <div className="relative bg-white">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl main_side">
            <div className="TopSubTitle mt-20 font-bold text-center">消費者行動 × 企業戦略</div>
            <div className="TopSubTitleText m-auto mt-5">
              鈴木ゼミナールでは、日ごろの購買行動について解明を試み、『消費者の視点』と、消費者を引きつけて商品を買ってもらうための戦略を策定する『企業の視点』の双方を理解することに努めています。経営学部内のゼミや他大学との交流を通じて、消費者行動学を追求します。
            </div>
            <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="h-full w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <a href={product.href}>
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center"
                      />
                    </a>
                    <div className="ActivityText absolute top-5 left-5 text-2xl font-bold">
                      <p>{product.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
