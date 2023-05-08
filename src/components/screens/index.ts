import HomeScreen from "./home";

import CreateWalletNameScreen from "./auth/createWalletName";
import CreateWalletPINScreen from "./auth/createWalletPIN";
import ImportWalletScreen from "./auth/importWallet";
import LoginScreen from "./auth/login";
import OnBoardingScreen from "./auth/onBoarding";
import TermsScreen from "./auth/terms";

import ManageWalletScreen from './wallet/manageWallet'
import ManageTokenScreen from './wallet/manageToken'

export const ScreenName = {
    AUTH_CREATEWALLETNAME : "CreateWalletName",
    AUTH_CREATEWALLETPIN : "CreateWalletPIN",
    AUTH_IMPORTWALLET : "ImportWallet",
    AUTH_LOGIN : "Login",
    AUTH_ONBOARDING : "OnBoarding",
    AUTH_TERMS: "Terms",

    HOME : "Home",

    WALLET_MANAGEWALLET : "ManageWallet",
    WALLET_MANAGETOKEN : "ManageToken"
}

export const Screens = {
    AUTH_CREATEWALLETNAME : CreateWalletNameScreen,
    AUTH_CREATEWALLETPIN : CreateWalletPINScreen,
    AUTH_IMPORTWALLET : ImportWalletScreen,
    AUTH_LOGIN : LoginScreen,
    AUTH_ONBOARDING : OnBoardingScreen,
    AUTH_TERMS: TermsScreen,

    HOME : HomeScreen,

    WALLET_MANAGEWALLET : ManageWalletScreen,
    WALLET_MANAGETOKEN : ManageTokenScreen
}