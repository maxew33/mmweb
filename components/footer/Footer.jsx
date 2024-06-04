import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faLinkedin,
    faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Wave from '../wave/wave'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Wave color={'var(--secondary)'} />
            <div className={styles.footerWrapper}>
                <Link href="/" className={styles.logoWrapper}>
                    <Image
                        src="/assets/logo.webp"
                        width={120}
                        height={120}
                        alt="logo de techquest"
                        className={styles.logo}
                    />
                    M.Malfilâtre
                </Link>
                <span className={styles.copyright}>
                    ©Maxime Malfilâtre 2024
                </span>
                <Link
                    href="/service"
                    className={`${styles.solutions} ${styles.link}`}
                >
                    Services
                </Link>
                <Link
                    href="/legal"
                    className={`${styles.legal} ${styles.link}`}
                >
                    Mentions Légales
                </Link>
                <Link
                    href="/contact"
                    className={`${styles.contact} ${styles.link}`}
                >
                    contact
                </Link>
                <div className={styles.social}>
                    <a
                        href="https://www.facebook.com/profile.php?id=61559959007115"
                        target="_blank"
                        rel="noopener"
                        aria-label="facebook"
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className={styles.icon}
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/maxew.dev/"
                        aria-label="instagram"
                        target="_blank"
                        rel="noopener"
                    >
                        <FontAwesomeIcon
                            icon={faSquareInstagram}
                            className={styles.icon}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/maxime-malfilatre-ei/"
                        aria-label="Linkedin"
                        target="_blank"
                        rel="noopener"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className={styles.icon}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}
