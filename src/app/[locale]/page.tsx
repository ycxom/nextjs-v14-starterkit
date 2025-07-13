'use client'

import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('Homepage')

  return (
    <div>
      {/* 顶部区域现在是透明的，以显示 body 的背景图 */}
      <section
        className='relative flex min-h-[70vh] flex-col items-center justify-center py-32 text-white'
      >
        {/* 添加一个半透明的黑色遮罩层，并带有模糊效果，以确保文字的可读性 */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        {/* 所有内容都放在一个相对定位的容器中，并设置 z-index 以确保在遮罩层之上 */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <h1 className='text-center text-5xl font-extrabold leading-tight drop-shadow-lg md:text-7xl'>
            {t('FRPS_Server_Title')}
          </h1>
          <div className='my-6 max-w-2xl text-center text-xl text-gray-200 drop-shadow-md md:text-2xl'>
            {t('frps_server_description')}
          </div>
          <div className='mt-4 flex flex-col gap-4 sm:flex-row'>
            <a
              href='https://ycxom.top'
              target='_blank'
              rel="noopener noreferrer"
            >
              <Button rounded size='large'>
                {t('Go_to_homepage')}
              </Button>
            </a>
            <a
              href='https://github.com/fatedier/frp'
              target='_blank'
              rel="noopener noreferrer"
            >
              <Button rounded size='large' variant='secondary'>
                {t('Learn_More')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 这个区域有自己的背景色，会覆盖掉 body 的背景图 */}
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-1 gap-10 px-8 py-5 md:grid-cols-3 md:gap-7'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Approachable')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Add_components_without_sending_additional_client_side_JavaScript_Built_on_the_latest_React_features'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Versatile')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Automatic_Image_Font_and_Script_Optimizations_for_improved_UX_and_Core_Web_Vitals'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Performant')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'A_rich_incredibly_adoptable_template_that_scales_between_a_small_showcase_website_and_a_full_size_app'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
