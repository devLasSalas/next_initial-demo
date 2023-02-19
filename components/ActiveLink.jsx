import { useRouter } from "next/router"
import Link from "next/link"


const styles = {
    color: '#0070f3',
    textDecoration: 'underline',
}

export const ActiveLink = ({ text, href }) => {
  

    const { asPath } = useRouter();

    return (
    <Link legacyBehavior href={ href }>
        <a style={ asPath === href ? styles : null }>{ text }</a>
    </Link>
    
  )
}
