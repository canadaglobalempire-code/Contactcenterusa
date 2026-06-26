const INDEXNOW_KEY = "a557b295d6634c5092cf372156e85977";
const INDEXNOW_HOST = "contactcenterusa.com";
const INDEXNOW_KEY_LOCATION = `https://contactcenterusa.com/${INDEXNOW_KEY}.txt`;

interface IndexNowResponse {
  status: number;
  statusText: string;
}

export async function submitToIndexNow(
  urls: string[]
): Promise<IndexNowResponse> {
  const body = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls.map((url) =>
      url.startsWith("http") ? url : `https://${INDEXNOW_HOST}${url}`
    ),
  };

  const res = await fetch("https://api.indexnow.org", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return { status: res.status, statusText: res.statusText };
}

async function main() {
  const urls = process.argv.slice(2);
  if (urls.length === 0) {
    console.log(
      "Usage: npx tsx scripts/indexnow.ts <url1> [url2] [url3] ...\n" +
        "Example: npx tsx scripts/indexnow.ts / /services /solutions /industries"
    );
    process.exit(1);
  }

  console.log(`Submitting ${urls.length} URL(s) to IndexNow...`);
  for (const url of urls) {
    console.log(`  - ${url}`);
  }

  try {
    const result = await submitToIndexNow(urls);
    if (result.status === 200) {
      console.log(`\nSuccess! All URLs submitted.`);
    } else {
      console.error(`\nError: ${result.status} ${result.statusText}`);
    }
  } catch (err) {
    console.error("Network error:", err);
    process.exit(1);
  }
}

main();
