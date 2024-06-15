import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://411-room.mannez.site"),
  title: "4/11 Room Website",
  description: "เว็บไซต์ห้อง 4/11 สุดตึง",
  icons: [
    {
      url: "/icon.jpg",
      href: "/icon.jpg",
    },
  ],
  openGraph: {
    title: "bwn_situbsibet | เว็บห้อง 4/11",
    description: "เว็บไซต์ห้อง 4/11 สุดตึง ตึงจนเป้าขาด",
    url: "https://411-room.mannez.site",
    siteName: "411-room.mannez.site",
    locale: "en_US",
    type: "website",
    images: ["/background.png"],
  },
};
