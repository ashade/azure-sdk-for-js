/* 
 Setup: Enter your storage account name and shared key in main()
*/

const {
  Aborter,
  BlobClient,
  BlockBlobClient,
  ContainerClient,
  BlobServiceClient,
  StorageClient,
  SharedKeyCredential,
  AnonymousCredential,
  TokenCredential
} = require("../.."); // Change to "@azure/storage-blob" in your package

async function main() {
  // Enter your storage account name and shared key
  const account = "";
  const accountKey = "";

  // Use SharedKeyCredential with storage account and account key
  const sharedKeyCredential = new SharedKeyCredential(account, accountKey);

  // Use TokenCredential with OAuth token
  const tokenCredential = new TokenCredential("token");
  tokenCredential.token = "renewedToken"; // Renew the token by updating token field of token credential

  // Use AnonymousCredential when url already includes a SAS signature
  const anonymousCredential = new AnonymousCredential();

  // Use sharedKeyCredential, tokenCredential or anonymousCredential to create a pipeline
  const pipeline = StorageClient.newPipeline(sharedKeyCredential);

  // List containers
  const blobServiceClient = new BlobServiceClient(
    // When using AnonymousCredential, following url should include a valid SAS or support public access
    `https://${account}.blob.core.windows.net`,
    pipeline
  );

  let marker;
  do {
    const listContainersResponse = await blobServiceClient.listContainersSegment(
      Aborter.none,
      marker
    );

    marker = listContainersResponse.nextMarker;
    for (const container of listContainersResponse.containerItems) {
      console.log(`Container: ${container.name}`);
    }
  } while (marker);

  // Create a container
  const containerName = `newcontainer${new Date().getTime()}`;
  const containerClient = ContainerClient.fromBlobServiceClient(blobServiceClient, containerName);

  const createContainerResponse = await containerClient.create(Aborter.none);
  console.log(
    `Create container ${containerName} successfully`,
    createContainerResponse.requestId
  );

  // Create a blob
  const content = "hello";
  const blobName = "newblob" + new Date().getTime();
  const blobClient = BlobClient.fromContainerClient(containerClient, blobName);
  const blockBlobClient = BlockBlobClient.fromBlobClient(blobClient);
  const uploadBlobResponse = await blockBlobClient.upload(
    Aborter.none,
    content,
    content.length
  );
  console.log(
    `Upload block blob ${blobName} successfully`,
    uploadBlobResponse.requestId
  );

  // List blobs
  marker = undefined;
  do {
    const listBlobsResponse = await containerClient.listBlobFlatSegment(
      Aborter.none,
      marker
    );

    marker = listBlobsResponse.nextMarker;
    for (const blob of listBlobsResponse.segment.blobItems) {
      console.log(`Blob: ${blob.name}`);
    }
  } while (marker);

  // Get blob content from position 0 to the end
  // In Node.js, get downloaded data by accessing downloadBlockBlobResponse.readableStreamBody
  // In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
  const downloadBlockBlobResponse = await blobClient.download(Aborter.none, 0);
  console.log(
    "Downloaded blob content",
    await streamToString(downloadBlockBlobResponse.readableStreamBody)
  );

  // Delete container
  await containerClient.delete(Aborter.none);

  console.log("deleted container");
}

// A helper method used to read a Node.js readable stream into string
async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", data => {
      chunks.push(data.toString());
    });
    readableStream.on("end", () => {
      resolve(chunks.join(""));
    });
    readableStream.on("error", reject);
  });
}

// An async method returns a Promise object, which is compatible with then().catch() coding style.
main()
  .then(() => {
    console.log("Successfully executed sample.");
  })
  .catch(err => {
    console.log(err.message);
  });
