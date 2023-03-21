class Strings {
  /**
   *
   * @param str The given string to tuncrate
   * @param len The resulting substring length
   * @returns Truncated substring with length `len`
   */
  static truncate = (str: string, len: number): string =>
    `${str.substring(0, Math.min(str.length, len))}...`;

  /**
   *
   * @param str The given string to trucante
   * @param char The substring at which its first occurrence truncate
   * @param maxLen The max length at which to truncate if `char` is not found
   * @returns
   */
  static truncateAt = (str: string, char: string, maxLen = 25): string =>
    `${str.substring(
      0,
      Math.min(
        str.length,
        str.indexOf(char) <= 0 ? maxLen : str.indexOf(char),
        maxLen
      )
    )}...`;
}

export default Strings;
