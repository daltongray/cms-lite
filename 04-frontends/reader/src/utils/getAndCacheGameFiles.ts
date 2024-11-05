export const getAndCacheGameFiles = async () => {
  try {
    // todo item 1 - make calls to firebase storage to pull game images
  //   const response = await getParticipantGames(dependencies)();
  //
  //   if (!response || response instanceof Error) {
  //     console.error("unable to get games", response);
  //     return;
  //   }
  //
  //   gameDataManager.update({
  //     hasFetchedGames: true,
  //     gameDefinitions: response.data,
  //   });
  //
  //   // iterate thru the assets to load them
  //
  //   await Promise.all(
  //     response.data.map(async ({ media }) => {
  //       await Promise.all(
  //         media.map(async ({ mediaType, downloadUrl }) => {
  //           if (mediaType === "image") {
  //             await new Promise((resolve) => {
  //               const image = new Image();
  //               image.onload = resolve;
  //               image.src = downloadUrl;
  //             });
  //           }
  //
  //           if (mediaType === "audio") {
  //             await new Promise((resolve) => {
  //               const audio = new Audio();
  //               audio.onload = resolve;
  //               audio.preload = "auto";
  //               audio.src = downloadUrl;
  //               audio.load();
  //             });
  //           }
  //         })
  //       );
  //     })
  //   );
  } catch (reason) {
    console.error("Unable to getAndCacheGameFiles", reason);
  }
};
