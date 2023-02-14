import { Inter } from "@next/font/google"
import styles from "./page.module.css"
import ManualHeader from "../../components/ManualHeader"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main className={styles.main}>
            <ManualHeader />
        </main>
    )
}
