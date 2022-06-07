import { IProjectProps } from '../@types/projectProps.types';

const projects: IProjectProps[] = [
    {
        title: 'Clydomint',
        description:
            'ClydoMint is a Discord bot to mint NFTs while chatting on your favorite server.',
        logo: '/projects/Clydomint.svg',
        GitHub: 'https://github.com/buidler-hub/clydomint',
        tag: 'NFT',
        platform: 'discord',
        ProductHunt: 'https://www.producthunt.com/posts/clydomint',
    },
    {
        title: 'NFTank',
        description:
            'NFTank will allow you to quickly request NFTs to any address in just a few clicks',
        logo: '/projects/NFTank.svg',
        GitHub: 'https://github.com/buidler-hub/nftank',
        tag: 'NFT',
        platform: 'web | cli',
        ProductHunt: 'https://www.producthunt.com/posts/nftank',
    },
    {
        title: 'Rayli',
        description:
            'A minimal command-line interface tool to generate images of your code at lightning speed.',
        logo: '/projects/Rayli.svg',
        GitHub: 'https://github.com/buidler-hub/rayli',
        tag: 'CLI',
        platform: 'cli',
        ProductHunt: 'https://www.producthunt.com/posts/rayli',
    },
    {
        title: 'Snipli',
        description:
            'A minimal command-line interface to create GitHub gists of your local files at blazing fast speeds ⚡',
        logo: '/projects/Snipli.svg',
        GitHub: 'https://github.com/buidler-hub/snipli',
        tag: 'CLI',
        platform: 'cli',
        ProductHunt: 'https://www.producthunt.com/posts/snipli',
    },
];

export default projects;
