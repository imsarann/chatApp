interface MessageProps {
    text: string;
  }
export default function Message({text} : MessageProps) {
  return (
    <div className='bg-white text-black  p-1 inline-block rounded-[8px]' >
      {text}
    </div>
  )
}
