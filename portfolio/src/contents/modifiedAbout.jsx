import { about_2, about_3, about_4 } from './about'

// Utility function to style specific words
const styleWords = (content, positions, style) => {
    const words = content.split(' ');
    return words.map((word, index) => {
        if (positions.includes(index)) {
            return <span key={index} style={style}>{word} </span>;
        }
        return <span key={index}>{word} </span>;
    });
};


// Styled content for about_2 and about_3
const modifiedAbout_2 = [
    {
        id: 'cont2',
        content2: styleWords(about_2[0].content2, [20, 21, 24, 25, 26, 32, 33, 47], { color: '#64ffda' })
    }
];

const modifiedAbout_3 = [
    {
        id: 'cont3',
        content3: styleWords(about_3[0].content3, [14, 15, 17, 26, 27, 35, 36 ], { color: '#64ffda' })
    }
];

const modifiedAbout_4 = [
    {
        id: 'cont4',
        content3: styleWords(about_4[0].content_4, [14, 15, 21 ], { color: '#64ffda' })
    }
];



// Export the modified content
export { modifiedAbout_2, modifiedAbout_3, modifiedAbout_4 };
