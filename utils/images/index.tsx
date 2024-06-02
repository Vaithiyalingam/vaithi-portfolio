import blioTx from "../../public/assets/blio_tx.png";
import blioHome from "../../public/assets/blio_home.png";
import blioPulse from "../../public/assets/blio_pulse.png";
import cosmoChat from "../../public/assets/cosmo_chat.png";
import cosmoHome from "../../public/assets/cosmo_home.png";
import cosmoSpeechToText from "../../public/assets/speech_to_text.png";
import frontHome from "../../public/assets/front_web_home.png";
import frontSwap from "../../public/assets/front_web_swap.png";
import frontPartners from "../../public/assets/front_web_partners.png";
import extHome from "../../public/assets/ext_home.png";
import extNft from "../../public/assets/ext_nft.png";
import extSend from "../../public/assets/ext_send.png";
import boilerplateHome from "../../public/assets/Wallet_home.png";
import boilerplateBackup from "../../public/assets/backup_file.png";
import boilerplateOnboarding from "../../public/assets/boilerplate_onboarding.png";
import demoSandbox from "../../public/assets/demo_sandbox.png";
import demoHome from "../../public/assets/demo_home.png";
import demoWalletSetup from "../../public/assets/demo_wallet_setup.png";
import clinkOnboard from "../../public/assets/clink_onboard.png";
import clinkTx from "../../public/assets/clink_tx.png";
import bocGame from "../../public/assets/boc_game.png";
import bocOnboarding from "../../public/assets/boc_onboarding.png";
import blockHome from "../../public/assets/block_home.png";
import blockDecode from "../../public/assets/block_decode.png";
import blockDecodeListing from "../../public/assets/block_decode_listing.png";

export type TImages =
  | "blioTx"
  | "blioHome"
  | "blioPulse"
  | "cosmoChat"
  | "cosmoHome"
  | "cosmoSpeechToText"
  | "frontHome"
  | "frontSwap"
  | "frontPartners"
  | "extHome"
  | "extNft"
  | "extSend"
  | "boilerplateHome"
  | "boilerplateBackup"
  | "boilerplateOnboarding"
  | "demoWalletSetup"
  | "demoHome"
  | "demoSandbox"
  | "clinkOnboard"
  | "clinkTx"
  | "bocOnboarding"
  | "bocGame"
  | "blockHome"
  | "blockDecode"
  | "blockDecodeListing";

export type TNextImage = {
  src: string;
  height: number;
  width: number;
};

export const icons: Record<TImages, TNextImage> = {
  blioTx,
  blioHome,
  blioPulse,
  cosmoChat,
  cosmoHome,
  cosmoSpeechToText,
  frontHome,
  frontSwap,
  frontPartners,
  extHome,
  extNft,
  extSend,
  boilerplateHome,
  boilerplateBackup,
  boilerplateOnboarding,
  demoWalletSetup,
  demoHome,
  demoSandbox,
  clinkOnboard,
  clinkTx,
  bocOnboarding,
  bocGame,
  blockHome,
  blockDecode,
  blockDecodeListing,
};
