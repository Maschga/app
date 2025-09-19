import { execSync } from "child_process";

const emulatorName = "EvccEmulator";

function isDeviceConnected(): boolean {
  try {
    return execSync("adb devices -l").toString().includes("device product:");
  } catch (error) {
    console.error("Error while checking devices:", error);
    return false;
  }
}

function startEmulator(): void {
  try {
    console.log("Starting the emulator...");
    execSync(`emulator -avd ${emulatorName} -netdelay none -netspeed full`);
  } catch (error) {
    console.error("Error while starting the emulator:", error);
  }
}

function createEmulator(): void {
  try {
    const avdList = execSync("emulator -list-avds").toString();

    if (!avdList.includes(emulatorName)) {
      console.log("Emulator does not exist. Creating...");

      execSync(
        `echo no | avdmanager create avd -n ${emulatorName} -k "system-images;android-36;google_apis;x86_64"`,
        { stdio: "inherit" },
      );

      console.log("\nEmulator has been created.");
    } else {
      console.log("Emulator already exists.");
    }
  } catch (error) {
    console.error("Error while creating the emulator:", error);
  }
}

try {
  if (isDeviceConnected()) {
    console.log("A real device or an emulator is already running.");
  } else {
    createEmulator();
    startEmulator();
  }
} catch (error) {
  console.error("Error during emulator management:", error);
}
