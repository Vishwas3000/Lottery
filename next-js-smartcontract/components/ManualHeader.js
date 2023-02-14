import { useMoralis } from "react-moralis"

export default function Home() {
    const { enableWeb3 } = useMoralis()
    return <div>Hi from header</div>
}
