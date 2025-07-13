'use client'
import { Link } from '@/src/navigation'
import myLogo from '@/src/app/my-logo.png'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='relative z-50 mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <div className='flex h-14 w-14 items-center justify-center'>
            <Image
              src={myLogo}
              alt='Logo'
              width={48}
              height={48}
              className='rounded-full object-contain'
            />
          </div>
          <strong className='mx-2 select-none'>ycxom</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href='https://github.com/ycxom/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
