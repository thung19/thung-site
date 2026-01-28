import {FiMail, FiGithub, FiLinkedin} from "react-icons/fi";

type SocialLinkProps = {
    email: string;
    github: string;
    linkedin: string;
    size?: number;
}

export default function SocialLinks({ email, github, linkedin, size = 24 }: SocialLinkProps) {
    return (
        <div className="flex gap-5">
        <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="text-black/60 hover:text-black transition"
        >
            <FiMail size={size} />
        </a>

        <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-black/60 hover:text-black transition"
        >
            <FiGithub size={size} />
        </a>

        <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-black/60 hover:text-black transition"
        >
            <FiLinkedin size={size} />
        </a>
        </div>
    );
}