curl "https://nextjs-pokemon-models-re2l13at1-e-pin.vercel.app/api/revalidate" \
  -X POST \
  -H "Content Type: application/json" \
  -d "[\"/pokemon/1\"]"