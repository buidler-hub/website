interface ProjectProps {
    title: string;
    desc: string;
    logo: string;
    tag: string;
    platform: 'web' | 'cli';
    ghUrl: string;
    phUrl: string;
}

export type { ProjectProps };
