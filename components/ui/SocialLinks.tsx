"use client";

import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

type SocialLinkProps = {
  email: string;
  github: string;
  linkedin: string;
  size?: number;
};

function SocialLink({
  href,
  label,
  children,
  target,
  rel,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={target}
      rel={rel}
      className="inline-flex items-center gap-2"
      style={{
        fontSize: "0.875rem",
        fontWeight: 500,
        color: "#05537a",
        textDecoration: "underline",
        textDecorationColor: "#51e0cd",
        textUnderlineOffset: "3px",
        transition: "all 300ms cubic-bezier(0.215, 0.61, 0.355, 1)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#066899")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#05537a")}
    >
      {children}
    </a>
  );
}

export default function SocialLinks({ email, github, linkedin, size = 15 }: SocialLinkProps) {
  return (
    <div className="flex items-center flex-wrap" style={{ gap: "1.5rem" }}>
      <SocialLink href={`mailto:${email}`} label="Email">
        <FiMail size={size} />
        Email
      </SocialLink>
      <SocialLink href={github} label="GitHub" target="_blank" rel="noreferrer">
        <FiGithub size={size} />
        GitHub
      </SocialLink>
      <SocialLink href={linkedin} label="LinkedIn" target="_blank" rel="noreferrer">
        <FiLinkedin size={size} />
        LinkedIn
      </SocialLink>
    </div>
  );
}
