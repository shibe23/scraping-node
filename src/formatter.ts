interface FormatterTypes {
  format: (str: string) => string;
}

export const formatter: FormatterTypes = {
  format(str: string) {
    const result: RegExpMatchArray | null = str.match(/<title>(.*)<\/title>/);
    // マッチする文字列がない場合は空文字を返す
    return result ? result[1] : '';
  },
};
