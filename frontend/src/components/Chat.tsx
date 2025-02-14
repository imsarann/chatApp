import Button from "./Button";
import InputBox from "./InputBox";
import Message from "./Message";

export default function Chat() {
  return (
    <div>

    <div className="bg-onyx text-white w-[550px] h-[600px] rounded-t-2xl">
      <Message text={"hello"}/>
    </div>
      <div className="flex justify-between w-[550px] relative">
      <InputBox/>
      <div className="absolute ml-[500px] mt-[5px]  ">
      <Button/>
      </div>
      </div>
    </div>
  )
}
