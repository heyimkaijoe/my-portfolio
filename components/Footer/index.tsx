import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-prheart-200 dark:bg-prheart-700 mt-20 py-4 text-prheart-800 dark:text-prheart-200">
            <div className="flex justify-center gap-4 mb-2">
                <a href="https://github.com/heyimkaijoe" className="social-link">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
                <a href="https://www.linkedin.com/in/kchsutwtpe/" className="social-link">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
            </div>

            © 2024 Kevin Hsu. All rights reserved.
        </footer>
    );
}
