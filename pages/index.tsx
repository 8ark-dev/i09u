
import { Container } from '@/components/Container'

import classNames from 'classnames'
import { Text } from '@geist-ui/core'
import { ForienToggle } from '@/components/Toggle'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//처음 라우팅 안됐을 때 보여줄 페이지
export default function Home() {
  const router = useRouter();

  return (
    <Container
      className={classNames(
        'w-full', 'h-full',
      )}
    >

      <Text
        className={classNames('font-bold')}
      >안녕하세요, 서흥공구입니다</Text>

      <ForienToggle />
    </Container>
  )
}
