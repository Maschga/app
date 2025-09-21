import { ConfigPlugin, withPlugins } from "expo/config-plugins";
import patchAppGradle from "./src/patchBuildGradles/patchAppGradle";
import patchProjectGradle from "./src/patchBuildGradles/patchProjectGradle";
import addAndroidTest from "./src/addAndroidTest";
import enableUnencryptedTraffic from "./src/enableUnencryptedTraffic";

const configureDetox: ConfigPlugin = (config) => {
  return withPlugins(config, [
    patchProjectGradle,
    patchAppGradle,
    addAndroidTest,
    enableUnencryptedTraffic,
  ]);
};

export default configureDetox;
