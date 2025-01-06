import { useState, useEffect } from 'react';

export function useTypingAnimation(words, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 1000) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout =''

        const animateText = () => {
            const currentWord = words[currentWordIndex];

            if (!isDeleting) {
                setCurrentText(prev => currentWord.slice(0, prev.length + 1));

                if (currentText === currentWord) {
                    setIsDeleting(true);
                    timeout = setTimeout(animateText, pauseDuration);
                    return;
                }
            } else {
                setCurrentText(prev => prev.slice(0, -1));

                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }

            timeout = setTimeout(animateText, isDeleting ? deletingSpeed : typingSpeed);
        };

        timeout = setTimeout(animateText, 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return currentText;
}

