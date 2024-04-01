import Link from "next/link";
import Text from "./ui/Text";
import Title from "./ui/Title";

const Contact = () => {
  const text = (
    <p className="text-[17px]">
      Feel free to contact me at the emails below, otherwise <br />
      you can contact me on{" "}
      <Link
        target="__blank"
        href="https://discord.com/users/657671413947301959"
        className="text-orange font-semibold font-mulish underline  "
      >
        Discord
      </Link>{" "}
      too.
    </p>
  );

  const email = (
    <p className="text-dark text-md font-bold font-mulish underline  ">
      parisii.leonardo@gmail.com
    </p>
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-7">
        <div>
          <Title
            title="Contacts."
            className="font-semibold text-[40px] text-dark font-mulish mb-3"
          />
          <Text text={text} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Text text="Email" className="font-semibold font-mulish text-dark" />
          <Link href="mailto:parisii.leonardo@gmail.com" target="__blank">
            <Text text={email} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
