import Image from 'next/image'
import Link from 'next/link'
import { Nunito } from '@next/font/google'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main} >
      <div className={'hoppful-logo-container'}>
        <Link href="/login">
          <Image className={'image'} src="/hoppful_logo.png" width={'400'} height={'400'} alt="Hoppful" />
        </Link>
      </div>
    </main>
  )
}
