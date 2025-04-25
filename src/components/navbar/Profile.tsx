import Image from "next/image";

const Profile = () => {
  return (
    <div className="border-l-1 border-l-white px-5 flex flex-row justify-between w-fit">
      <div className="flex flex-col space-y-1 justify-start">
        <div className="text-white text-sm">Last updated</div>
        {/* INFO: make the date dynamic*/}
        <div className="text-white text-sm font-[600]">03/15/25 11:30 EST</div>
      </div>
      <Image
        src="/bellicon.svg"
        alt="bellicon"
        width={15}
        height={19.19}
        className="mx-5 flex items-center justify-center"
      ></Image>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center space-x-3">
          <Image
            src="/profileicon.png"
            alt="profileicon"
            width={37}
            height={42}
            className="rounded-full"
          ></Image>
          <Image
            src="/dropdown.svg"
            alt="dropdown"
            width={10}
            height={5}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Profile;
