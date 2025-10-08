const extractFrontMatter = (text) => {
    const frontMatter = {};

    const frontMatterRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m);
    const rawFrontMatter = frontMatterRegExp.exec(text);

    if (!!rawFrontMatter) {
      let content;
      // rawMatter[1] is the stuff between "---"
      content = rawFrontMatter[1].split("\n");

      content.forEach((keyValue) => {
        // create object from keyValues
        const [key, value] = keyValue.split(":");
        frontMatter[key] = value?.trim();
      });
    }
    return [rawFrontMatter, frontMatter];
};

export default extractFrontMatter;