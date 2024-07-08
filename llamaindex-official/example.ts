import fs from "node:fs/promises";
import { Document, MetadataMode, NodeWithScore, VectorStoreIndex } from "llamaindex";

async function main() {
  // Load wassy from abramov.txt in Node
  const path = "node_modules/llamaindex/examples/abramov.txt";

  const essay = await fs.readFile(path, "utf-8");
}
