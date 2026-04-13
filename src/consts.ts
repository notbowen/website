import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
        NAME: "Hu Bowen",
        EMAIL: "contact@hubowen.dev",
        NUM_POSTS_ON_HOMEPAGE: 3,
        NUM_EDUCATIONS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
        TITLE: "Home",
        DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
        TITLE: "Blog",
        DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESUME: Metadata = {
	TITLE: "Resume",
	DESCRIPTION: "Hu Bowen's resume.",
};

export const EDUCATION: Metadata = {
        TITLE: "Education",
        DESCRIPTION: "Where I have studied at and what I have done.",
};

export const SOCIALS: Socials = [
        {
                NAME: "notbowen",
                HREF: "https://github.com/notbowen",
                ICON: "github",
        },
        {
                NAME: "hubowen",
                HREF: "https://www.linkedin.com/in/hubowen",
                ICON: "linkedin",
        },
];
