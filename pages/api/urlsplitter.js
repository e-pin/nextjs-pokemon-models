// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let urls = [];
  for (const url of req.body) {
    urls.push(url);
  }
  res.status(200).json(urls);
}
