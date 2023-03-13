import { Container } from '@/components/Container';

import classNames from 'classnames';

import { Button, Text } from '@geist-ui/core';
import Image from 'next/image';
import { ArrowRight } from '@geist-ui/icons';
import Link from 'next/link';
import styled from '@emotion/styled';

//처음 라우팅 안됐을 때 보여줄 페이지
export default function Home() {
  return (
    <Container
      className={classNames(
        'flex',
        'items-center',
        'justify-between',

        'sm:flex-col',
        'md:flex-col',
        'lg:flex-row',

        'mt-32'
      )}
    >
      {/* 좌측 텍스트 우측 이미지 */}
      <div
        className={classNames(
          'flex',
          'flex-col',
          'justify-center',
          'font-normal'
        )}
      >
        {/* 텍스트 내부 컨테이너 */}
        <span className={classNames('font-bold', 'text-sm', 'text-blue-300')}>
          Everything about our essentials tools
        </span>

        <Text h1 className={classNames('font-bold')}>
          Wellcome to Seoheung
        </Text>

        <Text span className={classNames('text-gray-500')}>
          In the upcoming spring, start fresh with Seoheung 😄
        </Text>

        <div className={classNames('mt-4')}>
          <Link href={'https://i09u.com/product/main.do'} target="_blank">
            <Button icon={<ArrowRight />} width={1.5} iconRight>
              Shop
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={classNames(
          'max-w-full w-fit',
          //image css
          'bg-[url("/images/back.png")]',
          'bg-center',
          'bg-contain',
          'bg-no-repeat'
        )}
      >
        <Image
          className={classNames('rounded-full', 'opacity-50', 'z-10')}
          src="/images/company.png"
          alt="company img"
          width={500}
          height={10}
        />
      </div>
    </Container>
  );
}
