import Link from "next/link"
import Image from "next/image"
import router, { useRouter } from "next/router"
import classNames from "classnames"
import { useEffect, useState } from "react"

export const Logo = () => {
  const [iseng, setIsEng] = useState('/');
  const router = useRouter();
  
  useEffect(() => {

    setIsEng(router.pathname.slice(0,3) === '/en' ? '/en' : '/')
  }, [router.pathname])

  return (
    <Link
      href={iseng}
      className={classNames(
        'text-white',
        'font-bold',
        'text-xl',
        'flex',
      )}>
      <Image src='/images/logo.png' width={50} height={50} alt={'로고'} />

      {iseng  === '/en' ? 'Seoheung' : '서흥공구'}
    </Link>
  )
}
