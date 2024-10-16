import { AppShell } from '@/components/shells/app-shell';

import { SectionHero } from './section-hero';
import { SectionLinks } from './section-links';
import { SectionNews } from './section-news';
import { SectionVideos } from './section-videos';

const HomeContent = () => {
    return (
        <div className='bg-background'>
            <AppShell>
                <SectionHero />
                <SectionLinks />
                <SectionNews />
                <SectionVideos />
            </AppShell>
        </div>
    );
};

export { HomeContent };
