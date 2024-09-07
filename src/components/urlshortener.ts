// write an arrow function to shorten input url and return  value
const shortenUrl = (url: string) => {
  const shortener = "https://tinyurl.com/create.php";
  const encodedUrl = encodeURIComponent(url);
  return `${shortener}?url=${encodedUrl}`;
};

export default shortenUrl;
