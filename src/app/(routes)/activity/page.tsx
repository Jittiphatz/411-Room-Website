import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

import NextLink from "next/link";
import NextImage from "next/image";

const acti = [
  {
    title: {
      label: "กิจกรรมไหว้ครู ห้อง4/11 2567",
      href: "",
    },
    from: "",
    to: "13-06-2024",
    image: "activity/1718460007241.jpg",
  },
];

export default () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {acti.map((item, index) => (
        <div className="shadow m-2 p-6 rounded-xl bg-white/5" key={index}>
          <Link
            isExternal
            showAnchorIcon
            as={NextLink}
            href={item.title.href}
            className="font-bold"
            color="success"
          >
            {item.title.label}
          </Link>
          <p className="text-slate-500">
            {item.from}  {item.to}
          </p>
          <div className="flex justify-center">
            <Image
              alt="Activity"
              className="object-cover rounded-xl"
              src={item.image}
              width={512}
              height={256}
              isBlurred
            />
          </div>
        </div>
      ))}
    </div>
  </>
);
