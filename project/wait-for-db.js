const { Client } = require("pg");

async function waitForDatabase(url, maxAttempts = 10, interval = 2000) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const client = new Client({ connectionString: url });
      await client.connect();
      console.log(`Successfully connected to database at ${url}`);
      await client.end();
      return true;
    } catch (err) {
      console.log(`Attempt ${attempt}/${maxAttempts}: Failed to connect to ${url}. Retrying in ${interval}ms...`);
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  }
  throw new Error(`Failed to connect to database at ${url} after ${maxAttempts} attempts`);
}

async function main() {
  const databases = [
    process.env.DATABASE_URL,
    process.env.BUSINESS_DATABASE_URL,
  ];

  for (const url of databases) {
    await waitForDatabase(url);
  }

  console.log("All databases are ready!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});