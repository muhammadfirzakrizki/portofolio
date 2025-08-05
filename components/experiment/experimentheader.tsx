import AnimatedSectionHeader from '@/components/animated/animatedsectionheader'
import AnimatedParagraph from '@/components/animated/animatedparagraph'
import { useTranslations } from 'next-intl'

export default function ExperimentHeader() {
    const t = useTranslations('experiment')

    return (
        <header>
            <div className="w-full max-w-3xl">
                <AnimatedSectionHeader
                    title={t('title')}
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 drop-shadow-sm"
                />
                <AnimatedParagraph delay={0.2}>
                    {t('description')}
                </AnimatedParagraph>
            </div>
        </header>
    )
}