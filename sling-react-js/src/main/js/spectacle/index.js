import dynamic from 'next/dynamic'

const DynamicDeck = dynamic(import('./deck'), {
    ssr: false
});

const DynamicHeading = dynamic(import('./heading'), {
    ssr: false
});

const DynamicText = dynamic(import('./text'), {
    ssr: false
});

export default {
    Deck: DynamicDeck,
    Heading: DynamicHeading,
    Text: DynamicText
}