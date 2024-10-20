type News = {
    title: string;
    category: string;
    image: string;
};

const categories = ['Layanan', 'Pengumuman', 'Informasi'];
const images = [1, 2, 3, 4];

const newsData: News[] = [
    {
        title: 'Fuga maiores illo, repellat quo totam nesciunt amet consectetur excepturi neque nulla. Tempora deleniti eligendi explicabo iste!',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Excepturi deleniti, vitae dolorem qui, eligendi sapiente quibusdam veritatis architecto repellat perspiciatis debitis fugit nemo ex nobis.',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Blanditiis neque assumenda, quo excepturi dolores laudantium sapiente error rerum quidem asperiores modi in itaque obcaecati accusamus.',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Sunt blanditiis exercitationem beatae quibusdam fugiat, tenetur iste illum saepe, repudiandae enim, labore dicta minima tempora libero?',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Veniam iusto aliquam dicta quo ipsum doloribus molestiae corrupti voluptas facere eos, hic, quasi, deleniti error alias.',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Asperiores est ad odio iusto, molestiae delectus atque inventore natus quae nobis velit itaque ducimus iste sint!',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Ipsa corporis et optio atque assumenda est pariatur nam asperiores. Quae fuga fugit aliquam eos dolorem architecto!',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Quae, cumque rerum omnis, animi, fugit vel nesciunt eius in libero reprehenderit voluptate aperiam aut expedita accusamus.',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Beatae reiciendis aliquid voluptate nulla, molestias fugiat rerum modi sapiente ea, necessitatibus minus dolorum provident! Dolore, reiciendis.',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Voluptatibus dicta dolores fuga vel eos, molestiae omnis praesentium expedita repudiandae nisi et quos nemo illo voluptates!',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Officia quia molestiae quidem veritatis et hic autem libero, nulla voluptatum fugiat quaerat. Tempore fugiat ratione aut!',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Quod cumque quasi dolore quia cupiditate labore fuga nulla aperiam quo? Incidunt corrupti nesciunt et rem expedita.',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Nobis aspernatur, ipsum fuga, nemo, laudantium rerum culpa neque sequi sapiente tempore rem iusto fugit pariatur hic.',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Consectetur doloribus esse amet quae recusandae a delectus praesentium facilis quos vero cupiditate, debitis exercitationem distinctio impedit.',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
    {
        title: 'Aliquam, vero blanditiis illum voluptas delectus molestias veritatis deserunt repellat dignissimos sed debitis saepe tempora fugiat amet!',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `/images/news-${images[Math.floor(Math.random() * images.length)]}.png`,
    },
];

export { newsData };
