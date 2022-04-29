import Logo from "../Logo/Logo";
import CustomButton from "../Custom/CustomButton/CustomButton";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <Logo />
      <div className="flex flex-row-reverse">
        <div className="flex">
          <CustomButton onClick={() => router.push("explore")}>
            Explore
          </CustomButton>
          <CustomButton onClick={() => router.push("stats")}>
            Stats
          </CustomButton>
          <CustomButton onClick={() => router.push("resources")}>
            Resources
          </CustomButton>
          <CustomButton onClick={() => router.push("create")}>
            Create
          </CustomButton>
          <CustomButton onClick={() => router.push("icon1")}>Icon1</CustomButton>
          <CustomButton onClick={() => router.push("icon2")}>Icon2</CustomButton>
        </div>
        <div className="border border-gray-500 rounded-lg h-10 flex active:bg-red-500 w-96">
          lupa
          <input
            placeholder="Search items, collections, and accounts"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
