import { TNextImage, icons } from "./utils/images";

export interface ISelectedWorks {
  name: string;
  description: string;
  demoImgs: TNextImage[];
  myContributions: string;
  techStacks: string;
  isMobile: boolean;
}

export interface IFooterLinks {
  name: string;
  link: string;
}

export const selectedWorks: ISelectedWorks[] = [
  {
    name: "FRONTIER EXTENSION",
    description:
      "The Frontier Wallet extension is a browser-based cryptocurrency wallet designed to facilitate the management of digital assets and interaction with decentralized applications (dApps). Supporting multiple blockchains like Ethereum, Binance Smart Chain, Polygon, and Solana, it allows users to handle various cryptocurrencies within a single interface, the extension offers essential wallet functions such as sending, receiving, swapping, bridging, and buying cryptocurrencies, while also enabling interaction with DeFi activities like staking and yield farming.",
    demoImgs: [icons.extHome, icons.extSend, icons.extNft],
    myContributions:
      "In the Frontier Wallet extension, I played a pivotal role in enhancing the user interface, ensuring a seamless and intuitive user experience. I implemented core functionalities to guarantee robust performance and reliability. Additionally, I developed the buy feature, enabling users to effortlessly purchase cryptocurrencies directly within the wallet. My contributions also extended to the transaction functionalities within the Cosmos ecosystem using Inter-Blockchain Communication (IBC), further enhancing the wallet's capabilities and user satisfaction.",
    techStacks: "Reactjs, Nextjs, Typescript, Framer motion, TailwindCss",
    isMobile: true,
  },
  {
    name: "FRONTIER WEBSITE",
    description:
      "The Frontier website is a dynamic and visually engaging platform that leverages extensive animations using Framer Motion and CSS. It showcases a modern design aesthetic with smooth transitions and interactive elements, creating a captivating user experience.",
    demoImgs: [icons.frontHome, icons.frontSwap, icons.frontPartners],
    myContributions:
      "During the campaign period, I led the development of compelling UI animations and streamlined wallet connection transaction functionalities for the Frontier website. Additionally, I worked on features tabs, pages UI, and animations using Framer Motion, contributing to enriching the user experience and achieving our campaign goals effectively.",
    techStacks: "Reactjs, Typescript, Framer motion, TailwindCss",
    isMobile: false,
  },
  {
    name: "BLIO BLOCKCHAIN EXPLORER",
    description:
      "Blio is a blockchain explorer that stands out with its user-friendly UI/UX, making it accessible for both newcomers to blockchain technology and seasoned enthusiasts. It provides a straightforward interface that simplifies the understanding of transactions, ensuring that users can easily grasp what's happening with their transactions. Beyond its user-friendly approach, Blio also offers a developer mode tailored for blockchain nerds who want to explore their wallet activities in more detail. This mode features a beautifully designed UI that enhances the overall user experience, making it a versatile tool for a wide range of users in the blockchain community.",
    demoImgs: [icons.blioHome, icons.blioPulse, icons.blioTx],
    myContributions:
      "In Blio, I developed core functionalities including contract verification, listing pages, and UIs for a blockchain explorer. Using Next.js, React, TypeScript, and Tailwind CSS, I ensured a robust and responsive solution for users, whether they were new to blockchain or enthusiasts. These features provided transparency in transactions and organized blockchain data effectively, while the UIs were designed to enhance usability and accessibility across devices.",
    techStacks: "Reactjs, Nextjs, Typescript, Framer motion, TailwindCss",
    isMobile: false,
  },
  {
    name: "BLOCKTHEORY WEBSITE",
    description:
      "The BlockTheory website is a comprehensive platform centered around blockchain and Web3 technologies. It features blog functionalities with list and detail pages, author profiles, and interactive `Decodes` sections. These `Decodes` are designed to explain complex Web3 topics in an engaging and accessible manner.",
    demoImgs: [icons.blockHome, icons.blockDecode, icons.blockDecodeListing],
    myContributions:
      "In the development of the BlockTheory website, I played a pivotal role in implementing several key features. I developed the blog functionalities, including both list and detail pages, ensuring smooth navigation and a seamless reading experience. Additionally, I created author profiles that effectively showcase contributors and their contributions to the platform. One of the highlights of my work was designing and implementing the interactive `Decodes` sections using Framer Motion. These sections use rich animations to dynamically explain complex Web3 concepts, enhancing the educational value of the platform.",
    techStacks: "Reactjs, Nextjs, Typescript, Framer motion, TailwindCss",
    isMobile: false,
  },
  {
    name: "SL DEMO",
    description:
      "The SL SDK Demo (sl-demo) is a web application developed to showcase the functionalities of the Silent Labs SDK. This SDK provides developers with tools to integrate secure and private communication features into their applications. The sl-demo web application is designed to demonstrate these capabilities through interactive and engaging examples.",
    demoImgs: [icons.demoHome, icons.demoWalletSetup, icons.demoSandbox],
    myContributions:
      "In the SL SDK Demo project, I played a crucial role in designing and developing the entire web application. I focused on creating a user-friendly interface that effectively highlights the features of the Silent Labs SDK. This included designing and implementing core functionalities, user interface components, and interactive animations. The animations were particularly important as they dynamically demonstrate the SDK's functionalities, making them more accessible and engaging for potential users. Overall, my contributions were aimed at providing a compelling demonstration of the SDK's capabilities, helping developers understand how they can integrate secure communication solutions into their own applications.",
    techStacks: "Reactjs, Nextjs, Typescript, Framer motion, TailwindCss",
    isMobile: false,
  },
  {
    name: "SL BOILERPLATE",
    description:
      "The SL Boilerplate demonstrates the practical use cases of the Silent Labs SDK functions in a mobile application. It serves as a foundational template for developers looking to integrate secure and private communication features into their apps. The boilerplate showcases functionalities such as secure data signing with TEE, face verification with FaceTec, and includes various UI components designed to enhance user experience and security.",
    demoImgs: [
      icons.boilerplateOnboarding,
      icons.boilerplateBackup,
      icons.boilerplateHome,
    ],
    myContributions:
      "In this project, I designed and developed a comprehensive mobile app boilerplate using React Native and TypeScript. My focus was on integrating essential native modules like FaceTec for face verification, TEE for secure data signing, and various UI components. Additionally, I ensured the boilerplate was well-documented with comprehensive code comments explaining the purpose of the code. This approach enhances maintainability and facilitates the faster implementation of future mobile features.",
    techStacks: "React Native, Typescript, Tamagui",
    isMobile: true,
  },
  {
    name: "COSMO AI",
    description:
      "Cosmo is an AI superapp designed to automate your digital life, serving as an automation platform powered by AI to streamline everyday tasks. The mobile application features robust functionalities that leverage AI capabilities to simplify daily routines.",
    demoImgs: [icons.cosmoHome, icons.cosmoChat, icons.cosmoSpeechToText],
    myContributions:
      "In the development of Cosmo, I focused on two key areas: the onboarding UI and functionalities, and the chat page with complex dynamic UI integrations. For the onboarding process, I designed and implemented a user-friendly interface that guides users seamlessly through the initial setup of the app, ensuring a smooth and intuitive experience. Additionally, I enhanced the chat page by integrating complex and dynamic UI elements to facilitate rich user interaction. This included real-time updates, interactive components, and intuitive design features. I also implemented the speech-to-text feature, further enhancing usability and accessibility within the Cosmo AI superapp.",
    techStacks: "React Native, Typescript, Tamagui",
    isMobile: true,
  },
  {
    name: "CLINK",
    description:
      "Clink is an innovative project developed during the EthGlobal Superhack Hackathon, aimed at simplifying the sharing of crypto assets through a lightweight wallet using just a link. The project utilizes ERC-4337 and integrates various technologies like Safe Core SDK, Base, Trust Wallet Wallet Core, Next.js, Web3Auth, and Gelato.",
    demoImgs: [icons.clinkOnboard, icons.clinkTx],
    myContributions:
      "In the development of Clink, I contributed to the entire functionality of the application. This included handling transactions (txs), implementing wallet connect features, and creating account abstraction for the lightweight wallet. My efforts were crucial in ensuring the seamless operation and security of crypto token sharing through links, making Clink a practical and user-friendly solution for cryptocurrency enthusiasts.",
    techStacks: "Reactjs, Nextjs, Typescript, TailwindCss",
    isMobile: false,
  },
  {
    name: "BATTLE OF CARDS",
    description:
      "'Battle of Cards' is an exciting card game designed for WWE enthusiasts and strategy game lovers. Players collect and duel with trump cards featuring iconic WWE superstars, each with unique attributes. Powered by Waku node provider and built on the Mantle platform, 'Battle of Cards' offers a seamless, real-time gaming experience. Engage in strategic battles, build your ultimate WWE deck, and rise through the ranks to become the champion of the digital arena.",
    demoImgs: [icons.bocOnboarding, icons.bocGame],
    myContributions:
      "In the 'Battle of Cards' project, I led the design and development of the entire user interface (UI). I focused on creating a visually appealing and user-friendly interface to enhance the gaming experience. My work aimed to provide intuitive navigation, engaging visuals, and seamless interactions, ensuring an immersive gameplay experience for WWE fans and strategy enthusiasts.",
    techStacks: "Reactjs, Nextjs, Typescript, TailwindCss",
    isMobile: false,
  },
];

export const footerLinks: IFooterLinks[] = [
  {
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/vaithiyalingam-sowmiyan-aa903b187",
  },
  {
    name: "GITHUB",
    link: "https://github.com/VaithiDS",
  },
  {
    name: "ABOUTME",
    link: "https://about.me/vaithiyalingam",
  },
  {
    name: "DEVFOLIO",
    link: "https://devfolio.co/@vaithiS",
  },
];
