'use client'
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="font-mulish font-semibold flex flex-col items-center gap-4">
        <h1 className="text-5xl">Oh oh!</h1>
        <Text text="it seems you are lost!😕" />
        <Link href='/' className="text-base font-medium">
            <Button title="home page" />
        </Link>
    </div>
  )
}

export default NotFound;