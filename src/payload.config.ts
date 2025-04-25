import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import https from "https";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Events } from "./collections/Events";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Events, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      bucket: "cms",
      config: {
        endpoint: process.env.STORAGE_ENDPOINT,
        credentials: {
          accessKeyId: process.env.STORAGE_ACCESS_KEY_ID!,
          secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY!,
        },
        region: process.env.STORAGE_REGION!,
        forcePathStyle: true,
        requestHandler: new NodeHttpHandler({
          httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        }),
      },
      collections: {
        media: true,
      },
    }),
  ],
});
