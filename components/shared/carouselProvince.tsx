'use client';
import * as React from 'react';
import { useGlobalStore } from '@/providers/global-store-providers';
import { Province } from '@/types/province.type';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

// data
import ProvinsiJawa from '@/mocks/provinsiJawa.json';
import ProvinsiKalimantan from '@/mocks/provinsiKalimantan.json';
import ProvinsiPapua from '@/mocks/provinsiPapua.json';
import ProvinsiSulawesi from '@/mocks/provinsiSulawesi.json';
import ProvinsiSumatra from '@/mocks/provinsiSumatra.json';

export default function CarouselProvince() {
  const { selectedProvince } = useGlobalStore((state) => state);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [dataProvince, setDataProvince] = React.useState<Province[]>(
    [] as Province[],
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    switch (selectedProvince) {
      case 'jawa':
        setDataProvince(ProvinsiJawa);
        break;
      case 'kalimantan':
        setDataProvince(ProvinsiKalimantan);
        break;
      case 'papua':
        setDataProvince(ProvinsiPapua);
        break;
      case 'sulawesi':
        setDataProvince(ProvinsiSulawesi);
        break;
      case 'sumatra':
        setDataProvince(ProvinsiSumatra);
        break;
      default:
        break;
    }
  }, [selectedProvince]);

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {dataProvince.map((item) => (
            <CarouselItem key={item.id}>
              <div className="flex flex-col gap-4 mt-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-center">
                  Sumber:{' '}
                  <a
                    href={item.source ?? ''}
                    target="_blank"
                    className="hover:text-blue-500"
                  >
                    {item.source}
                  </a>
                </p>
                {item.description.map((desc) => (
                  <p className="text-justify indent-10" key={desc}>
                    {desc}
                  </p>
                ))}
                {item.youtube && (
                  <iframe
                    className="mx-auto mt-4"
                    width="50%"
                    height="340"
                    src={`https://www.youtube.com/embed/${item.youtube}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Halaman {current} dari {count}
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button
          variant="default"
          onClick={() => {
            api?.scrollPrev();
          }}
        >
          Sebelumnya
        </Button>
        <Button
          variant="default"
          onClick={() => {
            api?.scrollNext();
          }}
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
}
