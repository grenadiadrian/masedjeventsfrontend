import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from '@/styles/404.module.css'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>😒 Oof...this is awkward. Sorry, page doesn't exist. 😳</h4>
        <Link href='/'>Return to Home</Link>
      </div>
    </Layout>
  )
}
