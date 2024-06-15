import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export default () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="shadow m-2 p-6 rounded-xl bg-white/5">
        <p>Instagram ห้อง</p>
        <Link
          isExternal
          showAnchorIcon
          as={NextLink}
          href={"https://www.instagram.com/bwn_situbsibet/"}
          className="font-bold"
          color='success'
        >
          bwn_situbsibet
        </Link>
      </div>
      <div className="shadow m-2 p-6 rounded-xl bg-white/5">
        <p>Contact Developer</p>
        <Link
          isExternal
          showAnchorIcon
          as={NextLink}
          href={"mailto:Jittiphat@mannez.site"}
          className="font-bold"
          color='warning'
        >
          Jittiphat@mannez.site
        </Link>
      </div>
      <div className="shadow m-2 p-6 rounded-xl bg-white/5">
        <p>Discord</p>
        <Link
          isExternal
          showAnchorIcon
          as={NextLink}
          href={""}
          className="font-bold"
          color='success'
        >
          Coming Soon!
        </Link>
      </div>
      
    </div>
  </>
);
