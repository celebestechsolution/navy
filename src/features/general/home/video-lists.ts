type Video = {
    title: string;
    length: string;
    thumbnail: string;
};

const videoLists: Video[] = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus.',
        thumbnail: '/images/video-1.png',
        length: '3:08',
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam blanditiis tempora?',
        thumbnail: '/images/video-2.png',
        length: '4:29',
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi quia illum magni corporis aliquam.',
        thumbnail: '/images/video-3.jpg',
        length: '7:02',
    },
];

export { videoLists };
