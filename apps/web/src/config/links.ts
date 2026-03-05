const VOG_BASE =
  process.env.NEXT_PUBLIC_VOG_BASE_URL?.replace(/\/$/, "") || "";

export const VOG_SUPPORT_PATH = "/#voiceopengov-support";
export const VOG_SUPPORT_URL = VOG_BASE ? `${VOG_BASE}${VOG_SUPPORT_PATH}` : VOG_SUPPORT_PATH;

export const EDEBATTE_SIGNUP_URL = "https://www.edebatte.org/";
export const EDEBATTE_PREORDER_URL = "https://www.edebatte.org/pricing";
