import "./globals.css"
import { MoralisProvider } from "react-moralis"

export default function RootLayout({ children }) {
    return (
        <MoralisProvider>
            <html lang="en">
                {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
                <head />
                <body>{children}</body>
            </html>
        </MoralisProvider>
    )
}
