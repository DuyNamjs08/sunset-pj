export const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};
export const getFirstValidImage = (htmlString) => {
  const regex = /<img[^>]+srcSet="([^">]+)"/gi;
  let match;
  let firstImageUrl = null;
  while ((match = regex.exec(htmlString)) !== null) {
    const srcSet = match[1];
    const imageUrls = srcSet.split(",");
    if (imageUrls.length > 0) {
      firstImageUrl = imageUrls[0].trim().split(" ")[0];
      break;
    }
  }
  return firstImageUrl;
};
