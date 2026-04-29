import { useEffect, useState } from "react";

/**
 * Cycles through a list of phrases, typing each character then deleting.
 *
 * @param {string[]} words           — phrases to cycle through
 * @param {object}   [options]
 * @param {number}   [options.typeSpeed=80]
 * @param {number}   [options.deleteSpeed=40]
 * @param {number}   [options.pause=1500]   — pause when a word is fully typed
 */
export default function useTypewriter(
  words = [],
  { typeSpeed = 80, deleteSpeed = 40, pause = 1500 } = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];
    const isWordComplete = !isDeleting && text === currentWord;
    const isWordEmpty = isDeleting && text === "";

    let timeout;

    if (isWordComplete) {
      // Pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isWordEmpty) {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      // Either typing or deleting one character
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        isDeleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
