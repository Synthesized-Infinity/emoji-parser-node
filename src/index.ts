import EmojiRegEx from './EmojiRegEx'

export interface EmojiEntity {
    emoji: string,
    indices: number[],
    unicode: string,
}

/**
 * Function to get the unicode of the given Emoji
 * @param emoji emoji to get the unicode of
 * @returns unicode of the emoji
 */
export const emojiToUnicode = (emoji: string): string => {
    if (emoji.length === 1) return emoji.charCodeAt(0).toString(16)

    let comp = ((emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000)

    if (comp < 0) return emoji.charCodeAt(0).toString(16)

    return comp.toString(16)
}

/**
 * Function to parse emojis from text
 * @param text Text to parse emojis from
 */
 export const parse = (text: string): EmojiEntity[] => {
    const entities: EmojiEntity[] = [];
  
    EmojiRegEx.lastIndex = 0
        while(true) {
            const result = EmojiRegEx.exec(text)
            if (!result) break
  
            const emojiText = result[0]
  
            entities.push({
                emoji: emojiText,
                indices: [result.index, EmojiRegEx.lastIndex],
                unicode: emojiToUnicode(emojiText)
            })
        }
  
    return entities
  }