interface IProjectProps {
    title: string;
    description: string;
    logo: string;
    tag: string;
    platform: 'web' | 'cli' | 'discord' | 'web | cli';
    GitHub: string;
    ProductHunt: string;
}

export type { IProjectProps };
