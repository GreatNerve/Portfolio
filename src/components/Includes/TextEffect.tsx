"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

interface WordType {
  text: string;
  className?: string;
}

interface TypingEffectProps {
  text?: string;
  word?: WordType[];
  className?: string;
  cursorClass?: string;
  startOnView?: boolean;
  onComplete?: () => void;
  rerun?: boolean;
  delay?: number;
  run?: boolean;
  duration?: number;
  typingMode?: "character" | "word" | "chunk" | "auto";
  cursor?: boolean;
  chunkSize?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text = "",
  word = [],
  className = "",
  cursorClass = "",
  startOnView = true,
  onComplete,
  rerun = false,
  delay = 0,
  run = true,
  duration = 2000,
  typingMode = "character",
  cursor = true,
  chunkSize = 5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [textContent, setTextContent] = useState<React.ReactNode[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const useWordProp = word.length > 0;
  const fullText = useMemo(
    () => (useWordProp ? word.map((w) => w.text).join(" ") : text),
    [useWordProp, word, text]
  );

  const effectiveTypingMode = useMemo(() => {
    if (typingMode !== "auto") return typingMode;
    const textLength = fullText.length;
    if (textLength > 500) return "chunk";
    if (textLength > 100) return "word";
    return "character";
  }, [typingMode, fullText]);

  const getTypingConfig = useMemo(() => {
    let effectiveDuration = duration;
    const textLength = fullText.length;

    if (textLength > 500) {
      effectiveDuration = Math.min(duration, Math.max(1000, 10 * Math.sqrt(textLength)));
    }

    if (effectiveTypingMode === "character") {
      return { delay: Math.max(5, effectiveDuration / textLength), itemCount: textLength };
    } else if (effectiveTypingMode === "word") {
      const wordCount = useWordProp ? word.length : fullText.split(" ").length;
      return { delay: Math.max(20, effectiveDuration / wordCount), itemCount: wordCount };
    } else {
      const chunkCount = Math.ceil(textLength / chunkSize);
      return { delay: Math.max(10, effectiveDuration / chunkCount), itemCount: chunkCount };
    }
  }, [fullText, duration, effectiveTypingMode, useWordProp, word, chunkSize]);

  const typeText = async () => {
    setIsTyping(true);

    let currentTextContent: React.ReactNode[] = [];
    let textIndex = 0;
    const paragraphs = fullText.split("\n"); // Handle new lines

    for (const paragraph of paragraphs) {
      if (textIndex > 0) {
        currentTextContent.push(<br key={`br-${textIndex}`} />);
      }

      if (effectiveTypingMode === "character") {
        for (const char of paragraph) {
          await new Promise((resolve) => setTimeout(resolve, getTypingConfig.delay));
          currentTextContent.push(<span key={`char-${textIndex}`}>{char}</span>);
          setTextContent([...currentTextContent]);
          textIndex++;
        }
      } else if (effectiveTypingMode === "word") {
        const words = paragraph.split(" ");
        for (const word of words) {
          await new Promise((resolve) => setTimeout(resolve, getTypingConfig.delay));
          currentTextContent.push(<span key={`word-${textIndex}`}>{word} </span>);
          setTextContent([...currentTextContent]);
          textIndex++;
        }
      } else {
        const chars = paragraph.split("");
        let i = 0;
        while (i < chars.length) {
          await new Promise((resolve) => setTimeout(resolve, getTypingConfig.delay));
          const chunk = chars.slice(i, i + chunkSize).join("");
          currentTextContent.push(<span key={`chunk-${textIndex}`}>{chunk}</span>);
          setTextContent([...currentTextContent]);
          i += chunkSize;
          textIndex++;
        }
      }
    }

    setIsTyping(false);
    setHasRun(true);
    onComplete?.();
  };

  useEffect(() => {
    if (isInView && startOnView && run && !hasRun) {
      const timer = setTimeout(() => typeText(), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, run, delay]);

  useEffect(() => {
    if (rerun && run) {
      setTextContent([]);
      setHasRun(false);
      const timer = setTimeout(() => typeText(), delay);
      return () => clearTimeout(timer);
    }
  }, [rerun]);

  return (
    <span ref={ref} className={className}>
      {textContent}
      {cursor && (
        <motion.span
          className={`inline-block w-2 h-4 bg-black ${cursorClass}`}
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
        />
      )}
    </span>
  );
};

export default TypingEffect;
